import * as React from 'react'
import { useQuery } from '@apollo/client'
import Head from 'next/head'
import Link from 'next/link'

import { TodosQuery } from '@/modules/playground/api/todos.graphql'
import { Todos } from '@/modules/playground/api/gql-types/Todos'
import { PlaygroundLayout } from '@/layouts/layout.component'
import { LayoutPage } from '@/types'
import { getInitialState } from '@/ssr/state.ssr'
import { apolloAuthorization } from '@/ssr/apollo_authorization.ssr'

const TodosPage: LayoutPage = ({ apolloState }) => {
    const { data, loading, error } = useQuery<Todos>(TodosQuery, {
        fetchPolicy: 'cache-and-network',
    })

    if (error) {
        return (
            <React.Fragment>
                <Head>
                    <title>Error</title>
                </Head>
                <div className="w-full text-center">
                    <h1 className="text-4xl">Error</h1>
                    <h5 className="tracking-widest text-gray-600 uppercase">Có lỗi nha cưng</h5>
                </div>
            </React.Fragment>
        )
    }

    if (loading && !apolloState) {
        return (
            <React.Fragment>
                <Head>
                    <title>Loading</title>
                </Head>
                <div className="w-full text-center">
                    <h1 className="text-4xl">Loading</h1>
                    <h5 className="tracking-widest text-gray-600 uppercase">Chờ tí nha cưng</h5>
                </div>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <Head>
                <title>Todo List</title>
            </Head>
            <div className="w-full h-64 overflow-auto">
                <Link href="/" as="/">
                    <a href="/">Index</a>
                </Link>
                <h1 className="text-4xl text-center">Todos</h1>
                <ul className="list-disc list-inside">
                    {data?.todos?.map((todo) => (
                        <li className="text-gray-600" key={todo?.id}>
                            {todo?.task}
                        </li>
                    ))}
                </ul>
            </div>
        </React.Fragment>
    )
}

// eslint-disable-next-line import/no-default-export
export default TodosPage

TodosPage.layout = PlaygroundLayout

TodosPage.getInitialProps = async (context) => {
    return getInitialState(context)(async ({ apollo, store }) => {
        await apolloAuthorization(apollo)
        await apollo.query({
            query: TodosQuery,
        })
        await store.sessionStore.authenticate({ username: 'Yami' })
    })({})
}
