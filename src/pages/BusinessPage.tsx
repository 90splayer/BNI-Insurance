import { Box } from '@chakra-ui/react'
import React from 'react'
import ProductPageCard from '../components/templates/products/ProductPageCard'
import planimg from '../assets/images/pages/planpage.png';

const BusinessPage = () => {
  return (
    <Box bg={'#F0F4F7'}>
    <ProductPageCard 
    heading={'BUSINESS INSURANCE'}
    img={planimg}
    details='Discover our business insurance products designed to provide cover for business (es), their staff and their proprietors from losses due to events that may occur during the normal course of business.'
    />
    </Box>
  )
}

export default BusinessPage