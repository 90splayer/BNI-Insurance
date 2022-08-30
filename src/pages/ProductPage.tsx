import { Box, Image, HStack, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Product from '../components/templates/products/Product'
import product from '../assets/productimg.png'

const ProductPage = () => {
  return (
    <VStack spacing={'5em'} pb={'5em'} bg={'#F0F4F7'}>
            <Box >
            <Image w={''} src={product}/>
            <Box zIndex={1} pos={'absolute'} top={'18em'} left={'21em'}>
            <Heading zIndex={1} pb={'0.3em'} textAlign={'center'} fontWeight={'semibold'} fontSize='xx-large' color={'white'}>A wide range of insurance covers.<br/>All online. In minutes.</Heading>
            <Text textAlign={'center'} color={'white'} fontSize='md'>We offer our clients a range of insurance products from the best and most reliable<br/>companies guaranteed to protect you from risk.</Text>
            </Box>
            </Box>
        <Product/>
    </VStack>
  )
}

export default ProductPage