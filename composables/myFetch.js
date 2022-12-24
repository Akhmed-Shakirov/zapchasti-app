// const api = import.meta.env.VITE_PASSPORT_API_ENDPOINT

const BASEURL = 'https://zapchasti-app.herokuapp.com'

export const myFetch = async (
    url,
    method = 'GET',
    data = {},
    headers = { 'Content-Type': 'application/json' }
// eslint-disable-next-line require-await
) => {
    const params = {
        method,
        headers: {
            ...headers
        }
    }
    if (method !== 'GET' && method !== 'HEAD') {
        params.body = JSON.stringify(data) || {}
    }

    return fetch(`${BASEURL}/${url}`, params).then((res) => {
        return res.json()
    })
}
