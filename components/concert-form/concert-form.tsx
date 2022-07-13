import { TFunction, UserConfig } from 'next-i18next'
import { Formik, Field, Form, FieldArray } from 'formik'
import { Concert, Envs } from '../../types'
import { FormikInput } from '../formik-input'

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
  return (
    <>
      <Formik
        initialValues={{ ...initialValues, descriptions }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500))
          alert(JSON.stringify(values, null, 2))
        }}
      >
        {() => (
          <Form className="w-1/2 p-2 mx-auto">
            <Field type="hidden" name="_id" />
            <FormikInput
              type="text"
              name="adress"
              label={t('concert_form.adress')}
            />
            <FormikInput
              type="date"
              name="date"
              label={t('concert_form.date')}
            />
            <FormikInput
              type="number"
              name="ticket"
              label={t('concert_form.ticket')}
            />
            <FormikInput
              type="text"
              name="venue"
              label={t('concert_form.venue')}
            />
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
