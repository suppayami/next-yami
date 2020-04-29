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

// eslint-disable-next-line import/no-default-export
export default function App({ Component, pageProps }: AppProps) {
    const { initialState, apolloState } = pageProps

    const apolloClient = React.useMemo(
        () => initApolloClient({ apiEndpoint: '/api/graphql', initialState: apolloState }),
        [apolloState],
    )
    const store = React.useMemo(() => makeStore(initialState), [initialState])
    const LayoutedComponent = Component as LayoutPage
    const Layout = LayoutedComponent.layout ?? React.Fragment

    return (
        <I18nextProvider i18n={i18n}>
            <ApolloProvider client={apolloClient}>
                <StoreContext.Provider value={store}>
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
