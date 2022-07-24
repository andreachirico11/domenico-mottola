import { BaseProps } from '../base-props'

export const NumberInput = ({ disabled, field }: BaseProps) => (
  <input
    {...field}
    className="rounded-sm border-2 p-2 disabled:opacity-50"
    type="number"
    disabled={disabled || false}
  />
)
