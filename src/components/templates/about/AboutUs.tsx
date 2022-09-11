import { Box, Heading, VStack, Text, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import MiddleCircle from '../MiddleCircle'

const AboutUs = () => {
  return (
    <Box zIndex={5} bg='#F8FAFB' borderRadius='50%' w={'45em'} h={'45em'} p='9em' margin='auto'>
        <Box w={'25em'} h={'25em'} borderRadius='50%' bg='#FFFFFF' p='4em' margin='auto' zIndex={1} mb={'2em'}>
        <VStack w={{lg:'15em'}} margin='auto' zIndex={1} spacing={'1.5em'}>
            <Heading zIndex={1} fontWeight={'extrabold'} color={'#003B79'}>About Us</Heading>
            <Box zIndex={1}>
            <Text textAlign={'center'} fontSize='small'>BNI Insurance Brokers Limited is a leader in the Nigerian insurance brokerage industry. We have built a professional organization with a global reach and a sizable intellectual capital base to assist clients in quantifying and managing risk through our extensive network of insurance providers, helping them to build, protect, and preserve wealth.</Text>
            </Box>
            <Box >
            <Link to="about">
            <Button zIndex={1} bg={'none'} fontSize='x-small' h={'3em'} color={'#36534F'} 
                   borderColor={'#36534F'} borderStyle={'solid'}
                  borderWidth={'thin'}>View more</Button>
            </Link>
            </Box>
        </VStack>
        </Box>
    </Box>
  )
}

export default AboutUs