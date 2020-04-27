const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export interface Credentials {
    username: string
}

export interface AuthenticateResult {
    profile: {
        id: string
        username: string
    }
    token: string
}

export const SessionService = {
    async authenticate(credentials: Credentials): Promise<AuthenticateResult> {
        await sleep(500)
        console.log('Authenticated')

        return {
            profile: {
                id: 'ID',
                username: credentials.username,
            },
            token: 'TOKEN',
        }
    },

    async logout() {
        console.log('Logged out')
    },
}
