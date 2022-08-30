import { Box } from '@chakra-ui/react'
import React from 'react'
import ProductPageCard from '../components/templates/products/ProductPageCard'
import familyimg from '../assets/images/pages/familypage.png'

const FamilyPage = () => {
  return (
    <Box bg={'#F0F4F7'}>
    <ProductPageCard 
    heading={'FAMILY INSURANCE'}
    img={familyimg}
    details='We do everything we can for our loved ones, not because we have to, but because we want to. Whether you’re looking for coverage for a specific period of time or lifelong protection, with the right Life Insurance coverage, you can be happy knowing that your loved ones will be able to live out their dreams, no matter what the future holds.'
    />
    </Box>
  )
}

export default FamilyPage