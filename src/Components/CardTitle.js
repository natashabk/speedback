import React, { useState } from 'react'
import { Row, Col } from 'antd'
import Icon from '@ant-design/icons'
import BackButton from './BackButton'
import ExitButton from './ExitButton'
import ExitModal from './ExitModal'
import { pageInstructions } from '../Constants'
import { useSessionValue } from '../SessionContext'
import { topRowStyle } from '../styles'
import { isLastRound } from '../helper'

const CardTitle = ( { timeRunning } ) => {
  const [ visible, setVisible ] = useState( false )
  const { active, currentRound, numOfRounds } = useSessionValue()

  const roundText = () =>
    isLastRound( currentRound, numOfRounds ) && !timeRunning
      ? 'Session Complete'
      : 'Round in Progress'

  const IconMap = ( { component: Comp } ) => (
    <Icon
      style={{ height: 33 }}
      component={() => <Comp style={{ height: '100%' }} />}
    />
  )

  return (
    <>
      <Row type='flex' justify='space-between' style={{ zIndex: 2 }}>
        {active !== 'Settings' && active !== 'Feedback' && <BackButton />}
        {active !== 'Settings' && active !== 'Feedback' && (
          <ExitButton setVisible={setVisible} />
        )}
      </Row>
      <Row
        style={
          active === 'Settings' || active === 'Feedback'
            ? topRowStyle
            : { ...topRowStyle, marginTop: -23 }
        }
        type='flex'
        justify='center'
      >
        <IconMap component={pageInstructions[ active ].icon} />
        <Col
          span={14}
          style={{ margin: '8px 0px 0px 5px', textAlign: 'left', fontSize: 13 }}
        >
          {active === 'Round' ? roundText() : pageInstructions[ active ].title}
        </Col>
      </Row>
      <ExitModal visible={visible} setVisible={setVisible} />
    </>
  )
}

export default CardTitle
