export const shuffle = ( list, asked ) => {
  const noRepeats = list.filter( question => !asked.includes( question ) )
  if ( noRepeats.length === 0 ) return []
  return noRepeats[ Math.floor( Math.random() * noRepeats.length ) ]
}

export const isEven = num => num % 2 === 0

export const middleIdx = ( people ) => Math.floor( people.length / 2 )

export const isLastRound = ( currentRound, numOfRounds ) =>
  currentRound === numOfRounds && numOfRounds !== 0

export const oddPlayerOut = people => {
  let player = people.filter( ( teamMember, i ) => !isEven( people.length ) && i === middleIdx( people ) )
  return player[ 0 ] ? player[ 0 ] : false
}

const milSeconds = time => ( time / 2 ) * 600

export const percent = ( count, time ) => {
  return ( count / milSeconds( time ) ) * 100
}

export const secondPercent = ( count, time ) => {
  return ( ( count - milSeconds( time ) ) / ( milSeconds( time ) / 10 ) ) * 10
}

export const roundTime = pairTime => Date.now() + ( 1000 * 60 * pairTime ) / 2
