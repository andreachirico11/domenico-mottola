import { createReducer } from '../utils/create-reducer'

interface UIState {
  isLoading: boolean
}

export const initialUIState: UIState = {
  isLoading: false,
}

const startLoader = (state: UIState) => {
  return { ...state, isLoading: true }
}

const stopLoader = (state: UIState) => {
  return { ...state, isLoading: false }
}

export const UIReducer = createReducer({
  startLoader: (state: UIState) => startLoader(state),
  stopLoader: (state: UIState) => stopLoader(state),
})
