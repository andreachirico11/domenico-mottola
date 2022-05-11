import { InputE, InputType } from '../../types'
import { capitalize } from '../../utils'
import { errorMap } from './error-map'

type Props = {
  value: string
  label: string
  type: InputType
  handleChange: (e: InputE) => void
  error: boolean
}

export const TextInput = ({
  value,
  label,
  type,
  handleChange,
  error,
}: Props) => {
  return (
    <div className="flex flex-col space-y-1">
      <label className="text-sm">{label}</label>
      <input
        className="rounded-sm border-2 p-2"
        onChange={(e) => handleChange(e)}
        type={type}
        name={type}
        placeholder={capitalize(type)}
        value={value}
      />
      {error && (
        <label className="text-sm text-red-400">{errorMap[type]}</label>
      )}
    </div>
  )
}
