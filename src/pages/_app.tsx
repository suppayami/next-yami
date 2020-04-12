import '@/common/tailwind.css'

import React from 'react'
import App from 'next/app'
import { ApolloProvider } from '@apollo/client'

import { initApolloClient } from '@/common/service/apollo'

// eslint-disable-next-line import/no-default-export
export default class DTApp extends App {
    render() {
        const { Component, pageProps } = this.props
        // TODO: Change API Endpoint if needed
        const apolloClient = initApolloClient({ apiEnpoint: '/api/graphql' })

        return (
            <ApolloProvider client={apolloClient}>
                <Component {...pageProps} />
            </ApolloProvider>
        )
    }
}
