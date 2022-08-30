import { Box } from '@chakra-ui/react'
import React from 'react'
import ProductPageCard from '../components/templates/products/ProductPageCard'
import travelimg from '../assets/images/pages/planepage.png';

const TravelPage = () => {
  return (
    <Box bg={'#F0F4F7'}>
    <ProductPageCard 
    heading={'TRAVEL INSURANCE'}
    img={travelimg}
    details='Travelling is always an exciting activity be it for leisure or business. The fun and excitement comes with the responsibility to make your journey safe. Your desire to have a fun-filled travel without worries is what we aim to achieve. AIICO Travel Insurance Plan in partnership with AIG South Africa provides cover against a broad range of mishaps.

    Travel insurance is a mandatory requirement at all Schengen embassies (France, Germany, Italy, Netherlands, Iceland, Luxemburg, Belgium, Sweden, Denmark, Greece, Finland, Norway, Spain, Portugal, Slovakia, Slovenia, Malta, Lithuania, Latvia, Hungary, Estonia, Czech Republic, Austria, Switzerland and Poland). AIICO Travel Insurance Plan is recognized and accepted at all Schengen and Non-Schengen embassies.
    
    This product is available to Corporate entities and individuals.'
    />
    </Box>
  )
}

export default TravelPage