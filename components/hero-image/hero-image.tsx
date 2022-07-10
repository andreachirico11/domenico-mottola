import Image from 'next/image'
import domenicoPic from '../../public/domenico.webp'

export const HeroImage = () => {
  return (
    <div className="absolute bottom-0 image-small sm:image-large">
      <Image priority src={domenicoPic} layout="responsive" />
    </div>
  )
}
