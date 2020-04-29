import { HttpLink } from '@apollo/client'
import fetch from 'isomorphic-unfetch'

import { Config } from '../config'

interface Options {
    uri?: string
    cookie?: string
}

export const makeHttpLink = (options?: Options) =>
    new HttpLink({
        credentials: 'same-origin',
        uri: options?.uri ?? `${Config.siteUrl}${Config.apiEndpoint}`,
        fetch,
        headers: {
            Cookie: options?.cookie,
        },
    })
