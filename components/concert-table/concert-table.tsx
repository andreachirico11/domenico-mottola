import { onSnapshot, Unsubscribe } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Concert } from '../../types'
import { db } from '../../utils'

export const ConcertTable = () => {
  const [concerts, setConcerts] = useState<Concert[]>([])
  let unsubscribe: Unsubscribe

  useEffect(() => {
    unsubscribe = onSnapshot(db.concerts, (snap) => {
      const temp: Concert[] = []
      snap.docs.forEach((d) => {
        temp.push({ ...d.data(), _id: d.id } as Concert)
      })
      setConcerts(temp)
    })
    return () => unsubscribe()
  }, [])

  return (
    <>
      <h1 className="m-10">Concerts</h1>
      {concerts.map((c, i) => (
        <div key={i}>
          {c._id}, {c.adress}, {c.date}, {c.ticket}
        </div>
      ))}
    </>
  )
}
