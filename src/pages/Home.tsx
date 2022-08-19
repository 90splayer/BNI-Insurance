import { HStack, VStack, Text, Button, Box } from '@chakra-ui/react'
import React from 'react'
import CircleLogo from '../components/templates/landing/CircleLogo'
import Circle from '../components/templates/TopCircle'
import InsuranceCard from '../components/templates/InsuranceCard'
import MiddleCircle from '../components/templates/MiddleCircle'
import AboutUs from '../components/templates/about/AboutUs'
import MdMessage from '../components/templates/landing/MdMessage'
import Mail from '../components/templates/Mail'
import Contact from '../components/templates/Contact'
import Product from '../components/templates/products/Product'
import Insights from '../components/templates/insights/Insights'
import ButtonFmt from '../components/templates/ButtonFmt'
import { Link } from 'react-router-dom'


document.body.style.overflowX = "hidden"

const Home = () => {
  return (
      <Box bg={'#F0F4F7'}>
    <HStack px='6em' zIndex={2} mb='6em'>
        <VStack maxW={{lg:'38em'}} textAlign='left' align='flex-start' mt='6em' zIndex={1}>
            <Box mb='1em'>
            <Text fontSize={{ base: '1rem', lg: '2.4rem' }} 
            fontWeight={'extrabold'} color={'#003B79'}>NO ONE CAN SURELY PREDICT THE FUTURE. BUT WE CAN PROTECT IT.</Text>
            </Box>
            <Box pb='2em'>
            <Text fontSize='lg' color={'#36534F'}>We guarantee you a quick  access to get a quote and even more reliable plan that will save you much more</Text>
            </Box>
            <Button bg='white' boxShadow='dark-lg'>GET A QUOTE</Button>
        </VStack>
        <CircleLogo />
    </HStack>
    <Circle/>
    <HStack px='5em' spacing={'3em'} justifyContent={'center'}  mb='-4em'>
      <InsuranceCard
      heading="PERSONAL INSURANCE"
      height="15rem"
      description="It’s all about protecting YOU, everything and everyone you love and value. Our array of personal insurance products are designed to ensure nothing gets in the way of your happiness."
      />
      <InsuranceCard
      heading="BUSINESS INSURANCE"
      height="15rem"
      description="It’s all about protecting YOU, everything and everyone you love and value. Our array of personal insurance products are designed to ensure nothing gets in the way of your happiness."
      />
    </HStack>
    <AboutUs/>
    <MdMessage/>
    <VStack mb={'2em'}>
    <Product/>
    <Link to="products">
    <ButtonFmt/>
    </Link>
    </VStack>
    <VStack mb={'2em'}>
    <Insights/>
    <Link to="insights">
    <ButtonFmt/>
    </Link>
    </VStack>
    <Mail/>
    <Contact/>
    </Box>
  )
}

export default Home