import React from 'react'
import { Image, Button, Flex } from '@chakra-ui/core'
import { Character } from '../../types'
import { useCharacter } from '../../services/useCharacter'
import winner from '../../media/winner.png'
import unknownImage from '../../media/unknown.jpeg'

const Winner: React.FC<{ id: number; restartGame: () => void }> = ({ id, restartGame }) => {
  const { data = {} as Character, status } = useCharacter(id)

  return (
    <Flex flexDirection='column' maxWidth='sm'>
      <Image src={winner} alt='Winner!' />
      <Image src={status === 'success' ? data.image : unknownImage} />
      <Button onClick={restartGame} variantColor='blue' mt='10px'>
        Play Again?
      </Button>
    </Flex>
  )
}

export default Winner
