import { Box } from '@chakra-ui/react'
import React from 'react'
import ProductPageCard from '../components/templates/products/ProductPageCard'
import bonds from '../assets/images/pages/bondspage.png'

const BondsPage = () => {
  return (
    <Box bg={'#F0F4F7'}>
    <ProductPageCard 
    heading={'BONDS AND GUARANTEES'}
    img={bonds}
    details='A bond is an undertaking by one party (guarantor) that if another party fails to perform his obligations, he (the guarantor)will make it good. Bonds which must be evidenced in writing involve three parties who must append their signatures to the deed under seal. Three parties involved in a bond transaction are the beneficiary, the obligator (contractor or debtor) and the guarantor (surety).'
    />
    </Box>
  )
}

export default BondsPage