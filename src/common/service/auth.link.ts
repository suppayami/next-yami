import { setContext } from '@apollo/link-context'

// TODO: Configure Token
export const getToken = () => ''
export const setToken = (token: string) => token

export const makeAuthLink = (initToken?: string) =>
    setContext((_, { headers }) => {
        const token = initToken ?? getToken()

        return {
            headers: {
                ...headers,
                Authorization: token ? `Bearer ${token}` : '',
            },
        }
    })
