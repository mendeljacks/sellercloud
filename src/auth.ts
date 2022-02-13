import * as memoizee from 'memoizee'

export type SellercloudAuth = { user_name: string; password: string; server_id: string }
const safety_margin = 10000
export const auth_to_token = memoizee(
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
    { promise: true, maxAge: 60 * 60 * 1000 - safety_margin, primitive: true }
)

export const auth_to_base_url = (auth: SellercloudAuth): string => {
    return `https://${auth.server_id}.api.sellercloud.com/rest`
}
