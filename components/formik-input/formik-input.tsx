import { InputE, InputType } from '../../types'
import { Field } from 'formik'

type Props = {
  label: string
  name: string
  type: InputType
  disabled?: boolean
}

export const FormikInput = ({ label, name, type, disabled }: Props) => {
  return (
    <div className="flex flex-col space-y-1">
      <label className="text-sm" htmlFor={name}>
        {label}
      </label>
      <Field
        className="p-2 border-2 rounded-sm disabled:opacity-50"
        id={name}
        type={type}
        name={name}
      />
    </div>
  )
}
