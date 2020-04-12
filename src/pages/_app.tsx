import React from 'react'
import App from 'next/app'
import '@/common/tailwind.css'

// eslint-disable-next-line import/no-default-export
export default class DTApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return <Component {...pageProps} />
    }
}
