import { ApolloClient, NormalizedCacheObject } from '@apollo/client'
import { NextPageContext } from 'next'
import { toJS } from 'mobx'

import { initApolloClient } from '@/common/service/apollo'
import { Config } from '@/common/config'
import { Store, makeStore } from '@/common/store/store'

import { isBrowser } from './is_platform.ssr'

type Managers = {
    apollo: ApolloClient<NormalizedCacheObject>
    store: Store
}
export type StateConstructor = (managers: Managers) => Promise<void>

export const getInitialState = (context: NextPageContext) => (
    constructor: StateConstructor,
) => async <T>(props: Promise<T> | T) => {
    if (isBrowser()) {
        return props
    }

    const apollo = initApolloClient({
        apiEndpoint: `${Config.siteUrl}${Config.apiEndpoint}`,
        cookie: context.req?.headers.cookie,
        ssr: true,
    })
    const store = makeStore()
    await constructor({ apollo, store })

    return Promise.resolve(props).then((props) => ({
        ...props,
        apolloState: apollo.cache.extract(),
        initialState: toJS(store),
    }))
}
