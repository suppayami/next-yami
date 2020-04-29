import { Store, makeStore } from '@/common/store/store'

type AppStateConstructor = (store: Store) => Promise<Store>

export const getInitialAppState = (constructor: AppStateConstructor) => async <T>(
    props: Promise<T> | T,
) => {
    const store = await constructor(makeStore())
    return Promise.resolve(props).then((props) => ({ ...props, initialState: store }))
}
