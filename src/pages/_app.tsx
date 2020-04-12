import '@/common/tailwind.css'

import React from 'react'
import App from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { Provider } from 'react-redux'
import { I18nextProvider } from 'react-i18next'

import { initApolloClient } from '@/common/service/apollo'
import { initStore } from '@/common/store/store'
import { i18n } from '@/common/i18n/i18n'

// eslint-disable-next-line import/no-default-export
export default class DTApp extends App {
    render() {
        const { Component, pageProps } = this.props
        // TODO: Change API Endpoint if needed
        const apolloClient = initApolloClient({ apiEnpoint: '/api/graphql' })

        return (
            <I18nextProvider i18n={i18n}>
                <ApolloProvider client={apolloClient}>
                    <Provider store={initStore()}>
                        <Component {...pageProps} />
                    </Provider>
                </ApolloProvider>
            </I18nextProvider>
        )
    }
}
