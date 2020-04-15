import * as React from 'react'
import Head from 'next/head'
import { useTranslation } from 'react-i18next'

import { HelloWorld } from '@/modules/playground/hello_world.component'
import { PlaygroundLayout } from '@/layouts/layout.component'
import { LayoutPage } from '@/types'

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
