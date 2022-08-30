import { Box } from '@chakra-ui/react'
import React from 'react'
import ProductPageCard from '../components/templates/products/ProductPageCard'
import workimg from '../assets/images/pages/workpage.png';

const EmployeePage = () => {
  return (
    <Box bg={'#F0F4F7'}>
    <ProductPageCard 
    heading={'EMPLOYEE BENEFITS'}
    img={workimg}
    details='These custom design benefits programs will help alleviate the costs of health, drug and dental care services. It is important for a business to have a benefit plan that meets the needs of their employees whilst considering what program is most suitable and practical for the company.'
    />
    </Box>
  )
}

export default EmployeePage