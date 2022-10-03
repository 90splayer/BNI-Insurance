import { Box, Text, List, ListItem } from '@chakra-ui/react'
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
    <Box px={{ base: '8em', md: '12em', lg:'18em'}} py={{base: '1em', md: '1em', lg:'1.5em'}}>
    <Text pb={{base: '1em', md: '1em', lg:'1em'}}>Our team of experts in Employee Benefits advises clients on the coverage of mandatory policies such as Group Life, Disability, and Health Insurance both locally and internationally. We analyze our clients’ policies to ensure that adequate levels of cover are in place, and we develop tailor-made policies for clients operating in different industries. With an optimal employee, welfare comes optimal productivity and output.</Text>
    <Text pb={{base: '0.5em', md: '0.5em', lg:'0.5em'}} color='#003B79'>BNI Brokers Employee Benefits Plans touch the key areas such as:</Text>
    <List>
      <ListItem pb={{base: '0.5em', md: '0.5em', lg:'0.5em'}}>•	Retirement Plans</ListItem>
      <ListItem pb={{base: '0.5em', md: '0.5em', lg:'0.5em'}}>•	Pensions Scheme Design</ListItem>
      <ListItem pb={{base: '0.5em', md: '0.5em', lg:'0.5em'}}>•	Private Medical Insurance</ListItem>
      <ListItem pb={{base: '0.5em', md: '0.5em', lg:'0.5em'}}>•	Health Cover</ListItem>
      <ListItem pb={{base: '0.5em', md: '0.5em', lg:'0.5em'}}>•	Life Insurance</ListItem>
      <ListItem pb={{base: '0.5em', md: '0.5em', lg:'0.5em'}}>•	Share Schemes</ListItem>
    </List>
    </Box>
    </Box>
  )
}

export default EmployeePage