import { VStack, Text } from '@chakra-ui/react'
import React from 'react'

const AboutOptions = () => {
  return (
    <VStack pos={{lg:'absolute'}} bg={'black'} top={{lg:'4em'}} right={{lg:'33em'}} zIndex='9'>
        <Text>ABOUT US</Text>
        <Text>OUR LEADERSHIP</Text>
        <Text>WHY CHOOSE US</Text>
    </VStack>
  )
}

export default AboutOptions