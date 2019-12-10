import React from 'react'
import { Button } from 'antd'
import { pageInstructions } from '../Constants'
import { useSessionValue } from '../SessionContext'
import { allRadius } from '../styles'

const NextButton = () => {
  const { active, moveForward } = useSessionValue()
  const continueText = pageInstructions[active].continueText

  return (
    <Button
      size='large'
      type='primary'
      onClick={moveForward}
      block
      style={{ borderRadius: allRadius, height: 50 }}
    >
      {continueText}
    </Button>
  )
}

export default NextButton
