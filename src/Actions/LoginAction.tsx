import { setSubject } from '@flowerforce/flower-core'
import { useFlower } from '@flowerforce/flower-react'
import { useFlowerForm } from '@flowerforce/flower-react-form'
import { useEffect } from 'react'
import { BASE_URL } from '../constants'
import { Loader } from '../components/Loader'

export const LoginAction = () => {
  const { getData, setData } = useFlowerForm()
  const { next } = useFlower()
  
  useEffect(() => {
    const api = async () => {
      const res = await fetch(`${BASE_URL!}/login`, {
        method: 'POST',
        body: JSON.stringify({ role: getData('role') }),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const user = await res.json()
      console.log("🚀 ~ api ~ user:", user)

      setSubject(user)
      setData(user.id , 'userId')

      next()
    }
    api()
  }, [])
  return <Loader />
}
