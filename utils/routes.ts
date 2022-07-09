interface route {
  label: string
  to: string
}

export const routes: route[] = [
  { label: 'DOMENICO MOTTOLA', to: '/' },
  { label: 'About', to: '#about' },
  { label: 'Concerts', to: '#concerts' },
  { label: 'Contact', to: '#contact' },
]
