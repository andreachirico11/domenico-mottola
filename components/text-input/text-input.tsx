import { InputE, InputType } from '../../types'
import { capitalize } from '../../utils'
import { errorMap } from './error-map'

type Props = {
  value: string
  label: string
  type: InputType
  handleChange: (e: InputE) => void
  error: boolean
  disabled?: boolean
}

export const TextInput = ({
  value,
  label,
  type,
  handleChange,
  error,
  disabled,
}: Props) => {
  return (
    <div className="flex flex-col space-y-1">
      <label className="text-sm">{label}</label>
      <input
        className="p-2 border-2 rounded-sm disabled:opacity-50"
        onChange={(e) => handleChange(e)}
        type={type}
        name={type}
        placeholder={capitalize(type)}
        value={value}
        disabled={disabled || false}
      />
      {error && (
        <label className="text-sm text-red-400">{errorMap[type]}</label>
      )}
    </div>
  )
}
