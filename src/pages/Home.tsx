import { HStack, VStack, Text, Button, Box, Heading } from '@chakra-ui/react'
import React from 'react'
import CircleLogo from '../components/templates/landing/CircleLogo'
import Circle from '../components/templates/TopCircle'
import InsuranceCard from '../components/templates/InsuranceCard'
import MiddleCircle from '../components/templates/MiddleCircle'
import AboutUs from '../components/templates/about/AboutUs'
import MdMessage from '../components/templates/landing/MdMessage'
import Mail from '../components/templates/Mail'
import Contact from '../components/templates/contact/Contact'
import Product from '../components/templates/products/Product'
import Insights from '../components/templates/insights/Insights'
import ButtonFmt from '../components/templates/ButtonFmt'
import { Link } from 'react-router-dom'
import ProductText from '../components/templates/products/ProductText'
import ContactHome from '../components/templates/contact/ContactHome'


document.body.style.overflowX = "hidden"

const Home = () => {
  return (
      <Box bg={'#F0F4F7'}>
    <HStack  px='6em' zIndex={2} mb='6em'>
        <VStack maxW={{lg:'38em'}} textAlign='left' align='flex-start' mt={{base:'0',lg:'6em'}} zIndex={1} pt={{base:'3em'}}>
            <Box mb='0em'>
            <Text fontSize={{ base: '1.4em', md: '2em', lg:'2.3em' }} 
            fontWeight={'bold'} color={'#003B79'} fontFamily={'sans-serif'}>NO ONE CAN SURELY PREDICT THE FUTURE. BUT WE CAN PROTECT IT.</Text>
            </Box>
            <Box pb='2em'>
            <Text fontSize={{ base: 'small', md: 'md', lg:'md' }} color={'#36534F'}>We guarantee you a quick  access to get a quote and even more reliable plan that will save you much more</Text>
            </Box>
        </VStack>
        <CircleLogo />
    </HStack>
    <Circle/>
    <HStack px='5em' spacing={'3em'} justifyContent={'center'}  mb='-4em'>
      <InsuranceCard
      heading="PERSONAL INSURANCE"
      description="It’s all about protecting YOU, everything and everyone you love and value. Our array of personal insurance products are designed to ensure nothing gets in the way of your happiness."
      />
      <InsuranceCard
      heading="BUSINESS INSURANCE"
      description="Discover our business insurance products designed to provide cover for business (es), their staff and their proprietors from losses due to events that may occur during the normal course of business."
      />
    </HStack>
    <AboutUs/>
    <MdMessage/>
    <VStack mb={'2em'}>
    <ProductText/>
    <Product/>
    </VStack>
    <VStack mb={'2em'}>
    <Insights/>
    <Link to="insights">
    <ButtonFmt/>
    </Link>
    </VStack>
    <Mail/>
    <ContactHome/>
    </Box>
  )
}

export default Home