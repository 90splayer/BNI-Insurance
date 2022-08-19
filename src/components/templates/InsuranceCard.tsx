import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  description: string;
  heading: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  mr?: {};
  height: string;
};

const InsuranceCard: FC<Props> = ({ heading, description, mr, height }) => {
  return (
    <Box
      color="#fff"
      px="4.6rem"
      pt="2rem"
      h={height}
      w={{ base: '375px', lg: '500px' }}
      zIndex={5}
      mb={{ base: '5rem', lg: '0' }}
      mr={mr}
      bg="rgba(0, 59, 121, 0.12)"
      _hover={{ bg: 'rgba(253, 184, 17, 0.02)' }}
      borderColor='black'
      borderStyle={'solid'}
      borderWidth='thin'
      borderRadius={'5px'}>
      <Flex align="center" pb="1rem">
        <Heading as="h6" color={'#003B79'} fontWeight={'bold'} fontSize={{ base: '1rem', lg: '1.4rem' }}>
          {heading}
        </Heading>
      </Flex>
      <Text
      color={'#36534F'}
        mb='1em'
        fontSize={{ base: '1rem', lg: 'small' }}
        maxW="48.4rem">
        {description}
      </Text>
      <Link to="products">
      <Button bg={'none'} fontSize='x-small' h={'3em'} color={'#36534F'} 
      borderColor={'#36534F'} borderStyle={'solid'}
      borderWidth={'thin'}>View Details</Button>
      </Link>
    </Box>
  );
};

export default InsuranceCard;