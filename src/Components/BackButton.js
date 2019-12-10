import React from 'react'
import { Button } from 'antd'
import { useSessionValue } from '../SessionContext'

const BackButton = () => {
  const { moveBack } = useSessionValue()
  return (
    <Button shape='circle' icon='arrow-left' onClick={moveBack} size='small' />
  )
}

export default BackButton
