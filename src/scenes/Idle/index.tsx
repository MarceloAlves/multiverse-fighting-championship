import React from 'react'
import { Button, Image, Flex } from '@chakra-ui/core'
import logo from '../../media/logo.png'
import { useMachineSend } from '../../machines/machine-context'

const Idle: React.FC = () => {
  const send = useMachineSend()
  return (
    <Flex flexDirection='column' maxWidth='sm'>
      <Image src={logo} alt='Multiverse Fighting Championship' />
      <Button size='lg' variantColor='cyan' onClick={() => send({ type: 'START' })} mt='10px'>
        Start Game
      </Button>
    </Flex>
  )
}

export default Idle
