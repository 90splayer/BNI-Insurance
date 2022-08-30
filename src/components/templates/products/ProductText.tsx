import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const ProductText = () => {
  return (
    <Box>
        <VStack maxW={'35em'} textAlign='center' pb={'2em'} pt={'3em'}>
        <Heading fontSize={'medium'} fontWeight={'medium'} color={'#003B79'}>PRODUCTS</Heading>
        <Text fontSize={'xx-large'} fontWeight={'semibold'}>A wide range of insurance covers.<br/>All online. In minutes.</Text>
        <Text fontSize={'small'}>We offer our clients a range of insurance products from the best and most reliable companies guaranteed to protect you from risk.</Text>
        </VStack>
    </Box>
  )
}

export default ProductText