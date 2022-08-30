import { Box } from '@chakra-ui/react'
import React from 'react'
import ProductPageCard from '../components/templates/products/ProductPageCard'
import healthimg from '../assets/images/pages/healthpage.png';

const HealthPage = () => {
  return (
    <Box bg={'#F0F4F7'}>
    <ProductPageCard 
    heading={'HEALTH INSURANCE'}
    img={healthimg}
    details='You want to enjoy life, we are here to help you do that without worries. Our Life and Health insurance products provide various levels of cover for you and your loved ones.'
    />
    </Box>
  )
}

export default HealthPage