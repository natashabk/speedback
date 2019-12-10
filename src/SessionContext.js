import React, { createContext, useContext, useState, useEffect } from 'react'
import { pageInstructions } from './Constants'
import { shuffle } from './helper'

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

  const isLastRound = currentRound === numOfRounds && numOfRounds !== 0

  useEffect(() => {
    if (people.length && people.length % 2 === 0)
      setNumOfRounds(people.length - 1)
    else if (people.length) setNumOfRounds(people.length)
    else setNumOfRounds(0)
  }, [people])

  const nextRound = () => {
    if (active === 'Round') {
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
      // setAsked([...asked, currentQuestion, currentOddQ]);
    }
  }

  const exitSession = () => {
    setActive('Settings')
    setCurrentRound(1)
    setAsked([])
  }

  const moveForward = () => {
    if (active === 'Settings' && people.length <= 1) setError(true)
    else {
      nextRound()
      setActive(pageInstructions[active].nextScreen)
    }
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
      default:
        return null
    }
  }

  return (
    <SessionContext.Provider
      value={{
        updateStore, // all *

        currentRound, // pageHeader,
        exitSession, // exitModal *
        moveForward, // nextButton *
        moveBack, // backButton *

        shuffle, // questions *
        isLastRound, // round, cardTitle *

        people, // settings, pairs, stars
        error, // settings
        pairTime, // settings, round, stars
        numOfRounds, // settings, pageHeader
        soundOn, // sound, round

        active, // cardTitle, nextButton, pageHeader, app
        asked //helper
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
