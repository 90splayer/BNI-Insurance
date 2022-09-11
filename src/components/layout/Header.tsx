import { Box, Flex, HStack, Text, Button, Image, VStack, Select, Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider } from '@chakra-ui/react'
import React, { useState } from 'react';
import logo from '../../assets/bnilogo.png';
import { Link } from 'react-router-dom'
import AboutOptions from '../templates/hidden/about';



const Header = () => {

  const [about, showAbout] = useState()
   


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
        <HStack spacing="1.8rem" fontWeight={'semibold'} fontSize={{ base: 'none', md: '0.3em', lg: 'smaller' }} zIndex={1} ml={'6em'}>
            <Box _hover={{ color: '#003B79' }} display={{ base: 'none', md: 'none', lg: 'flex' }}>
             <Link to="/">Home</Link>
            </Box>
            <HStack _hover={{ color: '#003B79' }} display={{ base: 'none', lg: 'flex' }}>
            <Link to="about">About us</Link><Menu><MenuButton as={Button} bg='none' m={'0'} p='0em' minW={'0.9em'} maxH={'0.5em'} _expanded={{ bg: 'none' }}><img width={'10em'} src="https://img.icons8.com/ios/50/000000/expand-arrow--v1.png"/></MenuButton>
            <MenuList>
            <Link to="about"><MenuItem>ABOUT US</MenuItem></Link>
             <Link to='aboutboard'> <MenuItem>OUR LEADERSHIP</MenuItem></Link>
              <MenuItem>WHY CHOOSE US</MenuItem>
              </MenuList></Menu>
            </HStack>
            <Box _hover={{ color: '#003B79' }} display={{ base: 'none', md: 'none', lg: 'flex' }}>
             <Link to="products">Products</Link>
            </Box>
            <Box _hover={{ color: '#003B79' }} display={{ base: 'none', lg: 'flex' }}>
            <Link to="insights">News</Link>
            </Box>
            <Box _hover={{ color: '#003B79' }} display={{ base: 'none', lg: 'flex' }}>
            <Link to="contact">Contact</Link>
            </Box>   
        </HStack>
        

        <Link to="contact"> <Button
          bg="#003B79"
          color={'white'}
          borderRadius={'none'}
          fontSize="smaller"
          px="1.5rem"
          py="0.1rem"
          _hover={{ bg: '#FDB811' }} zIndex={1}>
          Get a Quote
        </Button></Link>
    </Flex>
    
   
  )
}

export default Header