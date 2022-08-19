import { HStack, Image, VStack, Box, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../../assets/logo.png'
import whatsapp from '../../assets/images/footer/whatsapp.png'
import instagram from '../../assets/images/footer/instagram.png'
import facebook from '../../assets/images/footer/facebook.png'
import twitter from '../../assets/images/footer/twitter.png'
import linkedin from '../../assets/images/footer/linkedin.png'

const Footer = () => {
  return (
    <HStack justify="space-between" bg={'white'} py='2em'
    px={{ base: '4.3rem', lg: '9.3rem' }} fontWeight={'bold'} color={'#003B79'}>
        <Image src={logo} w='7em'/>
        <VStack zIndex={1} alignItems={'flex-start'}>
        <Box _hover={{ color: '#FAA1E1' }} display={{ base: 'none', lg: 'flex' }}>
                Offices
        </Box>
        <Box _hover={{ color: '#FAA1E1' }} display={{ base: 'none', lg: 'flex' }}>
                Products
            </Box>
            <Box _hover={{ color: '#FAA1E1' }} display={{ base: 'none', lg: 'flex' }}>
                Blog
            </Box>
        </VStack>
        <VStack zIndex={1} alignItems={'flex-start'}>
        <Box _hover={{ color: '#FAA1E1' }} display={{ base: 'none', lg: 'flex' }}>
                About
        </Box>
        <Box _hover={{ color: '#FAA1E1' }} display={{ base: 'none', lg: 'flex' }}>
                Management
            </Box>
            <Box _hover={{ color: '#FAA1E1' }} display={{ base: 'none', lg: 'flex' }}>
                Association
            </Box>
        </VStack>
        <VStack zIndex={1} alignItems={'flex-start'}>
            <Text>
                Connect with BNI
            </Text>
            <HStack>
                <Image w={'3em'} src={facebook} />
                <Image w={'3em'} src={linkedin} />
                <Image w={'3em'} src={instagram} />
                <Image w={'3em'} src={twitter} />
                <Image w={'3em'} src={whatsapp} />
            </HStack>
        </VStack>
    </HStack>
  )
}

export default Footer