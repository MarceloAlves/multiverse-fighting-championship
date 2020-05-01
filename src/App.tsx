import React from 'react'
import { useMachine } from '@xstate/react'
import { mainMachine } from './machines/main'
import Matchup from './scenes/Matchup'
import Idle from './scenes/Idle'
import { Flex } from '@chakra-ui/core'
import Results from './components/Results'
import Winner from './scenes/Winner'
import { MachineProvider } from './machines/machine-context'

function App() {
  const [state, send] = useMachine(mainMachine)

  return (
    <MachineProvider value={state.context} send={send}>
      <Flex justifyContent='center' alignItems='center' direction='column' pt={{ base: 10, sm: 5 }} px={{ base: 10, xs: 5 }}>
        {state.matches('idle') && <Idle />}
        {state.matches('running') && <Matchup />}
        {state.matches('running') && <Results />}
        {state.matches('results') && <Winner />}
      </Flex>
    </MachineProvider>
  )
}

export default App
