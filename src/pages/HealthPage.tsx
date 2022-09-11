import { Box, Text } from '@chakra-ui/react'
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
    <Box px={{ base: '8em', md: '12em', lg:'18em'}}>
    <Text py={{base: '1em', md: '1em', lg:'2em'}}>Health Insurance provides for hospitalization expenses in the event of an illness/disease or accidental injury. Such insurance may cover some or all of the expenses of hospitalization, surgery, physician’s fees, drugs/medicines, laboratory tests, x-rays and other diagnostic procedures.</Text>
    <Text pb={{base: '1em', md: '1em', lg:'2em'}}>We provide a top-notch medical scheme that is custom designed to meet the health needs of your organization at an affordable cost, while offering the best benefits. Under the NHIS, we collaborate with industry leaders in healthcare services.</Text>
    </Box>
    </Box>
  )
}

export default HealthPage