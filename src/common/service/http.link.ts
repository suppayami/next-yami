import { HttpLink } from '@apollo/client'
import fetch from 'isomorphic-unfetch'

interface Options {
    uri?: string
}

export const makeHttpLink = (options?: Options) =>
    new HttpLink({
        credentials: 'same-origin',
        uri: options?.uri ?? '/api/graphql',
        fetch,
    })
