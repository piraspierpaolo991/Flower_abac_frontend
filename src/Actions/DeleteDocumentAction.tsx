import { useAbac, useFlower } from '@flowerforce/flower-react'
import { useFlowerForm } from '@flowerforce/flower-react-form'
import React, { useEffect } from 'react'
import { BASE_URL } from '../constants'

export const DeleteDocumentAction = () => {
  const { getData } = useFlowerForm()
  const { next } = useFlower()

  useEffect(() => {
    const resourceId = getData('resourceId')
    
    const api = async () => {
      await fetch(`${BASE_URL!}/document/${resourceId}`, {
        method: 'DELETE'
      })
      next()
    }
    api()
  }, [])

  return <div>Loading...</div>
}
