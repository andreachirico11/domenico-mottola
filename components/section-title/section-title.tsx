interface Props {
  children: string
}

export const SectionTitle = ({ children }: Props) => (
  <h2 className="flex justify-center pt-8 text-2xl">{children}</h2>
)
