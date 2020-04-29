import { ApolloClient, NormalizedCacheObject } from '@apollo/client'

export const apolloAuthorization = async (apollo: ApolloClient<NormalizedCacheObject>) => {
    // TODO: Fetch token here
    const token = await Promise.resolve('')

    // No putting Authorization header
    if (!token) {
        return
    }

    // Override apollo default options, putting Authorization header
    apollo.defaultOptions.query = {
        context: {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    }
}
