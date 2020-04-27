import * as React from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

import { Login } from './login.component'

export const HelloWorld = function HelloWorld() {
    const [commonTranslate] = useTranslation('common')

    return (
        <div className="w-full text-center">
            <h1 className="text-4xl">{commonTranslate('hello_world')}</h1>
            <h5 className="tracking-widest text-gray-600 uppercase">Dân thường chào dân chơi</h5>
            <div className="grid grid-cols-2">
                <Link href="/todos" as="/todos">
                    <a href="/todos">Todo List</a>
                </Link>
                <Login />
            </div>
        </div>
    )
}
