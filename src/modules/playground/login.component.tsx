import * as React from 'react'
import { observer } from 'mobx-react-lite'

import { useSessionStore, useAuthenticateState } from '../session/hook/session_store.hook'

export const Login = observer(function Login() {
    const sessionStore = useSessionStore()
    const authenticateState = useAuthenticateState()

    if (authenticateState.state === 'authenticating') {
        return <button>Logging In...</button>
    }

    if (authenticateState.state === 'authenticated') {
        return (
            <button onClick={() => sessionStore.logout()}>
                Logout ({authenticateState.profile.username})
            </button>
        )
    }

    return <button onClick={() => sessionStore.authenticate({ username: 'Admin' })}>Login</button>
})
