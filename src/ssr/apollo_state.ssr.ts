import { ApolloClient, NormalizedCacheObject } from '@apollo/client'

import { initApolloClient } from '@/common/service/apollo'

type ApolloStateConstructor = (
    apollo: ApolloClient<NormalizedCacheObject>,
) => Promise<ApolloClient<NormalizedCacheObject>>

export const getInitialApolloState = (constructor: ApolloStateConstructor) => async <T>(
    props: Promise<T> | T,
) => {
    const apollo = await constructor(
        initApolloClient({ apiEndpoint: 'http://localhost:3000/api/graphql', ssr: true }),
    )
    return Promise.resolve(props).then((props) => ({
        ...props,
        apolloState: apollo.cache.extract(),
    }))
}
