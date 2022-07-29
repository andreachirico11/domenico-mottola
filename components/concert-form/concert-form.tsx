import { TFunction } from 'next-i18next'
import { Formik, Field, Form, FieldArray } from 'formik'
import { Concert, Envs } from '../../types'
import { FormInput } from '../form-input'
import { validationSchema } from './concert-form-validation-schema'
import { getErrMsgFunction } from '../../utils/getErrMsgFunction'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../utils'

const initialValues: Concert = {
  _id: '',
  adress: '',
  date: '',
  descriptions: [],
  ticket: 0,
  venue: '',
}

interface props {
  t: TFunction
  valueToUpdate?: Concert
}

export const ConcertForm = ({ t, valueToUpdate }: props) => {
  const descriptions = Envs.languages.map((locale) => ({ [locale]: '' }))
  const getErrormessage = getErrMsgFunction('concert_form', t)

  const mockSubmit = async (values: Concert) => {
    if (valueToUpdate) {
      // TODO update
    } else {
      delete values._id
      await setDoc(doc(db.concerts), values)
    }
  }

  return (
    <>
      <Formik
        initialValues={
          valueToUpdate
            ? { ...valueToUpdate }
            : { ...initialValues, descriptions }
        }
        validationSchema={validationSchema}
        onSubmit={mockSubmit}
      >
        {() => (
          <Form className="w-1/2 p-2 mx-auto">
            <Field type="hidden" name="_id" />
            <Field
              name="adress"
              label={t('concert_form.adress')}
              getErrorMessage={getErrormessage}
              component={FormInput}
            />
            <Field
              type="date"
              name="date"
              label={t('concert_form.date')}
              getErrorMessage={getErrormessage}
              component={FormInput}
            />
            <Field
              type="number"
              name="ticket"
              label={t('concert_form.ticket')}
              getErrorMessage={getErrormessage}
              component={FormInput}
            />
            <Field
              name="venue"
              label={t('concert_form.venue')}
              getErrorMessage={getErrormessage}
              component={FormInput}
            />

            <FieldArray
              name="descriptions"
              render={() => (
                <div className="grid grid-flow-col">
                  {Envs.languages.map((locale, index) => (
                    <Field
                      key={index}
                      name={`descriptions.${index}.${locale}`}
                      label={t('concert_form.description.' + locale)}
                      getErrorMessage={getErrormessage}
                      component={FormInput}
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
