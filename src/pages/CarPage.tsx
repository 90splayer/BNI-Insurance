import { Box } from '@chakra-ui/react'
import React from 'react'
import ProductPageCard from '../components/templates/products/ProductPageCard'
import carimg from '../components/data//products/car.png';

const CarPage = () => {
  return (
    <Box bg={'#F0F4F7'}>
    <ProductPageCard 
    heading={'CAR INSURANCE'}
    img={carimg}
    details="Just drive. We've got your worries covered. Our auto insurance products cover damage to your car and others, fire & theft, injury to you and other people and repairs caused by an accident"
    />
    </Box>
  )
}

export default CarPage