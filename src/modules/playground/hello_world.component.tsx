import React from 'react'
import Link from 'next/link'

export const HelloWorld = () => {
    return (
        <div className="w-full text-center">
            <h1 className="text-4xl">Dan Truyen</h1>
            <h5 className="tracking-widest text-gray-600 uppercase">Dân thường chào dân chơi</h5>
            <div>
                <Link href="/todos" as="/todos">
                    <a href="/todos">Todo List</a>
                </Link>
            </div>
        </div>
    )
}
