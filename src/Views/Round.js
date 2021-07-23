import React, { useEffect, useState, useRef } from 'react'
import { Row, Typography } from 'antd'
import Timer from 'simple-circle-timer'
import { useSessionValue } from '../SessionContext'
import { isLastRound, } from '../helper'
import { titleStyle, colors } from '../styles'
import Stars from '../Components/Stars'
import NextButton from '../Components/NextButton'
import CardTitle from '../Components/CardTitle'
import bell from '../Assets/bell.mp3'
import harp from '../Assets/harp.mp3'
const { Title } = Typography

const Round = () => {
  const { pairTime, currentRound, numOfRounds, soundOn, end } = useSessionValue()
  const [ firstActive, setFirstActive ] = useState( true )
  const [ timeRunning, setTimeRunning ] = useState( true )
  const [ sound1, playSound1 ] = useState( null )
  const [ sound2, playSound2 ] = useState( null )
  const [ reset, setReset ] = useState( false )
  
  const lastRound = isLastRound( currentRound, numOfRounds )
  const getMessage = () => {
    if ( timeRunning ) {
      const prefix = firstActive ? 'First' : 'Second'
      const color = firstActive ? 'orange' : 'coral'
      return (
        <Title level={4} style={titleStyle}>
          <span style={{ color: colors[ color ] }}>{prefix}</span> person talking
        </Title>
      )
    } else
      return (
        <Title level={4} style={titleStyle}>
          {lastRound ? 'Game' : 'Round'} over!
        </Title>
      )
  }

  useEffect( () => { if ( end ) setReset(true) }, [ end ] )

  const audioRef = useRef( null )

  return (
    <>
      <CardTitle timeRunning={timeRunning} />
      {soundOn && sound1 && <audio ref={audioRef} src={bell} autoPlay />}
      {soundOn && sound2 && <audio ref={audioRef} src={harp} autoPlay />}

      <Row
        type='flex'
        justify='space-around'
        style={{ margin: 'auto', width: '100%' }}
      >
        <Timer
        fillColor={colors.orange}
        size={120}
        fontSize={25}
        onComplete={() => {
          setFirstActive( false )
          playSound1( true )
        }}
        minutes={pairTime / 2}
        running={timeRunning}
        setRunning={setTimeRunning}
        reset={reset} setReset={setReset}
        />
        <Timer
        fillColor={colors.coral}
        size={120}
        fontSize={25}
        onComplete={() => {
          setTimeRunning( false )
          playSound2( true )
        }}
        minutes={pairTime / 2}
        running={timeRunning && !firstActive}
        setRunning={setTimeRunning}
        reset={reset} setReset={setReset}
        />
      </Row>
      {getMessage()}
      {lastRound && !timeRunning && <Stars />}
      {lastRound && timeRunning ? <NextButton last /> : <div style={{height: 60}}/>}
      {!lastRound && <NextButton />}
    </>
  )
}
export default Round
