import { TFunction } from 'next-i18next'

export const Title = ({ t }: { t: TFunction }) => {
  return (
    <div className="absolute bottom-0 grid w-full grid-cols-12 h-1/3 lg:h-1/2">
      <h1 className="z-10 col-span-12 text-6xl font-semibold text-center uppercase dark-shadow text-light lg:col-start-8 lg:text-left lg:text-8xl">
        {t('main_title')}
      </h1>
    </div>
  )
}
