import React, { useState } from 'react';
import { MenuItems } from '../../data/drop';
import { Link } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <Box bg={'yellow'} pos='absolute' top={'18px'}>
        Yo
    </Box>
  );
}

export default Dropdown;
