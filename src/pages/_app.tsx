import '@/common/tailwind.css'

import React from 'react'
import App from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { Provider } from 'react-redux'

import { initApolloClient } from '@/common/service/apollo'
import { initStore } from '@/common/store/store'

// eslint-disable-next-line import/no-default-export
export default class DTApp extends App {
    render() {
        const { Component, pageProps } = this.props
        // TODO: Change API Endpoint if needed
        const apolloClient = initApolloClient({ apiEnpoint: '/api/graphql' })

        return (
            <ApolloProvider client={apolloClient}>
                <Provider store={initStore()}>
                    <Component {...pageProps} />
                </Provider>
            </ApolloProvider>
        )
    }
}
