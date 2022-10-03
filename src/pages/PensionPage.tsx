import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import ProductPageCard from '../components/templates/products/ProductPageCard'
import pensionimg from '../assets/images/pages/pensionpage.png';

const PensionPage = () => {
  return (
    <Box bg={'#F0F4F7'}>
    <ProductPageCard 
    heading={'LIFE AND PENSION'}
    img={pensionimg}
    details='These custom design benefits programs will help alleviate the costs of health, drug and dental care services. It is important for a business to have a benefit plan that meets the needs of their employees whilst considering what program is most suitable and practical for the company.'
    />
    <Box px={{ base: '8em', md: '12em', lg:'18em'}} py={{base: '1em', md: '1em', lg:'1.5em'}}>
    <Text pb={{base: '1em', md: '1em', lg:'1em'}}>Life and Pension Insurance protects one’s family against the sudden loss of the family’s main income provider, and also helps to build savings and a salary for life for retirement. Our experts design bespoke Life Insurance policies to fit every stage of life. Protect and grow your assets while covering the life risk.
       Enjoy life like you never retired with our pension plan. With this plan, you get a tax-free salary for life.</Text>
    </Box>
    </Box>
  )
}

export default PensionPage