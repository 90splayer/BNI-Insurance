import { Box, HStack, VStack, Heading, Text, Image } from '@chakra-ui/react'
import React from 'react'
import aboutimg from '../assets/images/insights/news2.png'

const AboutPage = () => {
  return (
    <Box bg={'#F0F4F7'}>
        <HStack pb={'2em'} px={'3em'} spacing={'3em'}>
            <VStack>
            <Heading zIndex={1} fontWeight={'extrabold'} color={'#003B79'}>About Us</Heading>
            <Box zIndex={1}>
            <Text textAlign={'center'} fontSize='small'>Our INSURANCE PLC started insurance business in Nigeria in 1948 through the agency of Edward Turner & Co. It became a Nigerian branch of NEM General Insurance Association Limited of London in 1965. Incorporated in 1970 as a Nigerian company in compliance with the Companies Decree of 1968.</Text>
            </Box>
            </VStack>
            <Image w={'30em'} src={aboutimg}/>
        </HStack>
    </Box>
  )
}

export default AboutPage