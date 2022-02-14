import { groupBy, prop } from 'ramda'
// @ts-ignore
import fs from 'fs'
const s = JSON.parse(fs.readFileSync('src/generator/swagger.json', 'utf-8'))

const route_str_to_route_fn_name = route_str => {
    let fn_name = ''

    for (let i = 5; i < route_str.length; i++) {
        const char = route_str[i]
        if (['/'].includes(char)) fn_name = fn_name + '_'
        if (!['{', '}', '/'].includes(char)) {
            if (
                char.toUpperCase() === char &&
                route_str[i - 1].toUpperCase() !== route_str[i - 1]
            ) {
                fn_name = fn_name + '_'
            }
            fn_name = fn_name + char.toLowerCase()
        }
    }
    return fn_name
}
const to_typescript_type = el => {
    if (el.type === 'integer') return 'number'

    if (el.type === 'string' && el.enum) {
        return el.enum.map(el => `'${el}'`).join(' | ')
    }

    if (el.type === 'object') {
        const type = Object.keys(el.properties || {}).reduce((acc, val) => {
            acc =
                acc +
                `${val.startsWith('.') ? `'${val}'` : val}${
                    el.required?.includes(val) ? '' : '?'
                }: ${to_typescript_type(el.properties[val])}, `
            return acc
        }, ``)
        return `{${type}}`
    }

    if (el.type === 'array') {
        if (!el.items['$ref']) {
            return `Array<${to_typescript_type(el.items)}>`
        }

        const items = s.definitions[el.items['$ref']?.slice(14, Infinity)]
        return `Array<${to_typescript_type(items)}>`
    }

    return el.type
}
const sanitize_route_str = str => {
    let sanitized = ''
    for (let i = 0; i < str.length; i++) {
        const char = str[i]
        if (char === '{') {
            sanitized = sanitized + `\${path.`
        } else {
            sanitized = sanitized + char
        }
    }
    return sanitized
}
const output = Object.keys(s.paths).flatMap(route_str => {
    const route = s.paths[route_str]
    return Object.keys(route).map(method => {
        const fn_name = `${method}_${route_str_to_route_fn_name(route_str)}`
        const parameters = route[method].parameters || []

        const responses = route[method].responses
        const $ref = responses?.['200']?.schema?.$ref?.slice(14, Infinity)
        const response_definition = $ref ? to_typescript_type(s.definitions[$ref]) : 'any'

        const body = parameters.filter(el => el.in === 'body')
        const pth = parameters.filter(el => el.in === 'path')
        const query = parameters.filter(el => el.in === 'query')

        const query_type = query.map(
            el =>
                `${el.name.split('.')[el.name.split('.').length - 1]}${
                    el.required ? '' : '?'
                }: ${to_typescript_type(el)}`
        )
        const path_type = pth.map(el => `${el.name}: ${to_typescript_type(el)}`)
        const body_type = body.map(el => {
            const definition =
                s.definitions[
                    (el.schema?.items?.['$ref'] || el.schema['$ref'])?.slice(14, Infinity)
                ]

            const bt = to_typescript_type(definition || {})
            return bt
        })[0]

        const last_param =
            method === 'get' && query.length > 0 ? 'query' : body.length > 0 ? 'body' : null
        ;('body')
        const output = `export type ${fn_name + '_type'} = ${response_definition}
export const ${fn_name} = async (
    base_url: string, 
    token: string, ${
        pth.length > 0
            ? `
    path: {${path_type}},`
            : ``
    } ${
            body.length > 0
                ? `
    body: ${body_type},`
                : ``
        } ${
            query.length > 0
                ? `
    query: {${query_type}},`
                : ``
        }
    axios: Function
): Promise<{data: ${fn_name + '_type'}}> => {
    return axios({
        method: '${method.toUpperCase()}', 
        url: \`${`\${base_url}${sanitize_route_str(route_str)}`}\`,
        headers: { Authorization: \`Bearer \${ token }\` },${
            query.length > 0
                ? `
        params: query,`
                : ''
        }${
            body.length > 0
                ? `
        data: body,`
                : ''
        }
    })
}`
        return output
    })
})

fs.writeFileSync('src/index.ts', `${output.join('\n\n')}`, 'utf-8')
