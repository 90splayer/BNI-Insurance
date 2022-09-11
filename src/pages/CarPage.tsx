import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import ProductPageCard from '../components/templates/products/ProductPageCard'
import carimg from '../assets/images/pages/carpage.png'

const CarPage = () => {
  return (
    <Box bg={'#F0F4F7'}>
    <ProductPageCard 
    heading={'CAR INSURANCE'}
    img={carimg}
    details="Just drive. We've got your worries covered. Our auto insurance products cover damage to your car and others, fire & theft, injury to you and other people and repairs caused by an accident"
    />
    <Box px={{ base: '8em', md: '12em', lg:'18em'}}>
    <Text py={{base: '1em', md: '1em', lg:'2em'}}>BNI Insurance Brokers Limited is a leader in the Nigerian insurance brokerage industry. We have built a professional organization with a global reach and a sizable intellectual capital base to assist clients in quantifying and managing risk through our extensive network of insurance providers, helping them to build, protect, and preserve wealth.</Text>
    <Text pb={{base: '1em', md: '1em', lg:'1em'}} color='#003B79'>Third-Party</Text>
            <Text pb={{base: '1em', md: '1em', lg:'1em'}}>This cover insures your car against any legal liability as a result of a motor accident to a third-party including damage to their vehicle or compensation for injuries sustained if the accident was your fault. However, there is no cover for any damage done to your car.</Text>
            <Text py={{base: '1em', md: '1em', lg:'1em'}} color='#003B79'>Comprehensive Cover</Text>
            <Text pb={{base: '1em', md: '1em', lg:'2em'}}>Comprehensive motor insurance has all the benefits of Third-party covers plus more. This policy also indemnifies the policyholder for loss or damage to the insured vehicle due to road accident, fire or theft.</Text>
    </Box>
    </Box>
  )
}

export default CarPage