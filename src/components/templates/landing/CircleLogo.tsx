import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { car, family, health, house, money, plane } from '../../svgs/home'
import logo from '../../../assets/logo.png';
import { Link } from 'react-router-dom';

const CircleLogo = () => {
  return (
    <Box pos="relative" h={'25em'} >
        <Link to="familyinsurance"><Box  _hover={{ bg:'#E5E4E6', transform: 'scale(1.05)'}} 
              cursor={'pointer'} pos="absolute" bg='white' 
              borderRadius={'500%'} p='3' zIndex={9} 
              boxShadow='dark-lg' top="90px" left="153px">{family}</Box></Link>
        <Link to="houseinsurance"><Box  _hover={{ bg:'#E5E4E6', transform: 'scale(1.05)'}} 
              cursor={'pointer'} pos="absolute" bg='white' 
              borderRadius={'500%'} p='3' zIndex={9} 
              boxShadow='dark-lg'  top="150px" left="52px">{house}</Box></Link>
        <Link to="businessinsurance"><Box  _hover={{ bg:'#E5E4E6', transform: 'scale(1.05)'}} 
              cursor={'pointer'} pos="absolute" bg='white' 
              borderRadius={'500%'} p='3' zIndex={9} 
              boxShadow='dark-lg'  top="150px" left="250px">{money}</Box></Link>
        <Link to="carinsurance"><Box _hover={{ bg:'#E5E4E6', transform: 'scale(1.05)'}} 
              cursor={'pointer'} pos="absolute" bg='white' 
              borderRadius={'500%'} p='3' zIndex={9} 
              boxShadow='dark-lg' top="240px" left="250px">{car}</Box></Link>
        <Link to="travelinsurance"><Box _hover={{ bg:'#E5E4E6', transform: 'scale(1.05)'}} 
              cursor={'pointer'} pos="absolute" bg='white' 
              borderRadius={'500%'} p='3' zIndex={9} 
              boxShadow='dark-lg' top="240px" left="52px">{plane}</Box></Link>
        <Link to="healthinsurance"><Box _hover={{ bg:'#E5E4E6', transform: 'scale(1.05)'}} 
              cursor={'pointer'} pos="absolute" bg='white' 
              borderRadius={'500%'} p='3' zIndex={9} 
              boxShadow='dark-lg' top="305px" left="153px">{health}</Box></Link>
        <Box pos="relative" w={220} p='4em' left= '4em' top= '7em' bg={'#FFFFFF'} borderRadius={'50%'} zIndex={5}>
        <Image  src={logo} alt="tiddix-hand"/>
        </Box>
    </Box>
  )
}

export default CircleLogo