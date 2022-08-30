import { Box, VStack, Image, Text } from '@chakra-ui/react'
import React, {FC} from 'react'

type Props = {
    heading: string;
    details: string;
    img: string;
  };

const InsightsCard: FC<Props> = ({ heading, details, img }) => {
  return (
    <Box>
        <Image src={img} w={'20em'} h={'18em'} />
        <Box bg={'gray.200'} pb='1em'>
        <VStack w={'18em'} margin={'auto'} py={'1em'}>
            <Text fontSize={'medium'} fontWeight={'bold'}>{heading}</Text>
            <Text fontSize={'x-small'} noOfLines={2} >{details}</Text>
        </VStack>
        <Text textAlign={'right'} fontSize={'x-small'} mr={'1em'}>Read more →</Text>
        </Box>
    </Box>
  )
}

export default InsightsCard