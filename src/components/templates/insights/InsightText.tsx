import { Box, VStack, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const InsightText = () => {
  return (
    <Box>
        <VStack maxW={'30em'} textAlign='center' pb={'2em'} pt={'3em'}>
        <Heading fontSize={'medium'} fontWeight={'medium'} color={'#003B79'}>INSIGHTS</Heading>
        <Text fontSize={'xx-large'} fontWeight={'semibold'}>Get insights in the Insurance Industry</Text>
        <Text fontSize={'small'}>We collect a range of insurance updates from the best and most reliable information blogs guaranteed to protect you from risk.</Text>
        </VStack>
    </Box>
  )
}

export default InsightText