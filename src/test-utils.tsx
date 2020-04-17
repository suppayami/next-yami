import * as React from 'react'
import { RenderResult, RenderOptions, Queries, render, queries } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'

import { i18n } from './common/i18n/i18n'

// overload types
function customRender<Q extends Queries = typeof queries>(
    ui: React.ReactElement,
    options?: Omit<RenderOptions, 'queries'>,
): RenderResult
function customRender<Q extends Queries>(
    ui: React.ReactElement,
    options: RenderOptions<Q>,
): RenderResult<Q>

// custom render
function customRender<Q extends Queries>(
    ui: React.ReactElement,
    options?: Omit<RenderOptions, 'queries'> | RenderOptions<Q>,
): RenderResult | RenderResult<Q> {
    return render(ui, { wrapper: Wrapper, ...options }) as any
}

// wrapper
const Wrapper: React.FunctionComponent = ({ children }) => {
    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}

export * from '@testing-library/react'
export { customRender as render }
