import * as React from 'react'

import { StoreContext } from './store'

export const useStore = () => React.useContext(StoreContext)
