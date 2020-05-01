import React from 'react'
import { useMachine } from '@xstate/react'
import { mainMachine } from './machines/main'
import Matchup from './scenes/Matchup'
import Idle from './scenes/Idle'
import { Flex } from '@chakra-ui/core'
import Results from './components/Results'
import Winner from './scenes/Winner'

function App() {
  const [state, send] = useMachine(mainMachine)

  const winners = state.context.winners.concat(Array(10 - state.context.winners.length).fill(null))

  return (
    <Flex justifyContent='center' alignItems='center' direction='column' pt={{ base: 10, sm: 5 }} px={{ base: 10, xs: 5 }}>
      {state.matches('idle') && <Idle onClick={() => send('START')} />}
      {state.matches('running') && <Matchup fighters={state.context.fighters ?? []} send={send} />}
      {state.matches('running') && <Results winners={winners} />}
      {state.matches('results') && <Winner id={winners[winners.length - 1]} restartGame={() => send('RESTART')} />}
    </Flex>
  )
}

export default App
