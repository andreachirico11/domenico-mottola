import { TFunction } from 'next-i18next'
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik'
import { Concert } from '../../types'
import { FormikInput } from '../formik-input'

const initialValues: Concert = {
  _id: '',
  adress: '',
  date: new Date(),
  description: [],
  ticket: 'free',
  venue: '',
}

export const ConcertForm = ({ t }: { t: TFunction }) => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500))
          alert(JSON.stringify(values, null, 2))
        }}
      >
        {({ values }) => (
          <Form>
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
            <FormikInput
              type="text"
              name="adress"
              label={t('concert_form.adress')}
            />

            {/* 
            <label className="text-sm" htmlFor="adress">
              {t('concert_form.adress')}
            </label>
            <Field
              className="p-2 border-2 rounded-sm disabled:opacity-50"
              id="adress"
              type="text"
              name="adress"
            />
            <label className="text-sm" htmlFor="date">
              {t('concert_form.date')}
            </label>
            <Field
              className="p-2 border-2 rounded-sm disabled:opacity-50"
              id="date"
              type="date"
              name="date"
            />
            <label className="text-sm" htmlFor="ticket">
              {t('concert_form.ticket')}
            </label>
            <Field
              className="p-2 border-2 rounded-sm disabled:opacity-50"
              id="ticket"
              type="number"
              name="ticket"
            />
            <label className="text-sm" htmlFor="venue">
              {t('concert_form.venue')}
            </label>
            <Field
              className="p-2 border-2 rounded-sm disabled:opacity-50"
              id="venue"
              type="text"
              name="venue"
            /> */}
            <FieldArray name="description">
              {({ insert, remove, push }) => (
                <div>
                  {['en', 'it'].map((locale, index) => (
                    // <div className="row" key={index}>
                    //   <div>
                    //     <label
                    //       className="text-sm"
                    //       htmlFor={`friends.${index}.name`}
                    //     >
                    //       {t('concert_form.description.' + locale)}
                    //     </label>
                    //     <Field
                    //       className="p-2 border-2 rounded-sm disabled:opacity-50"
                    //       name={locale}
                    //       type="text"
                    //       required
                    //     />
                    //     {/* <ErrorMessage
                    //         name={`friends.${index}.name`}
                    //         component="div"
                    //         className="field-error"
                    //       /> */}
                    //   </div>
                    // </div>
                    <FormikInput
                      type="text"
                      name={locale}
                      label={t('concert_form.description.' + locale)}
                    />
                  ))}
                </div>
              )}
            </FieldArray>
            <button type="submit">{t('concert_form.submit')}</button>
          </Form>
        )}
      </Formik>
    </>
  )
}
