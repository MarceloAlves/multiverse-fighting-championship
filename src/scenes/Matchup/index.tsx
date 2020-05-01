import React from 'react'
import { Box, SimpleGrid, Image, Flex } from '@chakra-ui/core'
import FighterSelection from '../../components/FighterSelection'
import vsImage from '../../media/vs.png'
import { useMachineContext, useMachineSend } from '../../machines/machine-context'

const Matchup: React.FC = () => {
  const machineState = useMachineContext()
  const [fighterA, fighterB] = machineState.fighters
  const send = useMachineSend()

  return (
    <SimpleGrid columns={3}>
      <Box>
        <FighterSelection fighterId={fighterA} send={send} />
      </Box>
      <Flex justifyContent='center' alignItems='center'>
        <Image src={vsImage} alt='versus' />
      </Flex>
      <Box>
        <FighterSelection fighterId={fighterB} send={send} />
      </Box>
    </SimpleGrid>
  )
}

export default Matchup
