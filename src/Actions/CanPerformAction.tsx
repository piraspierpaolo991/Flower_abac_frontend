import { useAbac, useFlower } from '@flowerforce/flower-react'
import { useFlowerForm } from '@flowerforce/flower-react-form'
import React, { useEffect } from 'react'
import { Loader } from '../components/Loader'

export const CanPerformAction = () => {
  const { getData, setData } = useFlowerForm()
  const { next } = useFlower()
  const { can } = useAbac()

  useEffect(() => {
    const resourceId = getData('resourceId')
    const action = getData('requestedAction')

    const resource = getData(`documents.${resourceId}`);
    const authorization = can({ action, resource })
    
    if (!authorization) {
      setData('operation denied', 'error')
    }
    
    next()
  }, [])

  return <Loader />
}
