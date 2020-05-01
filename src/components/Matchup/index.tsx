import React from 'react'
import { Box, SimpleGrid, Image, Flex } from '@chakra-ui/core'
import FighterSelection from '../FighterSelection'
import vsImage from '../../media/vs.png'

const Matchup: React.FC<any> = ({ fighters, send }) => {
  const [fighterA, fighterB] = fighters

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
