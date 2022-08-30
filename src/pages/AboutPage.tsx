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
            <Text  py={{base: '1em', md: '1em', lg:'2em'}}>Insurance and risk management is now widely viewed as a critical boardroom issue. It is the cornerstone of every company’s capital structure. A poorly constructed program may leave your organization vulnerable to major long-term setbacks, or worse, insolvency and bankruptcy. When well-designed, an insurance and risk management program frees you to pursue your vision—unhindered by concerns that you may need to hoard precious financial capital or maintain unusually high levels of liquidity.</Text>
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