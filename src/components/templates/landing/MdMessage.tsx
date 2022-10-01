import { Box, HStack, VStack, Text, Button, Image } from '@chakra-ui/react'
import md from '../../../assets/mdimg.png'
import React from 'react'

const MdMessage = () => {
  return (
    <Box zIndex={5} mt='-9em'>
        <HStack bg='linear-gradient(110.33deg, rgba(0, 59, 121, 0.4) 0%, rgba(253, 184, 17, 0.1) 100%)'
         justifyContent={'space-between'}  px={'7em'} py={'2em'} mb={'2em'} zIndex={1}>
            <VStack w={'25em'} alignItems='flex-start' spacing={'2em'}>
              <VStack>
                <Text color={'white'} textAlign={'left'} 
                fontWeight={'bold'} fontSize='x-large'
                 zIndex={1}>“IT’S ABOUT HAVING A TAILORED SYSTEM THAT WORKS FOR YOU.”</Text>
                <Text color={'white'} textAlign={'left'} fontSize='small' mb={'2em'} zIndex={1}>BNI Insurance isn’t a corporate creation or a character dreamt up by a focus group. She’s the living, breathing economist and master financial advisor who has been making and investing money sinnce the 2010’s.</Text>
                </VStack>
                <Text color={'white'} zIndex={1} textAlign={'left'} fontWeight={'bold'} 
                fontSize={'small'} cursor={'pointer'}>Discover more →</Text>
            </VStack>
            <VStack>
              <Image src={md} w={'7em'}/>
                <Text color={'#003B79'} zIndex={1}>Ifeoma Adeoye</Text>
            </VStack>
        </HStack>
    </Box>
  )
}

export default MdMessage