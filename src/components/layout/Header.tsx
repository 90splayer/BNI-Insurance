import { Box, Flex, HStack, Text, Button, Image, VStack, Select, Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider, 
  List} from '@chakra-ui/react'
import React, { useState } from 'react';
import logo from '../../assets/bnilogo.png';
import { Link } from 'react-router-dom'
import AboutOptions from '../templates/hidden/about';
import down from "../../assets/down.png";
import Dropdown from '../templates/hidden/dropdown';


const Header = () => {

  const [about, showAbout] = useState(false)
  const [dropOpen, isDropOpen] = useState(false)
  const [ctrl, isCtrl] = useState(false)

  function handleClick(){
    isDropOpen(!dropOpen);
    isCtrl(!ctrl);
  }
  function close(){
    isDropOpen(false);
    isCtrl(false);
  }

  function mouseIn(){
    isDropOpen(true);
  }
  function mouseOut(){
    if(ctrl==true){
      isDropOpen(true);
    } else{
      isDropOpen(false);
    }
  }

  return (
    <Flex
    h="88px"
      justify="space-between"
      align="center"
      bg={'#F0F4F7'}
      px={{ base: '1rem', md: '4em', lg: '3rem' }}
      zIndex={2} >
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
            <Box>
            <HStack _hover={{ color: '#003B79' }}  display={{ base: 'none', md: 'none', lg: 'flex' }}>
             <Link to="about" onMouseEnter={mouseIn} onMouseLeave={mouseOut} >About us</Link><Image src={down} w={'0.7em'} h={'0.7em'} onClick={handleClick} />
            </HStack>
            <VStack bg={'white'} pos='absolute' top={'54px'} zIndex={9} h='8.5em' maxW='14em' display={dropOpen?'flex':'none'} align='flex-start' py={'1em'} borderRadius='1em' spacing='0.1em' _hover={{display: 'flex'}}>
            <Link to='about'><Box fontWeight={'normal'} fontSize={'sm'} color={'#003B79'} _hover={{ bg: "rgba(0, 59, 121, 0.1)"}} w='13em' px={'1em'} py={'0.3em'} cursor='pointer' onClick={close}>ABOUT US</Box></Link>
            <Link to='aboutboard'><Box fontWeight={'normal'} fontSize={'sm'} color={'#003B79'} _hover={{ bg: "rgba(0, 59, 121, 0.1)"}} w='13em' px={'1em'} py={'0.3em'} cursor='pointer' onClick={close}>OUR LEADERSHIP</Box></Link>
            <Link to='whyus'> <Box fontWeight={'normal'} fontSize={'sm'} color={'#003B79'} _hover={{ bg: "rgba(0, 59, 121, 0.1)"}} w='13em' px={'1em'} py={'0.3em'} cursor='pointer' onClick={close}>WHY CHOOSE</Box></Link>
            </VStack>
            </Box>
            <Box _hover={{ color: '#003B79' }} display={{ base: 'none', lg: 'flex' }}>
            <Link to="products">Products</Link>
            </Box>
            <Box _hover={{ color: '#003B79' }} display={{ base: 'none', lg: 'flex' }}>
            <Link to="insights">News</Link>
            </Box>
            <Box _hover={{ color: '#003B79' }} display={{ base: 'none', lg: 'flex' }}>
            <Link to="contact">Contact</Link>
            </Box>   
        </HStack>
        
        <Link to="quote"> <Button
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