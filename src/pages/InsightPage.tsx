import { Box, Image, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import InsightsPageRead from '../components/templates/insights/InsightsPageRead'
import insightimg from '../assets/insightsimg.png'

const InsightPage = () => {
  return (
    <VStack bg={'#F0F4F7'}>
      <Box >
            <Image w={''} src={insightimg}/>
            <Box zIndex={1} pos={'absolute'} top={'18em'} left={'24em'}>
            <Heading zIndex={1} pb={'0.3em'} textAlign={'center'} fontWeight={'semibold'} fontSize='xx-large' color={'white'}>Get insights in the Inurance Industry</Heading>
            <Text textAlign={'center'} color={'white'} fontSize='md'>We collect a range of insurance updates from the best and most reliable<br/>information blogs guaranteed to protect you from risk.</Text>
            </Box>
            </Box>
            <InsightsPageRead/>
    </VStack>
  )
}

export default InsightPage