import { Box, Button, Heading, HStack, VStack, Text, Image} from '@chakra-ui/react'
import React from 'react'
import InsightsCard from './InsightsCard'
import inews1 from '../../../assets/images/insights/inews1.jpg'
import inews2 from '../../../assets/images/insights/inews2.jpg'
import { Link } from 'react-router-dom'


const InsightsPageRead = () => {
  return (
    <Box bg={'#F0F4F7'} justifyContent={'center'} pt={'3em'} pb={'3em'}>
    <HStack spacing={'4em'}>
    
        <InsightsCard img= {inews1} heading='NIGERIAN ENTERTAINERS SHOULD BE INSURED'
        details='In 2002, I had the opportunity of meeting of selected persons from both the insurance and entertainment industries at the section of the National Stadium in Surulere, Lagos used for entertainment at the time.

        As I listened to the concerns raised by entertainment stakeholders, comprised mostly of actors, directors, producers and scriptwriters, I knew that the insurance industry then could not deliver the products and even the services needed.

        For example, the actors, some of whom have become legends today, wanted to know if they would be compensated if the accident resulted from a stunt action in a film. Of course, this was (is) an exemption from a standard Personal Accident Insurance Policy, so the answer then was No! And we will only have to confirm if position has changed 20 years after.'/>

        <InsightsCard img={inews2}  heading='NHIA TASKS STATE GOVERNMENTS ON HEALTH INSURANCE SCHEME'
        details='The National Healthcare Insurance Authority (NHIA) has urged all 36 state governors in the country to establish National Health Insurance Scheme (NHIS) agency in their various states to provide insurance cover to the citizens.


        This is to ensure the Federal Government initiative onboards 83 million poor Nigerians in the National Health Insurance Scheme newly signed into law.
        Director General, NHIA, Prof. Nasir Mohammed Sambo, speaking after being honoured at the National Awards by Health Care Providers Association of Nigeria (HCPAN) held in Lagos, said that at least 83 million poor Nigerians are set to be covered in the National Health Insurance Scheme in a bid to achieve universal coverage.
        
        According to him, NHIA will collaborate with state government-run health insurance schemes to accredit primary and secondary health facilities and enrol Nigerians into the scheme in order to ensure the delivery of quality health care across the country.'/>
    </HStack>
    </Box >
  )
}

export default InsightsPageRead