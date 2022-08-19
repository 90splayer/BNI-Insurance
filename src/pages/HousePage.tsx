import { Box } from '@chakra-ui/react'
import React from 'react'
import ProductPageCard from '../components/templates/products/ProductPageCard'
import homeimg from '../components/data/products/home.png';

const HousePage = () => {
  return (
    <Box bg={'#F0F4F7'}>
    <ProductPageCard 
    heading={'HOUSE INSURANCE'}
    img={homeimg}
    details='BNI Home Insurance protects you financially in the event that your home and property is damaged as a result of burglary or fire outbreak. It is designed essentially for those living in rented apartment to cover their contents only against loss as a result of burglary, fire & special peril.'
    />
    </Box>
  )
}

export default HousePage