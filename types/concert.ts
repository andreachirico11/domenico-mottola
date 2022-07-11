export interface Concert {
  _id: string
  date: Date
  adress: string
  venue: string
  description: { [key: string]: string }[]
  ticket: number | 'free'
}
