import { makeStore } from '../utils'
import { initialUIState, UIReducer } from '../reducers/ui-reducer'

const [UIProvider, useUIStore, useUIDispatch] = makeStore(
  UIReducer,
  initialUIState
)

export { UIProvider, useUIStore, useUIDispatch }
