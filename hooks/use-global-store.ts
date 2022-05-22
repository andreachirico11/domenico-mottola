import { makeStore } from '../utils'
import { initialGlobalState, GlobalReducer } from '../reducers/global-reducer'

const [GlobalProvider, useGlobalStore, useGlobalDispatch] = makeStore(
  GlobalReducer,
  initialGlobalState
)

export { GlobalProvider, useGlobalStore, useGlobalDispatch }
