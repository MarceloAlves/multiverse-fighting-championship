import React from 'react'
import { Flex, Grid } from '@chakra-ui/core'
import RoundResult from '../RoundResult'
import { useTransition } from 'react-spring'

const Results: React.FC<{ winners: { id: number; round: number }[] }> = ({ winners }) => {
  const transitions = useTransition(winners, (item) => item.id * item.round, {
    from: { transform: 'translate(1000%)' },
    enter: { transform: 'translate(0)' },
    leave: { transform: 'translate(0,-40px,0)' },
  })

  return (
    <Grid templateColumns='repeat(5, 1fr)'>
      {transitions.map(({ item, props, key }, idx) => (
        <RoundResult key={key} fighterId={item.id} round={idx + 1} animatedStyles={props} />
      ))}
    </Grid>
  )
}

export default Results
