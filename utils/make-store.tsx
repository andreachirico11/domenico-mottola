import { createContext, useContext, useReducer } from 'react'
import { R, S, StoreProps } from '../types'

export const makeStore = (reducer: R, initialState: S) => {
  const storeContext = createContext(initialState)
  const dispatchContext = createContext(initialState)

  const StoreProvider = ({ children }: StoreProps) => {
    const [store, dispatch] = useReducer(reducer, initialState)

    return (
      <dispatchContext.Provider value={dispatch}>
        <storeContext.Provider value={store}>{children}</storeContext.Provider>
      </dispatchContext.Provider>
    )
  }
  const useStore = () => useContext(storeContext)
  const useDispatch = () => useContext(dispatchContext)

  return [StoreProvider, useStore, useDispatch]
}
