import React from 'react'
import { useCharacter } from '../../services/useCharacter'
import { Image, Box, Text } from '@chakra-ui/core'
import { Character } from '../../types'
import unknownImage from '../../media/unknown.jpeg'
import { animated } from 'react-spring'

const RoundResult: React.FC<{ fighterId: number; round: number; animatedStyles: any }> = ({ fighterId, round, animatedStyles }) => {
  const { data = {} as Character, status } = useCharacter(fighterId)

  return (
    <Box as={animated.div} style={animatedStyles} border='1px solid grey' borderRadius='10px' overflow='hidden' maxWidth='150px' p={0} m={{ base: 5, xs: 2 }}>
      <Box width='100%'>
        <Box>
          <Text textAlign='center'>Round {round}</Text>
        </Box>
      </Box>
      <Image src={status === 'success' ? data?.image : unknownImage} minWidth='100%' alt={data?.name} fallbackSrc={unknownImage} />
    </Box>
  )
}

export default RoundResult
