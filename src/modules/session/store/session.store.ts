import { observable, flow } from 'mobx'

import {
    AuthenticateState,
    guestState,
    authenticatedState,
    authenticatingState,
} from './authenticate.state'
import { Credentials, SessionService, AuthenticateResult } from '../service/session.service'

export type SessionState = {
    authenticateState: AuthenticateState
}

export const makeSessionStore = (initialState?: SessionState) => {
    const store = observable({
        authenticateState: guestState(),
        ...initialState,

        authenticate: flow(function* authenticate(credentials: Credentials) {
            store.authenticateState = authenticatingState()
            const result: AuthenticateResult = yield SessionService.authenticate(credentials)
            store.authenticateState = authenticatedState(result)
        }),

        logout: flow(function* logout() {
            if (store.authenticateState.state !== 'authenticated') {
                throw new Error('Logout action not valid for unauthenticated state')
            }
            yield SessionService.logout()
            store.authenticateState = guestState()
        }),
    })

    return store
}

export type SessionStore = ReturnType<typeof makeSessionStore>
