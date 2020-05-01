import React from 'react'
import { Image, Button, Flex } from '@chakra-ui/core'
import { Character } from '../../types'
import { useCharacter } from '../../services/useCharacter'
import winner from '../../media/winner.png'
import unknownImage from '../../media/unknown.jpeg'
import { useMachineContext, useMachineSend } from '../../machines/machine-context'

const Winner: React.FC = () => {
  const machineContext = useMachineContext()
  const send = useMachineSend()
  const { data = {} as Character, status } = useCharacter(machineContext.winner!)

  return (
    <Flex flexDirection='column' maxWidth='sm'>
      <Image src={winner} alt='Winner!' />
      <Image src={status === 'success' ? data.image : unknownImage} />
      <Button variantColor='cyan' onClick={() => send({ type: 'RESTART' })} mt='10px'>
        Play Again?
      </Button>
    </Flex>
  )
}

export default Winner
