import { Action, State } from '../types'

export const createReducer =
  (reducerSpec: State) => (state: State, action: Action) => {
    const { type } = action
    const reduceFunc = reducerSpec[type]

    if (!reduceFunc) {
      throw new Error(`Unknown action: ${action.type}`)
    }

    return reduceFunc(state, action)
  }
