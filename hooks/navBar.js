import { useRouter } from 'next/router'

const useNavBar = () => {
  const router = useRouter()

  const exceptions = ['/', '/sign-up', '/sign-in', '/how-are-you']

  return !exceptions.includes(router.pathname)
}

export default useNavBar
