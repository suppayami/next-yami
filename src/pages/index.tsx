import React from 'react'
import Head from 'next/head'

import { HelloWorld } from '@/modules/playground/hello_world.component'

const Home = () => (
    <div className="flex items-center h-screen bg-gray-200">
        <div className="flex items-center max-w-md p-8 mx-auto bg-white shadow-xl">
            <Head>
                <title>Dan Truyen Boilerplate</title>
            </Head>
            <HelloWorld />
        </div>
    </div>
)

// eslint-disable-next-line import/no-default-export
export default Home
