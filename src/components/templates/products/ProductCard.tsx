import { Box, VStack, Image, Text } from '@chakra-ui/react'
import React, { FC } from 'react'


type Props = {
    heading: string;
    icon: any;
    img: string;
  };
const ProductCard: FC<Props> = ({ heading, icon, img }) => {
  return (
    <Box
    pos="relative"
    transition="0.5s ease"
    _hover={{ cursor: 'pointer', transform: 'scale(1.05)' }} w={'15em'}>
        <Image src={img} alt='productimg'/>
        <VStack pos="absolute"
        top="20px"
        right="3.5em">
            <Box bg="white"
        borderRadius={'50%'}
        p={'1em'}>{icon}</Box>
            <Text color={'white'} fontWeight={'bold'} 
            w={'8em'} textAlign={'center'} fontSize='medium'
            >{heading}</Text>
        </VStack>
    </Box>
  )
}

export default ProductCard