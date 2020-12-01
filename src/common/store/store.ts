import * as React from 'react'
import { configure } from 'mobx'

import { makeSessionStore, SessionStore } from '@/modules/session/store/session.store'

configure({ enforceActions: 'always' })

export interface Store {
    sessionStore: SessionStore
}

export const makeStore = (initialState?: Partial<Store>): Store => ({
    sessionStore: makeSessionStore(initialState?.sessionStore),
})

export const StoreContext = React.createContext<Store>(makeStore())
StoreContext.displayName = 'StoreContext'
