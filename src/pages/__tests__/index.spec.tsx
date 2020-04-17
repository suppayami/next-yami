import * as React from 'react'

import { render } from '@/test-utils'
import { i18n } from '@/common/i18n/i18n'

import Home from '..'

test('should render index page', async () => {
    const { findByText } = render(<Home />)
    const helloText = await findByText(i18n.t('hello_world', { ns: 'common' }))

    expect(helloText).toBeTruthy()
})
