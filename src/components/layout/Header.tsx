import { Box, Flex, HStack, Text, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Flex
    h="88px"
      justify="space-between"
      align="center"
      bg={'#F0F4F7'}
      px={{ base: '4.3rem', lg: '6rem' }}
      zIndex={2}>
        <Link to="/">
        <Text fontSize={'x-large'} fontWeight={600} zIndex={1} color={'#003B79'}>
           BNI INSURANCE
        </Text>
        </Link>
        <HStack spacing="4rem" fontFamily="medium" fontWeight={'bold'} fontSize="1rem" zIndex={1} ml={'6em'}>
            <Box _hover={{ color: '#FAA1E1' }} display={{ base: 'none', lg: 'flex' }}>
             <Link to="products">Products</Link>
            </Box>
            <Box _hover={{ color: '#FAA1E1' }} display={{ base: 'none', lg: 'flex' }}>
            <Link to="insights">Insights</Link>
            </Box>
            <Box _hover={{ color: '#FAA1E1' }} display={{ base: 'none', lg: 'flex' }}>
            <Link to="about">About us</Link>
            </Box>
        </HStack>

        <Link to="contact"> <Button
          bg="#003B79"
          color={'white'}
          borderRadius={'xl'}
          fontSize="1rem"
          fontFamily="light"
          px="1.5rem"
          py="0.2rem"
          _hover={{ bg: '#FDB811' }} zIndex={1}>
          Contact Us
        </Button></Link>
    </Flex>
  )
}

export default Header