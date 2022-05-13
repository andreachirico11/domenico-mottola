import { Trans } from '@lingui/react'
import type { NextComponentType } from 'next'

export const Title: NextComponentType = () => {
  return (
    <h1 className="text-4xl">
      <Trans id="title-main"></Trans>
    </h1>
  )
}
