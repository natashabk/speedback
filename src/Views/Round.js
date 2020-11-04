import React, { useState, useEffect, useRef } from 'react'
import { Statistic, Progress, Row, Typography, Icon } from 'antd'
import { secondCounterPlaceholder } from '../Constants'
import Stars from '../Components/Stars'
import NextButton from '../Components/NextButton'
import { useSessionValue } from '../SessionContext'
import CardTitle from '../Components/CardTitle'
import { titleStyle, colors } from '../styles'
import bell from '../Assets/bell.mp3'
import harp from '../Assets/harp.mp3'
import { percent, secondPercent, isLastRound, roundTime } from '../helper'

const { Countdown } = Statistic
const { Title } = Typography

const Round = () => {
  const {
    pairTime,
    currentRound,
    numOfRounds,
    soundOn,
    timeRunning,
    deadline,
    updateStore,
    active
  } = useSessionValue()

  const lastRound = isLastRound( currentRound, numOfRounds )
  const [ count, setCount ] = useState( 0 )
  const [ firstActive, setFirstActive ] = useState( true )

  const [ sound1, playSound1 ] = useState( null )
  const [ sound2, playSound2 ] = useState( null )

  const useInterval = callback => {
    const savedCallback = useRef()
    useEffect( () => {
      savedCallback.current = callback
    }, [ callback ] )
    useEffect( () => {
      const tick = () => savedCallback.current()
      let id = setInterval( tick, 100 )
      return () => clearInterval( id )
      // eslint-disable-next-line
    }, [ deadline ] )
  }

  useInterval( () => setCount( count + 1 ) )

  useEffect( () => {
    if ( !deadline && active === 'Round' )
      updateStore( 'deadline', roundTime( pairTime ) )
    // eslint-disable-next-line
  }, [ active ] )

  const getSecondPercent = () => {
    if ( firstActive ) return 0
    else if ( !firstActive && !timeRunning ) return 100
    else return secondPercent( count, pairTime )
  }

  const checkMark = color => (
    <Icon type='check' style={{ fontSize: 50, color }} />
  )

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
        <Progress
          type='circle'
          strokeColor={colors.orange}
          percent={firstActive ? percent( count, pairTime ) : 100}
          format={percent =>
            firstActive ? (
              <Countdown
                value={firstActive ? deadline : Date.now()}
                format='mm:ss'
                onFinish={() => {
                  setFirstActive( false )
                  updateStore( 'deadline', roundTime( pairTime ) )
                  playSound1( true )
                }}
              />
            ) : (
                checkMark( colors.orange )
              )
          }
        />
        <Progress
          type='circle'
          strokeColor={colors.coral}
          percent={getSecondPercent()}
          format={percent => {
            if ( firstActive ) return secondCounterPlaceholder[ pairTime ]
            else if ( !timeRunning ) return checkMark( colors.coral )
            else
              return (
                <Countdown
                  value={firstActive || !timeRunning ? Date.now() : deadline}
                  format='mm:ss'
                  onFinish={() => {
                    updateStore( 'time', false )
                    playSound2( true )
                  }}
                />
              )
          }}
        />
      </Row>
      {getMessage()}
      {lastRound && !timeRunning && <Stars />}
      {lastRound && timeRunning && <NextButton last />}
      {!lastRound && <NextButton />}
    </>
  )
}
export default Round
