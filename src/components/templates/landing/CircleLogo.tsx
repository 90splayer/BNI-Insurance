import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { car, family, health, house, money, plane } from '../../svgs/home'
import logo from '../../../assets/logo.png';

const CircleLogo = () => {
  return (
    <Box pos="relative" h={'25em'} >
        <Box  _hover={{ bg:'#E5E4E6', transform: 'scale(1.05)'}} 
              cursor={'pointer'} pos="absolute" bg='white' 
              borderRadius={'500%'} p='3' zIndex={9} 
              boxShadow='dark-lg' top="90px" left="153px">{family}</Box>
        <Box  _hover={{ bg:'#E5E4E6', transform: 'scale(1.05)'}} 
              cursor={'pointer'} pos="absolute" bg='white' 
              borderRadius={'500%'} p='3' zIndex={9} 
              boxShadow='dark-lg'  top="150px" left="52px">{house}</Box>
        <Box  _hover={{ bg:'#E5E4E6', transform: 'scale(1.05)'}} 
              cursor={'pointer'} pos="absolute" bg='white' 
              borderRadius={'500%'} p='3' zIndex={9} 
              boxShadow='dark-lg'  top="150px" left="250px">{money}</Box>
        <Box _hover={{ bg:'#E5E4E6', transform: 'scale(1.05)'}} 
              cursor={'pointer'} pos="absolute" bg='white' 
              borderRadius={'500%'} p='3' zIndex={9} 
              boxShadow='dark-lg' top="240px" left="250px">{car}</Box>
        <Box _hover={{ bg:'#E5E4E6', transform: 'scale(1.05)'}} 
              cursor={'pointer'} pos="absolute" bg='white' 
              borderRadius={'500%'} p='3' zIndex={9} 
              boxShadow='dark-lg' top="240px" left="52px">{plane}</Box>
        <Box _hover={{ bg:'#E5E4E6', transform: 'scale(1.05)'}} 
              cursor={'pointer'} pos="absolute" bg='white' 
              borderRadius={'500%'} p='3' zIndex={9} 
              boxShadow='dark-lg' top="305px" left="153px">{health}</Box>
        <Box pos="relative" w={220} p='4em' left= '4em' top= '7em' bg={'#FFFFFF'} borderRadius={'50%'} zIndex={5}>
        <Image  src={logo} alt="tiddix-hand"/>
        </Box>
    </Box>
  )
}

export default CircleLogo