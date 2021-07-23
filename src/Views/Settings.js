import React from 'react'
import { Typography, Select, Form, Row, Radio, Card } from 'antd'
import { useSessionValue } from '../SessionContext'
import CardTitle from '../Components/CardTitle'
import NextButton from '../Components/NextButton'
import {
  selectStyle,
  pairContentStyle,
  radioStyle,
  captionStyle
} from '../styles'

const { Item } = Form
const { Text } = Typography
const Settings = () => {
  const {
    people,
    updateStore,
    pairTime,
    numOfRounds,
    error
  } = useSessionValue()
  const sessionLength = Math.floor(numOfRounds * pairTime + numOfRounds * 0.5)
  if (people.length > 1) updateStore('error', false)
  return (
    <>
      <CardTitle />
      <Row type='flex' justify='space-around' style={pairContentStyle}>
        <Item
          validateStatus={error ? 'error' : 'success'}
          help={error ? 'Please enter two or more people to play.' : null}
          style={{ width: '100%' }}
        >
          <Select
            mode='tags'
            size='large'
            placeholder={
              <Text
                type='secondary'
                style={{ textTransform: 'initial', fontSize: '0.9em' }}
              >
                Press enter after each name
              </Text>
            }
            onChange={present => {
              updateStore('people', present)
              if (error) updateStore('error', false)
            }}
            value={people}
            style={selectStyle}
            open={false}
          />
        </Item>
        <Card
          bordered={false}
          style={{ width: '100%', textAlign: 'center', minHeight: 90 }}
          bodyStyle={{ padding: 0 }}
        >
          <Radio.Group
            buttonStyle='solid'
            onChange={e => updateStore('pairTime', e.target.value)}
            defaultValue={pairTime}
            style={{ width: '100%' }}
          >
            {[3, 4, 5].map(num => (
              <Radio.Button key={num} value={num} style={radioStyle}>
                <span style={{display: 'flex', marginTop: 10,
    justifyContent: 'center'}}>
                {`${num}`}
                </span>
              </Radio.Button>
            ))}
          </Radio.Group>
          {people.length !== 0 && (
            <Text style={captionStyle}>
              This session will take around {sessionLength} minutes.
            </Text>
          )}
        </Card>
      </Row>
      <NextButton />
    </>
  )
}

export default Settings
