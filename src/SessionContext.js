import React, { createContext, useContext, useState, useEffect } from 'react'
import { roundTime, isLastRound } from './helper'
import { pageInstructions } from './Constants'

export const SessionContext = createContext()
export const useSessionValue = () => useContext(SessionContext)

export const SessionProvider = ({ children }) => {
  const [currentRound, setCurrentRound] = useState(1)
  const [people, setPeople] = useState([])
  const [pairTime, setPairTime] = useState(4)
  const [active, setActive] = useState('Settings')
  const [numOfRounds, setNumOfRounds] = useState(0)
  const [asked, setAsked] = useState([])
  const [soundOn, setSoundOn] = useState(true)
  const [error, setError] = useState(false)
  const [timeRunning, setTimeRunning] = useState(false)
  const [deadline, setDeadline] = useState(false)

  useEffect(() => {
    if (people.length && people.length % 2 === 0)
      setNumOfRounds(people.length - 1)
    else if (people.length) setNumOfRounds(people.length)
    else setNumOfRounds(0)
  }, [people])

  const finishRound = () => {
    setDeadline(false)
    let newOrder = people
    setCurrentRound(currentRound + 1)
    if (people.length % 2 === 0) {
      const hop = newOrder.splice(1, 1)
      newOrder.push(hop)
    } else {
      const hop = newOrder.pop()
      newOrder.unshift(hop)
    }
    setPeople(newOrder)
  }

  const exitSession = () => {
    setActive('Settings')
    setCurrentRound(1)
    setAsked([])
  }

  const moveForward = () => {
    const nextPage = pageInstructions[active].nextScreen
    const lastRound = isLastRound(currentRound, numOfRounds)

    if (active === 'Settings' && people.length < 2) setError(true)
    else if (active === 'Round') {
      lastRound ? setDeadline(Date.now()) : finishRound()
      setActive(nextPage)
    } else setActive(nextPage)
  }

  const moveBack = () => {
    if (active === 'Pairs' && currentRound > 1) {
      setCurrentRound(currentRound - 1)
      setActive('Round')
    } else setActive(pageInstructions[active].prevScreen)
  }

  const updateStore = (field, newValue) => {
    switch (field) {
      case 'people':
        setPeople(newValue)
        return people
      case 'pairTime':
        setPairTime(newValue)
        return pairTime
      case 'active':
        setActive(newValue)
        return active
      case 'sound':
        setSoundOn(newValue)
        return soundOn
      case 'error':
        setError(newValue)
        return error
      case 'asked':
        setAsked(newValue)
        return asked
      case 'time':
        setTimeRunning(newValue)
        return timeRunning
      case 'deadline':
        setDeadline(newValue)
        return deadline
      default:
        return null
    }
  }

  return (
    <SessionContext.Provider
      value={{
        updateStore, // all *
        asked, //helper
        exitSession, // * *
        moveForward, // * *
        moveBack, // * *

        currentRound, // pageHeader,

        people, // settings, pairs, stars
        error, // settings
        pairTime, // settings, round, stars
        numOfRounds, // settings, pageHeader
        soundOn, // sound, round
        timeRunning,
        deadline,

        active // cardTitle, nextButton, pageHeader, app
      }}
    >
      {children}
    </SessionContext.Provider>
  )
}

// Moving
// if the number of participants is even, person initially in [0] always stays in place
// person in [1] moves to the end each round,
// so all other people move one spot to the left.

// if it is odd, middle person always sits out
// each round, each person moves one spot to the right,
// and the last person goes to spot [0]
