import React, { useState, useRef } from 'react'
import { Row, Button, Switch, Typography, Card } from 'antd'
import '../Assets/App.css'
import NextButton from '../Components/NextButton'
import CardTitle from '../Components/CardTitle'
import { useSessionValue } from '../SessionContext'
import { pairContentStyle, captionStyle, colors } from '../styles'
import chime from '../Assets/chime.mp3'

const { Text, Title } = Typography

const Sound = () => {
  const { soundOn, updateStore } = useSessionValue()
  const [sound, testSound] = useState(null)
  const audioRef = useRef(null)

  return (
    <>
      <CardTitle />
      {sound && <audio ref={audioRef} src={chime} autoPlay />}
      <Row type='flex' justify='space-around' style={pairContentStyle}>
        <Card
          bordered={false}
          style={{ margin: 'auto' }}
          bodyStyle={{ padding: 5 }}
        >
          <Title level={3} style={{ marginBottom: '1.5em' }}>
            For best results, turn your sound on!
          </Title>
          <Switch
            defaultChecked
            checked={soundOn}
            onChange={checked => updateStore('sound', checked)}
          />

          <Button
            disabled={!soundOn}
            size='small'
            style={{ marginLeft: 20 }}
            onClick={async () => {
              if (!soundOn) updateStore('sound', true)
              else {
                if (sound) await testSound(false)
                testSound(true)
              }
            }}
          >
            Test
          </Button>

          <br />
          <Text
            style={{
              ...captionStyle,
              color: soundOn ? colors.aqua : colors.grey
            }}
          >
            All sounds are {soundOn ? 'on' : 'off'}.
          </Text>
        </Card>
      </Row>
      <NextButton />
    </>
  )
}

export default Sound
