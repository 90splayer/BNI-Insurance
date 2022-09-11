import { Box, Heading, HStack, Image, VStack, Text } from '@chakra-ui/react'
import React, { FC, useState } from 'react'

type Props = {
    role: string;
    name: string;
    img: string;
  };

  

const BoardCard: FC<Props> = ({ role, name, img }) => {

    const [hidden, isHidden] = useState(true)

    
    
  return (
      <Box pos="relative"
      transition="0.5s ease"
      _hover={{ cursor: 'pointer'}} onMouseEnter={() => isHidden(false)}
      onMouseLeave={() => isHidden(true)}>
          <Image src={img} alt='boardimg' w={'15em'} h={'15em'}/>
          <VStack justifyContent={'center'}  id='overlay' display={hidden?'none':'flex'} pos="absolute"
        top="2em"
        right="2em" zIndex={9} bg='rgba(52, 52, 52, 0.8)' w={'11em'} h={'11em'}>
            <Text color={'white'} fontWeight={'normal'} 
            w={'8em'} textAlign={'center'} justifyContent={'center'} fontSize='small'
            >{role}</Text>
            <Text color={'white'} fontWeight={'bold'} 
            w={'8em'} textAlign={'center'} fontSize='medium'
            >{name}</Text>
        </VStack>
        
    </Box>
  )
}

export default BoardCard