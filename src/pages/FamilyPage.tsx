import { Box, Text } from '@chakra-ui/react'
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
     <Box px={{ base: '8em', md: '12em', lg:'18em'}} py={{base: '1em', md: '1em', lg:'1.5em'}}>
    <Text pb={{base: '1em', md: '1em', lg:'1em'}}>Our family insurance plan provides your loved ones with options, flexibility, and protection in addition to the necessary savings that are beneficial when growing a family. Family insurance plans are designed to provide coverage for you, your spouse, and your children, and they are routinely made to accommodate families of all sizes.</Text>
    </Box>
    </Box>
  )
}

export default FamilyPage