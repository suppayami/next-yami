import React from 'react'
import Head from 'next/head'

import { HelloWorld } from '@/modules/playground/hello_world.component'
import { Layout } from '@/modules/playground/layout.component'

const Home = () => (
    <Layout>
        <Head>
            <title>Dan Truyen Boilerplate</title>
        </Head>
        <HelloWorld />
    </Layout>
)

// eslint-disable-next-line import/no-default-export
export default Home
