import { user } from '@/data/user'
import { redirect } from 'next/navigation'

const page = () => {
    redirect('/'+ user.slug)
  return null
}

export default page