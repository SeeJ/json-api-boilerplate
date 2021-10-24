export type User = {
  id: number
  login: string
  first_name: string
  email: string
  phone: string
  role: 'admin' | 'manager' | 'user'
  height: number
  birth_date: string
  avatar: string
  last_auth: string
  create_date: string
  last_date: string
}
