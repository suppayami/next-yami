import { useStore } from '@/common/store/store.hook'

export const useSessionStore = () => useStore().sessionStore
export const useAuthenticateState = () => useSessionStore().authenticateState
