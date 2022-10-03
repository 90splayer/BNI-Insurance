import { Box, Heading, HStack, Image, Text } from '@chakra-ui/react';
import React, {FC} from 'react'

type Props = {
    heading: string;
    details: string;
    img: string;
  };

const ProductPageCard: FC<Props> = ({ heading, details, img }) => {
  return (
     <Box >
            <Image src={img} h={'30em'} w={'full'}/>
            <Box zIndex={1} pos={'absolute'} top={'18em'} left={'21em'}>
            <Heading zIndex={1} pb={'0.3em'} textAlign={'center'} fontWeight={'semibold'} fontSize='xx-large' color={'white'}>{heading}</Heading>
            <Text textAlign={'center'} color={'white'} fontSize='md' w={'36em'}>{details}</Text>
            </Box>
      </Box>
  )
}


export default ProductPageCard