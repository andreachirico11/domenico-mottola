import { NextComponentType } from 'next'
import Image from 'next/image'
import domenicoPic from '../../public/domenico.webp'

export const HeroImage: NextComponentType = () => {
  return (
    <div className="image-small sm:image-large absolute bottom-0">
      <Image priority src={domenicoPic} layout="responsive" />
    </div>
  )
}
