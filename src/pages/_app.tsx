import '@/common/tailwind.css'

import * as React from 'react'
import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { I18nextProvider } from 'react-i18next'
import Head from 'next/head'

import { initApolloClient } from '@/common/service/apollo'
import { i18n } from '@/common/i18n/i18n'
import { LayoutPage } from '@/types'
import { Config } from '@/common/config'
import { makeStore, StoreContext } from '@/common/store/store'
import { isServer } from '@/ssr/is_platform.ssr'

// eslint-disable-next-line import/no-default-export
export default function App({ Component, pageProps }: AppProps) {
    const { initialState, apolloState } = pageProps

    const apolloClientRef = React.useRef(
        initApolloClient({
            apiEndpoint: '/api/graphql',
            initialState: apolloState,
            ssr: isServer(),
        }),
    )
    const storeRef = React.useRef(makeStore(initialState))
    const LayoutedComponent = Component as LayoutPage
    const Layout = LayoutedComponent.layout ?? React.Fragment

    return (
        <I18nextProvider i18n={i18n}>
            <ApolloProvider client={apolloClientRef.current}>
                <StoreContext.Provider value={storeRef.current}>
                    <Layout>
                        <Head>
                            <title>{Config.siteName}</title>
                        </Head>
                        <div className="font-sans">
                            <Component {...pageProps} />
                        </div>
                    </Layout>
                </StoreContext.Provider>
            </ApolloProvider>
        </I18nextProvider>
    )
}
