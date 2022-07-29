import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  adress: Yup.string()
    .min(2, 'min')
    .max(50, 'Adress is too short!')
    .required('required'),
  date: Yup.date().min(new Date('01-01-1900'), 'min_date').required('required'),
  ticket: Yup.number().min(0, 'min_number_negative').required('required'),
  venue: Yup.string().required('required'),
})
