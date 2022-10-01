import { Box, Heading, VStack, Text } from '@chakra-ui/react'
import React from 'react'
import ProductPageCard from '../components/templates/products/ProductPageCard'
import whyus from '../assets/images/pages/whyus.png'

const WhyUsPage = () => {
  return (
    <Box><ProductPageCard 
    heading={'Why Choose Us'}
    img={whyus}
    details="We understand clients needs and represent them accordingly with insurance providers."
    />
    <VStack px={{ base: '8em', md: '12em', lg:'18em'}} spacing={'2em'} py={'2em'}>
        <Text>Our operations are built on and driven by our core values – Integrity, value creation, innovation and sustainability. The needs of our clients is our utmost priority and as such, we ensure prompt settlement of claims</Text>
        <Text>Our staff, who are supervised by strategic account managers and relationship managers, are industry- and product experts and have been trained to provide bespoke solutions to meet </Text>
        <Text>Our deep local knowledge of the Nigerian operating environment, consultative collaboration with our clients and leverage within the Nigerian insurance industry positions us to design premium cost-effective risk and insurance solutions for each client.</Text>
    </VStack>
    </Box>
  )
}

export default WhyUsPage