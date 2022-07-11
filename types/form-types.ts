import { FormEvent } from 'react'

export type InputType = 'email' | 'text' | 'number' | 'password' | 'date'

export type InputE = FormEvent<HTMLInputElement>

export type ButtonE = FormEvent<HTMLButtonElement>
