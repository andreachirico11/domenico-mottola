import { ReactNode, Reducer } from 'react'

export interface Action {
  type: string
}

export interface State {
  [key: string]: any
}

export type R = Reducer<State, Action>
export type S = any

export interface StoreProps {
  children: ReactNode
}
