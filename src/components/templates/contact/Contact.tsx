import { Box, HStack, VStack, Text, Input, Button } from '@chakra-ui/react'
import React from 'react'

const Contact = () => {
  return (
    <Box bg={'#F0F4F7'} pt={'2em'}>
        <HStack align={'flex-start'} justify={'center'} spacing='5em' pb={'2em'} fontSize={'smaller'} fontWeight={'bold'}>
            <VStack align={'flex-start'} spacing='3em'>
                <VStack align={'flex-start'}>
                <Text>Contact Information</Text>
                <Box h={'0.1em'} w={{ base: '10em', md: '25em', lg:'30em' }} bg={'#003B79'}/>
                </VStack>
                <Text>For Enquiries: customercare@bniinsurancebrokers.com</Text>
                <Text>Telephone Number: (+234) 9135249000</Text>
                <Text>Address: No 168 Awolowo Road, Ikoyi, Lagos, Nigeria</Text>
            </VStack>
            <VStack align={'flex-start'} spacing='1.5em' >
                <VStack align={'flex-start'}>
                <Text>Contact Information</Text>
                <Box h={'0.1em'} w={'30em'} bg={'#003B79'}/>
                </VStack>
                <VStack align={'flex-start'}>
                    <Text>Your Name</Text>
                    <Input w={'30em'}/>
                </VStack>
                <VStack align={'flex-start'}>
                    <Text>Your Email</Text>
                    <Input w={'30em'}/>
                </VStack>
                <VStack align={'flex-start'}>
                    <Text>Subject</Text>
                    <Input w={'30em'}/>
                </VStack>
                <VStack align={'flex-start'}>
                    <Text>Message</Text>
                    <Input w={'30em'} h={'10em'}/>
                </VStack>
                <Button bg={'#003B79'} color={'white'} w={'6em'} h={'2em'}>Send</Button>
            </VStack>
        </HStack>
    </Box>
  )
}

export default Contact