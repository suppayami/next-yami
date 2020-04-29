import * as React from 'react'
import { AppType } from 'next/dist/next-server/lib/utils'

export const withApolloSSR = (NextApp: AppType) => {
    NextApp.getInitialProps = async (context) => {
        let appProps: any

        if (NextApp.getInitialProps) {
            appProps = await NextApp.getInitialProps(context)
        }
    }

    return NextApp
}
