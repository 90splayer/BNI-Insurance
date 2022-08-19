import { Box, Heading, HStack, Image, Text } from '@chakra-ui/react';
import React, {FC} from 'react'

type Props = {
    heading: string;
    details: string;
    img: string;
  };

const ProductPageCard: FC<Props> = ({ heading, details, img }) => {
  return (
    <Box pt={'3em'} pb={'3em'} px={'3em'}>
        <HStack> 
            <Image src={img} w={'20em'}/>
            <Heading color={'#003B79'}>{heading}</Heading>
        </HStack>
        <Text mt={'2em'} fontSize='lg' color={'#36534F'}>{details}</Text>
    </Box>
  )
}

export default ProductPageCard