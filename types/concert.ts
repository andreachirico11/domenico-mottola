export interface Concert {
  _id: string
  date: Date | string
  adress: string
  venue: string
  descriptions: { [key: string]: string }[]
  ticket: number
}
