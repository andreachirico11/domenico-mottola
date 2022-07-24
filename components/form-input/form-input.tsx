import { FormikProps } from 'formik'
import { BaseProps } from './base-props'
import { InputType } from './input-types'
import { DateInput } from './inputs/date'
import { NumberInput } from './inputs/number'
import { TextInput } from './inputs/text'

type Props = {
  label: string
  form: FormikProps<any>
  type: InputType
  getErrorMessage: (fieldName: string, err: string) => string
} & BaseProps

export const FormInput = ({
  label,
  disabled,
  field,
  form: { errors, touched },
  getErrorMessage,
  type,
}: Props) => {
  const renderInput = () => {
    switch (type) {
      case 'date':
        return <DateInput field={field} disabled={disabled} />
      case 'number':
        return <NumberInput field={field} disabled={disabled} />
      case 'text':
      default:
        return <TextInput field={field} disabled={disabled} />
    }
  }
  return (
    <div className="flex flex-col space-y-1">
      <label className="text-sm">{label}</label>
      {renderInput()}
      {touched[field.name] && errors[field.name] && (
        <label className="text-red-400 text-sm">
          {getErrorMessage(field.name, errors[field.name] as string)}
        </label>
      )}
    </div>
  )
}
