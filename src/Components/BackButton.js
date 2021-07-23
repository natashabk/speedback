import React from 'react'
import { Button } from 'antd'
import { LeftOutlined } from '@ant-design/icons'
import { useSessionValue } from '../SessionContext'

const BackButton = () => {
  const { moveBack } = useSessionValue()
  return (
    <Button shape='circle' icon={<LeftOutlined/>} onClick={moveBack} size='small' />
  )
}

export default BackButton
