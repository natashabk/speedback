export const shuffle = (list, asked) => {
  const noRepeats = list.filter(question => !asked.includes(question))
  if (noRepeats.length === 0) return []
  return noRepeats[Math.floor(Math.random() * noRepeats.length)]
}

const isEven = num => num % 2 === 0

export const oddPlayerOut = people => {
  const middleIdx = Math.floor(people.length / 2)
  return people.map((teamMember, i) => {
    if (!isEven(people.length) && i === middleIdx) return teamMember
    else return false
  })
}
