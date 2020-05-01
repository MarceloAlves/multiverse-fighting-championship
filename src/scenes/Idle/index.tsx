import React from 'react'
import { Button, Image, Flex } from '@chakra-ui/core'
import logo from '../../media/logo.png'

const Idle: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <Flex flexDirection='column' maxWidth='sm'>
      <Image src={logo} alt='Multiverse Fighting Championship' />
      <Button size='lg' variantColor='cyan' onClick={onClick} mt='10px'>
        Start Game
      </Button>
    </Flex>
  )
}

export default Idle
