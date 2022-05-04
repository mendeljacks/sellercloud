import mem from 'mem'

export type SellercloudAuth = { user_name: string; password: string; server_id: string }
const safety_margin = 10000
export const auth_to_token = mem(
    async (auth: SellercloudAuth, axios) => {
        const response = await axios({
            method: 'POST',
            url: `${auth_to_base_url(auth)}/api/token`,
            data: {
                Username: auth.user_name,
                Password: auth.password
            }
        })

        return response.data.access_token
    },
    { maxAge: 60 * 60 * 1000 - safety_margin, cacheKey: args => JSON.stringify(args[0]) }
)

export const auth_to_base_url = (auth: SellercloudAuth): string => {
    return `https://${auth.server_id}.api.sellercloud.com/rest`
}
