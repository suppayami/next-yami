import { ApolloClient, NormalizedCacheObject } from '@apollo/client'

import { initApolloClient } from '@/common/service/apollo'

import { isBrowser } from './is_platform.ssr'

type ApolloStateConstructor = (apollo: ApolloClient<NormalizedCacheObject>) => Promise<void>

export const getInitialApolloState = (constructor: ApolloStateConstructor) => async <T>(
    props: Promise<T> | T,
) => {
    if (isBrowser()) {
        return props
    }

    const apollo = initApolloClient({ apiEndpoint: 'http://localhost:3000/api/graphql', ssr: true })
    await constructor(apollo)
    return Promise.resolve(props).then((props) => ({
        ...props,
        apolloState: apollo.cache.extract(),
    }))
}
