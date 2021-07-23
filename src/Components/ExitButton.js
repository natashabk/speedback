import React from 'react'
import { Button } from 'antd'
import { CloseOutlined } from '@ant-design/icons'

const ExitButton = ({ setVisible }) => {
  return (
    <Button
      shape='circle'
      icon={<CloseOutlined/>}
      onClick={() => setVisible(true)}
      size='small'
    />
  )
}

export default ExitButton
