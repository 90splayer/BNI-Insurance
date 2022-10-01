import { HStack, Image, VStack, Box, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../../assets/bnilogo.png'
import whatsapp from '../../assets/images/footer/whatsapp.png'
import instagram from '../../assets/images/footer/instagram.png'
import facebook from '../../assets/images/footer/facebook.png'
import twitter from '../../assets/images/footer/twitter.png'
import linkedin from '../../assets/images/footer/linkedin.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <HStack justify="space-between" bg={'white'} py='2em'
    px={{ base: '3rem', md: '4em', lg: '7rem' }} fontWeight={'bold'} color={'#003B79'} fontSize={{ base: 'x-small', md: 'smaller', lg:'medium' }}>
        <Image src={logo} w={{ base: '5em', md: '6em', lg:'7em' }}/>
        <Box zIndex={1} alignItems={'flex-start'}  >
        <Box _hover={{ color: '#FAA1E1' }} mb={'0.8em'} fontSize={{ base: 'smaller', md: 'small', lg:'lg' }}>
                Contact Details
        </Box>
           <Box mb={'0.5em'} fontWeight={{ base: 'normal', md: 'normal', lg:'normal' }} fontSize={{ base: 'smaller', md: 'small', lg:'small' }}>
                +234 9135249000
            </Box>
            <Box mb={'0.5em'}  fontWeight={{ base: 'normal', md: 'normal', lg:'normal' }} fontSize={{ base: 'smaller', md: 'small', lg:'small' }}>
                customercare@bniinsurancebrokers.com
            </Box>
        </Box>
        <Box zIndex={1} alignItems={'flex-start'}  >
        <Box _hover={{ color: '#FAA1E1' }} mb={'0.8em'} fontSize={{ base: 'smaller', md: 'small', lg:'lg' }}>
                Address
        </Box>
           <Box mb={'0.5em'} fontWeight={{ base: 'normal', md: 'normal', lg:'normal' }} fontSize={{ base: 'smaller', md: 'small', lg:'small' }}>
                No 168<br/>Awolowo Road,<br/>Ikoyi, Lagos, Nigeria
            </Box>
        </Box>
        <VStack zIndex={1} alignItems={'flex-start'} spacing={'0.8em'}>
            <Text fontSize={{ base: 'x-small', md: 'smaller', lg:'medium' }}>
                Connect with BNI
            </Text>
            <HStack>
            <a href="https://www.facebook.com/businessnestinvestments"> <Image w={{ base: '1.5em', md: '2em', lg: '3em' }} src={facebook} /></a>
            <a href="https://www.instagram.com/bniholdings/"><Image w={{ base: '1.5em', md: '2em', lg: '3em' }} src={linkedin} /></a>
            <a href="https://www.linkedin.com/company/business-nest-investments/"><Image w={{ base: '1.5em', md: '2em', lg: '3em' }} src={instagram} /></a>
                <Image w={{ base: '1.5em', md: '2em', lg: '3em' }} src={twitter} />
                <Image w={{ base: '1.5em', md: '2em', lg: '3em' }} src={whatsapp} />
            </HStack>
        </VStack>
    </HStack>
  )
}

export default Footer