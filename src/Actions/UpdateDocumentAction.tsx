import { useAbac, useFlower } from '@flowerforce/flower-react'
import { useFlowerForm } from '@flowerforce/flower-react-form'
import React, { useEffect } from 'react'
import { BASE_URL } from '../constants'

export const UpdateDocumentAction = () => {
  const { getData, setData } = useFlowerForm()
  const { next, jump } = useFlower()
  const { can } = useAbac()

  useEffect(() => {
    const document = getData('document')
    const authorization = can({ action: 'update', resource: document })

    if (!authorization) {
      setData('operation denied', 'error')
      next()
      return
    }

    const api = async () => {
      const res = await fetch(`${BASE_URL!}/document/${document.id}`, {
        method: 'PUT',
        body: JSON.stringify(document),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await res.json()
      setData(data, 'document');
      jump('dashboard')
    }
    api()
  }, [])
  return <div>Loading...</div>
}
