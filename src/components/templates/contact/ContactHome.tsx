import { Box, Button, Heading, HStack, Input, VStack } from '@chakra-ui/react'
import React from 'react'

const ContactHome = () => {
  return (
    <VStack pb={'5em'} pt={'3em'} spacing='1.5em'>
        <Heading fontSize={'x-large'} fontWeight={'semibold'} textAlign={'center'}>Sign up to stay up to date<br/>on our new solutions and policies</Heading>
        <HStack>
        <Input placeholder='Full Name' style={{ fontSize:'small'}} w={'14em'} bg='white'/>
        <Input placeholder='Mail' style={{ fontSize:'small'}} w={'14em'} bg='white'/>
        <Button bg={'#003B79'} color={'white'} fontSize='small' w={'9em'}>Submit</Button>
        </HStack>
    </VStack>
  )
}

export default ContactHome