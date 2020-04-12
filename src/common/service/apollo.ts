import { ApolloClient, InMemoryCache } from '@apollo/client'

import { makeHttpLink } from './http.link'
import { makeRenewSessionLink } from './renew_session.link'
import { makeAuthLink } from './auth.link'

interface Options {
    apiEnpoint?: string
    initialState?: any
}

export const initApolloClient = (options?: Options) =>
    new ApolloClient({
        cache: new InMemoryCache({ addTypename: true }).restore(options?.initialState ?? {}),
        link: makeRenewSessionLink()
            .concat(makeAuthLink())
            .concat(makeHttpLink({ uri: options?.apiEnpoint })),
        connectToDevTools: true,
    })
