import { ApolloClient, InMemoryCache } from '@apollo/client'

import { makeHttpLink } from './http.link'
import { makeRenewSessionLink } from './renew_session.link'
import { makeAuthLink } from './auth.link'

interface Options {
    apiEndpoint?: string
    initialState?: any
    cookie?: string
    token?: string
    ssr?: boolean
}

export const initApolloClient = (options?: Options) => {
    const link = options?.ssr
        ? makeHttpLink({ uri: options?.apiEndpoint, cookie: options?.cookie })
        : makeRenewSessionLink()
              .concat(makeAuthLink(options?.token))
              .concat(makeHttpLink({ uri: options?.apiEndpoint }))

    return new ApolloClient({
        cache: new InMemoryCache({ addTypename: true }).restore(options?.initialState ?? {}),
        connectToDevTools: !options?.ssr,
        ssrMode: !!options?.ssr,
        ssrForceFetchDelay: 100, // magic number!
        link,
    })
}
