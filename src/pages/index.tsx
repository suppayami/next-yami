import * as React from 'react'
import Head from 'next/head'
import { useTranslation } from 'react-i18next'

import { HelloWorld } from '@/modules/playground/hello_world.component'
import { PlaygroundLayout } from '@/layouts/layout.component'
import { LayoutPage } from '@/types'
import { makeStore } from '@/common/store/store'

const Home: LayoutPage = () => {
    const [commonTranslate] = useTranslation('common')

    return (
        <React.Fragment>
            <Head>
                <title>{commonTranslate('hello_world')}</title>
            </Head>
            <HelloWorld />
        </React.Fragment>
    )
}

// eslint-disable-next-line import/no-default-export
export default Home

Home.layout = PlaygroundLayout

Home.getInitialProps = async () => {
    if (typeof window !== 'undefined') {
        return {}
    }

    const store = makeStore()
    await store.sessionStore.authenticate({ username: 'Yami' })

    return { initialState: store }
}
