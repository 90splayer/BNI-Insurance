import { Box, Button, Heading, HStack, VStack} from '@chakra-ui/react'
import React from 'react'
import InsightsCard from './InsightsCard'
import news1 from '../../../assets/images/insights/news1.png'
import news2 from '../../../assets/images/insights/news2.png'


const Insights = () => {
  return (
    <VStack bg={'#F0F4F7'} justifyContent={'center'} pt={'1em'} pb={'2em'} spacing='2em'>
    <Heading fontWeight={'extrabold'} color={'#003B79'}>Insights</Heading>
    <HStack spacing={'5em'}>
        <InsightsCard img= {news1} heading='SED UT PERSPICAITIS UNDE OMNIS ISTE NATUS ERROR SIT VOLUPTATEM.'
        details='Sed ut perspiciatis unde omnis iste natus error sit voluptatem  doloremque laudantium, totam'/>
        <InsightsCard img={news2} heading='SED UT PERSPICAITIS UNDE OMNIS ISTE NATUS ERROR SIT VOLUPTATEM.'
        details='Sed ut perspiciatis unde omnis iste natus error sit voluptatem  doloremque laudantium, totam'/>
    </HStack>
    </VStack >
  )
}

export default Insights