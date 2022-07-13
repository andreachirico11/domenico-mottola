export interface Concert {
  _id: string
  date: Date
  adress: string
  venue: string
  descriptions: { [key: string]: string }[]
  ticket: number | 'free'
}
