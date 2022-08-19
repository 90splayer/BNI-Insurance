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
            <Text textAlign={'center'} fontSize='small'>Our INSURANCE PLC started insurance business in Nigeria in 1948 through the agency of Edward Turner & Co. It became a Nigerian branch of NEM General Insurance Association Limited of London in 1965. Incorporated in 1970 as a Nigerian company in compliance with the Companies Decree of 1968.</Text>
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