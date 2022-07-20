import { TFunction, UserConfig } from 'next-i18next'
import { Formik, Field, Form, FieldArray } from 'formik'
import { Concert, Envs } from '../../types'
import { FormikInput } from '../formik-input'
import * as Yup from 'yup'

const initialValues: Concert = {
  _id: '',
  adress: '',
  date: new Date(),
  descriptions: [],
  ticket: 'free',
  venue: '',
}

export const ConcertForm = ({ t }: { t: TFunction }) => {
  const locales = Envs.languages
  const descriptions = locales.map((locale) => ({ [locale]: '' }))
  const schema = Yup.object().shape({
    adress: Yup.string()
      .min(2, 'min')
      .max(50, 'Adress is too short!')
      .required('required'),
    date: Yup.date()
      .min(new Date('01-01-1900'), 'min_date')
      .required('required'),
    ticket: Yup.number().min(0, 'min_number_negative').required('required'),
    venue: Yup.string().required('required'),
  })
  return (
    <>
      <Formik
        initialValues={{ ...initialValues, descriptions }}
        validationSchema={schema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500))
          alert(JSON.stringify(values, null, 2))
        }}
      >
        {({ errors, touched }) => (
          <Form className="w-1/2 p-2 mx-auto">
            <Field type="hidden" name="_id" />
            <FormikInput
              type="text"
              name="adress"
              label={t('concert_form.adress')}
            />
            {touched.adress && errors.adress && (
              <div>
                {t('concert_form.errors.' + errors.adress, {
                  field: t('concert_form.adress'),
                })}
              </div>
            )}
            <FormikInput
              type="date"
              name="date"
              label={t('concert_form.date')}
            />
            {touched.date && errors.date && (
              <div>
                {t('concert_form.errors.' + errors.date, {
                  field: t('concert_form.date'),
                })}
              </div>
            )}
            <FormikInput
              type="number"
              name="ticket"
              label={t('concert_form.ticket')}
            />
            {touched.ticket && errors.ticket && (
              <div>
                {t('concert_form.errors.' + errors.ticket, {
                  field: t('concert_form.ticket'),
                })}
              </div>
            )}
            <FormikInput
              type="text"
              name="venue"
              label={t('concert_form.venue')}
            />
            {touched.venue && errors.venue && (
              <div>
                {t('concert_form.errors.' + errors.venue, {
                  field: t('concert_form.venue'),
                })}
              </div>
            )}
            <FieldArray
              name="descriptions"
              render={() => (
                <div className="grid grid-flow-col">
                  {locales.map((locale, index) => (
                    <FormikInput
                      key={index}
                      type="text"
                      name={`descriptions.${index}.${locale}`}
                      label={t('concert_form.description.' + locale)}
                    />
                  ))}
                </div>
              )}
            ></FieldArray>
            <button type="submit">{t('concert_form.submit')}</button>
          </Form>
        )}
      </Formik>
    </>
  )
}
