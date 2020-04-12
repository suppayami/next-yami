import React from 'react'
import Head from 'next/head'
import { useTranslation } from 'react-i18next'

import { HelloWorld } from '@/modules/playground/hello_world.component'
import { Layout } from '@/modules/playground/layout.component'

const Home = () => {
    const [commonTranslate] = useTranslation('common')

    return (
        <Layout>
            <Head>
                <title>{commonTranslate('hello_world')}</title>
            </Head>
            <HelloWorld />
        </Layout>
    )
}

// eslint-disable-next-line import/no-default-export
export default Home
