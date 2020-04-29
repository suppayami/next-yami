import { ComponentType } from 'react'
import { NextPage } from 'next'

import { Store } from './common/store/store'

type LayoutPageProps = {
    initialState?: Store
    apolloState?: any
}

export type LayoutPage<P = {}, IP = P> = NextPage<P & LayoutPageProps, IP> & {
    layout?: ComponentType
}
