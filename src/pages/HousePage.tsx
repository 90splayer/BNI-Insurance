import { Box, List, ListItem, Text } from '@chakra-ui/react'
import React from 'react'
import ProductPageCard from '../components/templates/products/ProductPageCard'
import homeimg from '../components/data/products/home.png';
import houseimg from '../assets/images/pages/homepage.png'

const HousePage = () => {
  return (
    <Box bg={'#F0F4F7'}>
    <ProductPageCard 
    heading={'HOUSE INSURANCE'}
    img={houseimg}
    details='BNI Home Insurance protects you financially in the event that your home and property is damaged as a result of burglary or fire outbreak. It is designed essentially for those living in rented apartment to cover their contents only against loss as a result of burglary, fire & special peril.'
    />
    <Box px={{ base: '8em', md: '12em', lg:'18em'}} py={{base: '1em', md: '1em', lg:'1.5em'}}>
    <Text pb={{base: '1em', md: '1em', lg:'1em'}}>Your house is more than just a place for you to sleep; it is a home. Insurance protects you financially if your home and property are damaged or lost by theft or burglary, natural disasters, and fire. We will swiftly replace your loss if you lose any valuables or household furnishings.</Text>
    <Text pb={{base: '0.5em', md: '0.5em', lg:'0.5em'}} color='#003B79'>Our Home Insurance Plan also offers:</Text>
    <List>
      <ListItem pb={{base: '0.5em', md: '0.5em', lg:'0.5em'}}>•	Liability for third-party losses up to 50% of the sum insured</ListItem>
      <ListItem pb={{base: '0.5em', md: '0.5em', lg:'0.5em'}}>•	Cover on items you take out and about, whether you are at home or on holiday</ListItem>
      <ListItem pb={{base: '0.5em', md: '0.5em', lg:'0.5em'}}>•	Prompt claim settlement from the time of notification</ListItem>
      <ListItem pb={{base: '0.5em', md: '0.5em', lg:'0.5em'}}>•	Funeral expense support.</ListItem>
    </List>
    </Box>
    </Box>
  )
}


export default HousePage