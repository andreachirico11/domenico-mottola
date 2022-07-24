import { BaseProps } from '../base-props'

export const DateInput = ({ disabled, field }: BaseProps) => (
  <input
    {...field}
    className="rounded-sm border-2 p-2 disabled:opacity-50"
    type="date"
    disabled={disabled || false}
  />
)
