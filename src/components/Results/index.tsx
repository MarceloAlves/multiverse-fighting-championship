import React from 'react'
import { Flex } from '@chakra-ui/core'
import RoundResult from '../RoundResult'

const Results: React.FC<{ winners: number[] }> = ({ winners }) => {
  return (
    <Flex direction='row'>
      {winners.map((id, idx) => (
        <RoundResult key={`${id}-${idx}`} fighterId={id} round={idx + 1} />
      ))}
    </Flex>
  )
}

export default Results
