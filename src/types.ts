import { ComponentType } from 'react'
import { NextPage } from 'next'

export type LayoutPage = NextPage & {
    layout?: ComponentType
}
