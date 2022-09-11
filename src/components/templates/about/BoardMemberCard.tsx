import { Box, HStack, VStack, Image, Text } from '@chakra-ui/react'
import React, { FC, useState } from 'react'

type Props = {
  role: string;
  name: string;
  img: string;
  about: string;
};


const Board: FC<Props> = ({ role, name, img, about }) =>  {

  const [hidden, isHidden] = useState(false)

  return (
    <Box display={hidden?'none':'flex'} pos={'absolute'} bg='rgba(52, 52, 52, 0.8)' zIndex={9}>
      <HStack>
      <Image src={img} alt='boardimg' w={'40em'} h={'40em'}/>
        <VStack>
        <Text color={'white'} fontWeight={'normal'} 
            w={'8em'} textAlign={'center'} justifyContent={'center'} fontSize='small'
            >{role}</Text>
            <Text color={'white'} fontWeight={'bold'} 
            w={'8em'} textAlign={'center'} fontSize='medium'
            >{name}</Text>
            <Text>{about}</Text>
        </VStack>
     </HStack>
    </Box>
  )
}

export default Board