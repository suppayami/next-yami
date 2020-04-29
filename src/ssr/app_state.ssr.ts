import { Store, makeStore } from '@/common/store/store'

import { isBrowser } from './is_platform.ssr'

type AppStateConstructor = (store: Store) => Promise<void>

export const getInitialAppState = (constructor: AppStateConstructor) => async <T>(
    props: Promise<T> | T,
) => {
    if (isBrowser()) {
        return props
    }

    const store = makeStore()
    await constructor(store)
    return Promise.resolve(props).then((props) => ({ ...props, initialState: store }))
}
