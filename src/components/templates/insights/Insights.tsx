import { Box, Button, Heading, HStack, VStack, Text, Image} from '@chakra-ui/react'
import React from 'react'
import InsightsCard from './InsightsCard'
import inews1 from '../../../assets/images/insights/inews1.jpg'
import inews2 from '../../../assets/images/insights/inews2.jpg'
import InsightText from './InsightText'
import { Link } from 'react-router-dom'


const Insights = () => {
  return (
    <Box bg={'#F0F4F7'} justifyContent={'center'} pt={'1em'} pb={'2em'}>
    <HStack spacing={'1em'}>
    <Box>
        <Image src={inews1} w={'20em'} h={'18em'} />
        <Box bg={'white'} pb='1em'>
        <VStack w={'18em'} margin={'auto'} py={'1em'}>
            <Text fontSize={'medium'} fontWeight={'bold'}>NIGERIAN ENTERTAINERS SHOULD BE INSURED</Text>
            <Text fontSize={'x-small'} noOfLines={2} >With the emergence of “Wizkid” and “Burna Boy” as winners in the 63rd Grammy awards, and other recognitions gotten by the Nigerian Entertainment industry, it can be said that Nigeria produces the best music in Africa and has a fast-growing entertainment industry than other African countries.</Text>
        </VStack>
        <Link to={'insights'}>
        <Text textAlign={'right'} fontSize={'x-small'} mr={'1em'}> Read more →</Text></Link>
        
        </Box>
    </Box>
        <InsightText/>
        <Box>
        <Image src={inews2} w={'20em'} h={'18em'} />
        <Box bg={'white'} pb='1em'>
        <VStack w={'18em'} margin={'auto'} py={'1em'}>
            <Text fontSize={'medium'} fontWeight={'bold'}>NHIA TASKS STATE GOVERNMENTS ON HEALTH INSURANCE SCHEME</Text>
            <Text fontSize={'x-small'} noOfLines={2} >All 36 state governors in the nation have been instructed by the National Healthcare Insurance Authority (NHIA) to create National Health Insurance Scheme (NHIS) agencies in their various states to offer insurance coverage to the populace. This is to guarantee that the recently passed National Health Insurance Scheme enrolls 83 million underprivileged Nigerians.</Text>
        </VStack>
        <Link to={'insights'}>
        <Text textAlign={'right'} fontSize={'x-small'} mr={'1em'}> Read more →</Text></Link>
        
        </Box>
    </Box>
    </HStack>
    </Box >
  )
}

export default Insights