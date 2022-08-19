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

const Product = () => {
  return (
    <Box bg={'#F0F4F7'}>
        <VStack spacing={'2em'} pb={'1em'}>
            <Heading fontWeight={'extrabold'} color={'#003B79'}>Products</Heading>
            
          <VStack spacing={'0.5em'}>
            <HStack spacing={'4em'}>
              <ProductCard
                heading={'HOUSE INSURANCE'}
                img={homeimg}
                icon={house}
              />
              <ProductCard
                heading={'FAMILY INSURANCE'}
                img={familyimg}
                icon={family}
              />
              <ProductCard
                heading={'BUSINESS INSURANCE'}
                img={workimg}
                icon={money}
              />
            </HStack>
            <HStack spacing={'4em'}>
              <ProductCard
                heading={'TRAVEL INSURANCE'}
                img={travelimg}
                icon={plane}
              />
              <ProductCard
                heading={'HEALTH INSURANCE'}
                img={healthimg}
                icon={health}
              />
              <ProductCard
                heading={'CAR INSURANCE'}
                img={carimg}
                icon={car}
              />
            </HStack>
            <HStack spacing={'4em'}>
              <ProductCard
                heading={'EMPLOYEE BENEFITS'}
                img={planimg}
                icon={pension}
              />
              <ProductCard
                heading={'LIFE AND PENSION'}
                img={pensionimg}
                icon={house}
              />
              <ProductCard
                heading={'BONDS AND GUARANTEES'}
                img={bonds}
                icon={house}
              />
            </HStack>
          </VStack>
        </VStack>
    </Box>
  )
}

export default Product