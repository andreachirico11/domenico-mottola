import { createReducer } from '../utils/create-reducer'

interface GlobalState {
  isLoading: boolean
  error: Error | null
}

export const initialGlobalState: GlobalState = {
  isLoading: false,
  error: null,
}

const startLoader = (state: GlobalState) => {
  return { ...state, isLoading: true }
}

const stopLoader = (state: GlobalState) => {
  return { ...state, isLoading: false }
}

export const GlobalReducer = createReducer({
  startLoader: (state: GlobalState) => startLoader(state),
  stopLoader: (state: GlobalState) => stopLoader(state),
})
