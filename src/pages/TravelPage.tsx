import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import ProductPageCard from '../components/templates/products/ProductPageCard'
import travelimg from '../assets/images/pages/planepage.png';

const TravelPage = () => {
  return (
    <Box bg={'#F0F4F7'}>
    <ProductPageCard 
    heading={'TRAVEL INSURANCE'}
    img={travelimg}
    details=''
    />
    <Box px={{ base: '8em', md: '12em', lg:'18em'}}>
    <Text py={{base: '1em', md: '1em', lg:'2em'}}>Whether traveling domestically or internationally, travelers run the risk of incurring costs or financial losses due to travel delays, flight cancellations, medical costs, injuries, and lost luggage.</Text>
            <Text pb={{base: '1em', md: '1em', lg:'2em'}}>Travel Insurance covers for any flight delays or cancellation, loss of luggage, accidents, injuries, and death to help you enjoy a save journey</Text>
            <Text pb={{base: '1em', md: '1em', lg:'1.5em'}} color='#003B79'>What you stand to gain:</Text>
            <Text pb={{base: '1em', md: '1em', lg:'1em'}}>1. Emergency medical expense</Text>
            <Text pb={{base: '1em', md: '1em', lg:'1em'}}>2. Loss of luggage</Text>
            <Text pb={{base: '1em', md: '1em', lg:'1em'}}>3. Flight delays or cancellation</Text>
            <Text pb={{base: '1em', md: '1em', lg:'1em'}}>4. Loss of personal money</Text>
    </Box>
    </Box>
  )
}

export default TravelPage