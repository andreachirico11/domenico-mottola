import { FormEvent } from 'react'

export type InputType = 'email' | 'text' | 'number' | 'password'

export type InputE = FormEvent<HTMLInputElement>

export type ButtonE = FormEvent<HTMLButtonElement>
