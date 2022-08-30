import { Box, Flex, HStack, Text, Button, Image, VStack } from '@chakra-ui/react'
import React from 'react'
import logo from '../../assets/bnilogo.png';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Flex
    h="88px"
      justify="space-between"
      align="center"
      bg={'#F0F4F7'}
      px={{ base: '1rem', md: '4em', lg: '3rem' }}
      zIndex={2}>
        <Link to="/">
        <HStack>
        <Image  src={logo} w={{ base: '2em', md: '2em', lg:'3em' }} alt="bni-logo"/>
        <Text fontSize={{base: 'md', md: 'large',lg:'x-large'}} fontWeight={600} zIndex={1} color={'#003B79'}>
           BNI INSURANCE BROKERS
        </Text>
        </HStack>
        </Link>
        <HStack spacing="4rem" fontWeight={'bold'} fontSize={{ base: 'none', md: '0.3em', lg: 'smaller' }} zIndex={1} ml={'6em'}>
            <Box _hover={{ color: '#003B79' }} display={{ base: 'none', md: 'none', lg: 'flex' }}>
             <Link to="products">Products</Link>
            </Box>
            <Box _hover={{ color: '#003B79' }} display={{ base: 'none', lg: 'flex' }}>
            <Link to="insights">Insights</Link>
            </Box>
            <Box _hover={{ color: '#003B79' }} display={{ base: 'none', lg: 'flex' }}>
            <Link to="about">About us</Link>
            </Box>
        </HStack>

        <Link to="contact"> <Button
          bg="#003B79"
          color={'white'}
          borderRadius={'xl'}
          fontSize="smaller"
          px="1.5rem"
          py="0.1rem"
          _hover={{ bg: '#FDB811' }} zIndex={1}>
          Contact Us
        </Button></Link>
    </Flex>
  )
}

export default Header