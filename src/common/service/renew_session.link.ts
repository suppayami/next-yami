import { onError } from '@apollo/link-error'
import { GraphQLError } from 'graphql'
import { Observable, ApolloError } from '@apollo/client'

// TODO: Configure Renew Session
const needRenewSession = (errors: readonly GraphQLError[]) =>
    errors.some((gqlError) => gqlError.extensions && gqlError.extensions.code === 'UNAUTHORIZED')

const RenewSessionOperationName = 'RenewSession'

const renewSession = async (): Promise<string> => {
    throw new ApolloError({ errorMessage: 'Renew session not implemented' })
}

export const makeRenewSessionLink = () =>
    onError(({ networkError, graphQLErrors, operation, forward }) => {
        if (networkError) {
            return forward(operation)
        }

        if (graphQLErrors && needRenewSession(graphQLErrors)) {
            if (operation.operationName === RenewSessionOperationName) {
                return
            }

            return new Observable<string>((subscriber) => {
                renewSession().then(
                    (result) => {
                        if (subscriber.closed) {
                            return
                        }
                        subscriber.next(result)
                        subscriber.complete()
                    },
                    (_err) => forward(operation),
                )
            }).flatMap((result) => {
                const headers = operation.getContext().headers
                operation.setContext({
                    ...headers,
                    Authorization: result ? `Bearer ${result}` : '',
                })
                return forward(operation)
            })
        }

        return
    })
