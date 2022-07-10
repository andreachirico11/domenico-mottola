interface route {
  label: string
  to: string
}

export const routes: route[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '#about' },
  { label: 'Concerts', to: '#concerts' },
  { label: 'Contact', to: '#contact' },
]
