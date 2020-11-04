import React, { useState } from 'react'
import { Card, Typography, Row, Button, Popover } from 'antd'
import { goesFirst, oddQuestionOut } from '../Constants'
import NextButton from '../Components/NextButton'
import { useSessionValue } from '../SessionContext'
import CardTitle from '../Components/CardTitle'
import { oddOneBodyStyle, questionBodyStyle } from '../styles'
import { shuffle, oddPlayerOut } from '../helper'

const { Title, Text } = Typography

const Question = () => {
  const { updateStore, people, asked } = useSessionValue()
  const [ currentQ, setCurrentQ ] = useState( shuffle( goesFirst, asked ) )
  const [ currentOddQ, setCurrentOddQ ] = useState( shuffle( oddQuestionOut, asked ) )

  const oddOneOut = oddPlayerOut( people )

  const buttonProps = {
    size: 'small',
    shape: 'circle',
    icon: 'retweet'
  }

  const tieMessage = (
    <>
      ✂️ Rock, paper, scissors <br />
      💰 Flip a coin <br />
      ☠️ Fight to the death
    </>
  )

  const getAnotherQuestion = ( list, toUpdate ) => {
    const anotherQ = shuffle( list, asked )
    if ( anotherQ === [] ) updateStore( 'asked', [] )
    else {
      toUpdate( anotherQ )
      updateStore( 'asked', anotherQ )
    }
  }

  return (
    <>
      <CardTitle />
      <Row style={{ margin: 'auto', width: '100%' }}>
        <Card style={{ height: 220 }} bodyStyle={questionBodyStyle}>
          <Row
            type='flex'
            justify='space-between'
            style={{ textAlign: 'right', marginRight: -10 }}
          >
            <Text type='secondary' style={{ fontSize: 17 }}>
              Who speaks first?
            </Text>
            <Button
              {...buttonProps}
              onClick={() => getAnotherQuestion( goesFirst, setCurrentQ )}
            />
          </Row>
          <Title level={3} style={{ fontWeight: 400, margin: 'auto' }}>
            The person {currentQ}
          </Title>
          <Popover
            content={tieMessage}
            title='Try one of the following:'
            placement='bottomLeft'
            trigger='click'
          >
            <Button type='link' style={{ padding: 0, textAlign: 'left' }}>
              What if it's a tie?
            </Button>
          </Popover>
        </Card>

        {oddOneOut && (
          <Card
            style={{ margin: '20px 0px', height: 190, maxHeight: 190 }}
            bodyStyle={oddOneBodyStyle}
          >
            <Row
              type='flex'
              justify='space-between'
              style={{ textAlign: 'right', marginRight: -10, marginTop: -5 }}
            >
              <Text type='secondary' style={{ fontSize: 17 }}>
                <span style={{ textTransform: 'capitalize' }}>{oddOneOut}</span>
                , you should:
              </Text>
              <Button
                {...buttonProps}
                onClick={() =>
                  getAnotherQuestion( oddQuestionOut, setCurrentOddQ )
                }
              />
            </Row>
            <Title level={3} style={{ fontWeight: 400, margin: 'auto' }}>
              {currentOddQ}
            </Title>
          </Card>
        )}
      </Row>
      <NextButton />
    </>
  )
}

export default Question
