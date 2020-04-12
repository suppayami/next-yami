import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'

import { reducer } from './reducer'

interface Options {
    initialState?: any
}

export const initStore = (options?: Options) =>
    createStore(reducer, options?.initialState, devToolsEnhancer({}))
