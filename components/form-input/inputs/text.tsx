import { BaseProps } from '../base-props'

export const TextInput = ({ disabled, field }: BaseProps) => (
  <input
    {...field}
    className="p-2 border-2 rounded-sm disabled:opacity-50"
    type="text"
    disabled={disabled || false}
  />
)
