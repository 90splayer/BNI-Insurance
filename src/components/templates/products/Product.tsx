import { Box, Button, Heading, HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import ProductCard from './ProductCard'
import { insight1 } from '../../data/Products';
import bonds from '../../data/products/bonds.png'
import carimg from '../../data//products/car.png';
import familyimg from '../../data/products/family.png';
import healthimg from '../../data/products/health.png';
import homeimg from '../../data/products/home.png';
import pensionimg from '../../data/products/pension.png';
import planimg from '../../data/products/plan.png';
import travelimg from '../../data/products/travel.png';
import workimg from '../../data/products/work.png';
import {house, family, car, plane, money, health, pension} from '../../svgs/home'
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <Box bg={'#F0F4F7'}>
        <VStack spacing={'2em'} pb={'1em'}>
            
            
          <VStack spacing={'0.5em'}>
            <HStack spacing={'4em'}>
            <Link to="houseinsurance"><ProductCard
                heading={'HOUSE INSURANCE'}
                img={homeimg}
                icon={house}
              /></Link>
             <Link to="familyinsurance"><ProductCard
                heading={'FAMILY INSURANCE'}
                img={familyimg}
                icon={family}
              /></Link>
              <Link to="businessinsurance"><ProductCard
                heading={'BUSINESS INSURANCE'}
                img={workimg}
                icon={money}
              /></Link>
            </HStack>
            <HStack spacing={'4em'}>
            <Link to="travelinsurance"><ProductCard
                heading={'TRAVEL INSURANCE'}
                img={travelimg}
                icon={plane}
              /></Link>
              <Link to="healthinsurance"><ProductCard
                heading={'HEALTH INSURANCE'}
                img={healthimg}
                icon={health}
              /></Link>
              <Link to="carinsurance"><ProductCard
                heading={'CAR INSURANCE'}
                img={carimg}
                icon={car}
              /></Link>
            </HStack>
            <HStack spacing={'4em'}>
            <Link to="employeeinsurance"><ProductCard
                heading={'EMPLOYEE BENEFITS'}
                img={planimg}
                icon={pension}
              /></Link>
              <Link to="pensioninsurance"><ProductCard
                heading={'LIFE AND PENSION'}
                img={pensionimg}
                icon={house}
              /></Link>
              <Link to="bondsinsurance"><ProductCard
                heading={'BONDS AND GUARANTEES'}
                img={bonds}
                icon={house}
              /></Link>
            </HStack>
          </VStack>
        </VStack>
    </Box>
  )
}

export default Product