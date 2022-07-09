import { createReducer } from '../utils/create-reducer'

interface UIState {
  isNavOpen: boolean
}

export const initialUIState: UIState = {
  isNavOpen: false,
}

const toggleNav = (state: UIState) => {
  const { isNavOpen: prevState } = state
  return { ...state, isNavOpen: !prevState }
}

const closeNav = (state: UIState) => {
  return { ...state, isNavOpen: false }
}

export const UIReducer = createReducer({
  toggleNav: (state: UIState) => toggleNav(state),
  closeNav: (state: UIState) => closeNav(state),
})
