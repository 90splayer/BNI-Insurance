import { Box, HStack, VStack, Heading, Text, Image } from '@chakra-ui/react'
import React from 'react'
import aboutimg from '../assets/aboutimg.png'

const AboutPage = () => {
  return (
    <Box bg={'#F0F4F7'} >
        <HStack pb={'2em'} px={''} spacing={'3em'}>
            <Box>
            <Image w={''} src={aboutimg}/>
            <Box zIndex={1} pos={'absolute'} top={'18em'} left={'27em'}>
            <Heading zIndex={1} pb={'0.3em'} textAlign={'center'} fontWeight={'semibold'} fontSize='xx-large' color={'white'}>All your <br/>protection under one roof</Heading>
            <Text textAlign={'center'} color={'white'} fontSize='md'>BNI Insurance Brokers is an industry leader in insurance<br/>broking and innovative risk management solutions.</Text>
            </Box>
            <Box px={{ base: '8em', md: '12em', lg:'18em'}}>
            <Text  py={{base: '1em', md: '1em', lg:'1em'}}>BNI Insurance Brokers Limited is a leader in the Nigerian insurance brokerage industry. We have built a professional organization with a global reach and a sizable intellectual capital base to assist clients in quantifying and managing risk through our extensive network of insurance providers, helping them to build, protect, and preserve wealth.</Text>
            <Text  py={{base: '1em', md: '1em', lg:'0em'}}>BNI Insurance Brokers provides best-in-class risk solutions enhanced by our client-centric and data-driven approach. Our portfolio includes companies in the oil and gas, banking, tourism, real estate, and healthcare sectors.</Text>
            <Text  py={{base: '1em', md: '1em', lg:'1em'}}>BNI Insurance Brokers Limited is a registered limited liability company (RC 1940931) and is licensed to operate by the National Insurance Company (NAICOM) and endorsed by Nigerian Council of Registered Insurance Brokers (NCRIB) to carry out transactions in all classes of insurance brokerage business.</Text>
            <Text pb={{base: '1em', md: '1em', lg:'2em'}} color='#003B79'>HOW WE WORK</Text>
            <Text pb={{base: '1em', md: '1em', lg:'2em'}}>We work closely with our clients to determine all their risk exposures and then deliver fit-for-purpose risk mitigation solutions at a minimal cost. Our business architecture is built around two key considerations</Text>
            <Text pb={{base: '1em', md: '1em', lg:'2em'}}>1.  Insurance Brokerage Services</Text>
            <Text pb={{base: '1em', md: '1em', lg:'2em'}}>2 . Risk Management Consulting Services</Text>
            </Box>
            
            </Box>
            
        </HStack>
    </Box>
  )
}

export default AboutPage