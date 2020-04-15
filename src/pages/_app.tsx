import '@/common/tailwind.css'

import * as React from 'react'
import App from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { Provider } from 'react-redux'
import { I18nextProvider } from 'react-i18next'
import Head from 'next/head'

import { initApolloClient } from '@/common/service/apollo'
import { initStore } from '@/common/store/store'
import { i18n } from '@/common/i18n/i18n'
import { LayoutPage } from '@/types'
import { Config } from '@/common/config'

// eslint-disable-next-line import/no-default-export
export default class DTApp extends App {
    render() {
        const { Component, pageProps } = this.props
        // TODO: Change API Endpoint if needed
        const apolloClient = initApolloClient({ apiEnpoint: '/api/graphql' })
        const LayoutedComponent = Component as LayoutPage
        const Layout = LayoutedComponent.layout ?? React.Fragment

        return (
            <I18nextProvider i18n={i18n}>
                <ApolloProvider client={apolloClient}>
                    <Provider store={initStore()}>
                        <Layout>
                            <Head>
                                <title>{Config.siteName}</title>
                            </Head>
                            <div className="font-sans">
                                <Component {...pageProps} />
                            </div>
                        </Layout>
                    </Provider>
                </ApolloProvider>
            </I18nextProvider>
        )
    }
}
