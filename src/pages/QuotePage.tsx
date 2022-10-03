import { Box, Button, FormControl, FormLabel, HStack, Input, Select, VStack, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import quote from '../assets/quote.png'
import ProductPageCard from '../components/templates/products/ProductPageCard'
import alert from '../assets/alert.png'
import emailjs from 'emailjs-com'

const QuotePage = () => {

    const [service, setService] = useState('')
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [subService, setSubService] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e:any) {
        e.preventDefault() // prevents the default behaviour of the form

        emailjs.sendForm('service_zjfyyqs', 'template_gmt5m0h', 
        e.target, 'g2LcqesHc5RLfEpaO')
        .then((result) => {
              console.log(result.text);
          }, 
           (error) => {
              console.log(error.text);
           });
           setService('');
           setMail('');
           setName('');
           setMessage('');
           setSubService('');
      }

  return (
    <Box as='form' onSubmit={sendEmail}>
        <ProductPageCard 
    heading={'Get a Quote'}
    img={quote}
    details="Our wide range of products are affordable."
    />

    <HStack mx={'3em'} mt={'3em'} mb={'1.5em'} spacing={'3em'}>
        <Box maxW={'50em'}>
            <HStack>
                <VStack spacing={'1.5em'}>
                <FormControl w={'25em'}>
                <FormLabel>Services</FormLabel>
                 <Select placeholder='Select Service' name='service' onChange={e => setService(e.target.value)} value={service}>
                 <option>Motor Insurance</option>
                  <option>Health Insurance</option>
                  <option>Business Insurance</option>
                  <option>House Insurance</option>
                  <option>Family</option>
                </Select>
                </FormControl> 
                <FormControl w={'25em'}>
                  <Input type='text' placeholder='Full Name' name='name' onChange={e => setName(e.target.value)} value={name} />
                </FormControl> 
                </VStack>
                <VStack spacing={'1.5em'}>
                <FormControl w={'25em'}>
                <FormLabel>Sub-Services</FormLabel>
                 <Select placeholder='Select Sub-Service' name='sub_service' onChange={e => setSubService(e.target.value)} value={subService}>
                 <option>Individual</option>
                  <option>Organization</option>
                </Select>
                </FormControl> 
                <FormControl w={'25em'}>
                  <Input type='email'  placeholder='Email Address' name='mail' onChange={e => setMail(e.target.value)} value={mail}/>
                </FormControl> 
                </VStack>
            </HStack>
            <FormControl w={'50em'} mt={'1.5em'}>
                  <Input type='text'  placeholder='Message' h={'10em'} name='message' onChange={e => setMessage(e.target.value)} value={message}/>
            </FormControl> 
        </Box>
        <Box p={'3em'} border={'2px'} borderColor={'aliceblue'}>
         <Image src={alert} />
          <Text w={'7em'} fontSize={'x-large'} color={'#003B79'}> We'll get in touch with you</Text>  <br/> <Text w={'8em'} mt={'-1.2em'} >It would take two business days</Text>
        </Box>
    </HStack>
    <Button bg={'#003B79'} color={'white'} w={'6em'} h={'2em'} type='submit' mb={'3em'} ml={'3em'} >Submit</Button>
    </Box>
  )
}

export default QuotePage