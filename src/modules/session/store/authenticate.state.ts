export type ProfileState = {
    id: string
    username: string
}

export type AuthenticateState =
    | {
          state: 'guest'
      }
    | {
          state: 'authenticating'
      }
    | {
          state: 'authenticated'
          token: string
          profile: ProfileState
      }

export type AuthenticatedPayload = { profile: ProfileState; token: string }

/**
 * Guest State constructor
 */
export const guestState = (): AuthenticateState => ({
    state: 'guest',
})

/**
 * Authenticating State constructor
 */
export const authenticatingState = (): AuthenticateState => ({
    state: 'authenticating',
})

/**
 * Authenticated State constructor
 */
export const authenticatedState = (payload: AuthenticatedPayload): AuthenticateState => ({
    state: 'authenticated',
    ...payload,
})
