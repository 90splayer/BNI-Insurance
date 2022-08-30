import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  description: string;
  heading: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  mr?: {};
};

const InsuranceCard: FC<Props> = ({ heading, description, mr }) => {
  return (
    <Box
      color="#fff"
      px={{ base: '3rem',md: '2em', lg: "4.6rem" }}
      pt={{ base: '0.6rem',md: '2em', lg: '1.2rem' }}
      h={{ base: '18rem',md: '17em', lg: '15rem' }}
      w={{ base: '220px', lg: '500px' }}
      zIndex={5}
      mb={{ base: '0', lg: '0' }}
      mr={mr}
      bg="rgba(0, 59, 121, 0.12)"
      _hover={{ bg: 'rgba(253, 184, 17, 0.02)' }}
      borderColor='black'
      borderStyle={'solid'}
      borderWidth='thin'
      borderRadius={'5px'}>
      <Flex align="center" pb="1rem">
        <Heading as="h6" color={'#003B79'} fontWeight={'bold'} fontSize={{ base: '1rem',md: '1em', lg: '1.2rem' }} >
          {heading}
        </Heading>
      </Flex>
      <Text
      color={'#36534F'}
        mb={{ base: '0.6em', md: '0.7em', lg:'1em' }}
        fontSize={{ base: 'xx-small', md: 'x-small', lg:'small' }}
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