import { TFunction } from 'next-i18next'

export const getErrMsgFunction =
  (base: string, t: TFunction) => (fieldName: string, err: string) =>
    t(base + '.errors.' + err, {
      field: t(base + '.' + fieldName),
    })
