import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import ProductPageCard from '../components/templates/products/ProductPageCard'
import bonds from '../assets/images/pages/bondspage.png'

const BondsPage = () => {
  return (
    <Box bg={'#F0F4F7'}>
    <ProductPageCard 
    heading={'BONDS AND GUARANTEES'}
    img={bonds}
    details='The purpose of Bonds and Guarantees is to provide the buyer with insurance of sorts should there be a failure by the seller to meet their contractual obligations. '
    />
    <Box px={{ base: '8em', md: '12em', lg:'18em'}} py={{base: '1em', md: '1em', lg:'1em'}}>
    <Text pb={{base: '0.5em', md: '0.5em', lg:'0.5em'}} color='#003B79'>Bond</Text>
    <Text pb={{base: '1em', md: '1em', lg:'1em'}}>A bond is an undertaking by one party (guarantor) that if another party fails to perform his obligations, he (the guarantor) will make it good. Bonds must be in writing involving three parties who must append their signatures to the deed under seal. Three parties involved in a bond transaction are the beneficiary, the obligator (contractor or debtor), and the guarantor (surety).</Text>
    <Text pb={{base: '0.5em', md: '0.5em', lg:'0.5em'}} color='#003B79'>Guarantee</Text>
    <Text pb={{base: '1em', md: '1em', lg:'1em'}}>A guarantee is issued by a bank at the request of a client and is used as insurance in the instance that a formal contract is not met. Before contacting the bank of the party requesting the Letter of Credit, a financial institution issuing the Letter of Credit will do underwriting tasks to ensure the party's creditworthiness. Normally, letters of credit are valid for a year.</Text>
    </Box>
    </Box>
  )
}

export default BondsPage