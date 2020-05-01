import React from 'react'
import { Box, Image, Button, Text } from '@chakra-ui/core'
import { useCharacter } from '../../services/useCharacter'
import { Character } from '../../types'
import unknownImage from '../../media/unknown.jpeg'

const FighterSelection: React.FC<any> = ({ fighterId, send }) => {
  const { data = {} as Character, status } = useCharacter(fighterId)

  return (
    <Box display='flex' flexDirection='column' alignItems='center' border='1px solid grey' borderRadius='10px' overflow='hidden' maxWidth='sm' p={0}>
      <Image src={status === 'success' ? data?.image : unknownImage} minWidth='100%' alt={data?.name} />
      <Box width='100%'>
        <Box>
          <Text textAlign='center'>
            {data?.name} - {data?.origin?.name}
          </Text>
        </Box>
        <Box display='flex' justifyContent='center' alignItems='center'>
          <Button
            isLoading={status === 'loading'}
            variantColor='cyan'
            loadingText='Loading'
            m='20px'
            size='lg'
            display='block'
            onClick={() => send('PICK_WINNER', { selection: fighterId })}
          >
            Select
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default FighterSelection
