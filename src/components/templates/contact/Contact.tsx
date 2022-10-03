import { Box, HStack, VStack, Text, Input, Button,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText } from '@chakra-ui/react'
import React, { useState } from 'react'
import emailjs from 'emailjs-com'

 

const Contact = () => {
    const [fname, setFname] = useState('')
    const [mail, setMail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e:any) {
        e.preventDefault() // prevents the default behaviour of the form

        emailjs.sendForm('service_zjfyyqs', 'template_b78r6kd', 
        e.target, 'g2LcqesHc5RLfEpaO')
        .then((result) => {
              console.log(result.text);
          }, 
           (error) => {
              console.log(error.text);
           });
           setFname('');
           setMail('');
           setSubject('');
           setMessage('');
      }

   
    

  return (
    <Box bg={'#F0F4F7'} pt={'2em'}>
        <HStack align={'flex-start'} justify={'center'} spacing='5em' pb={'2em'} fontSize={'smaller'} fontWeight={'bold'}>
            <VStack align={'flex-start'} spacing='3em'>
                <VStack align={'flex-start'}>
                <Text>Contact Information</Text>
                <Box h={'0.1em'} w={{ base: '10em', md: '25em', lg:'30em' }} bg={'#003B79'}/>
                </VStack>
                <Text>For Enquiries: customercare@bniinsurancebrokers.com</Text>
                <Text>Telephone Number: (+234) 9135249000</Text>
                <Text>Address: No 168 Awolowo Road, Ikoyi, Lagos, Nigeria</Text>
            </VStack>
            <VStack as='form' align={'flex-start'} spacing='1.5em' onSubmit={sendEmail} >
                <VStack align={'flex-start'}>
                <Text>Contact Information</Text>
                <Box h={'0.1em'} w={'30em'} bg={'#003B79'}/>
                </VStack>
               
                <FormControl>
                     <FormLabel>Your Name</FormLabel>
                      <Input type='text' name='name' onChange={e => setFname(e.target.value)} value={fname} />
                    </FormControl>
                    <FormControl>
                     <FormLabel>Email address</FormLabel>
                      <Input type='email' name='email' value={mail} onChange={event => setMail(event.target.value)}/>
                    <FormHelperText>We'll never share your email.</FormHelperText>
                    </FormControl>
                    <FormControl>
                     <FormLabel>Subject</FormLabel>
                      <Input type='text' name='subject' value={subject} onChange={event => setSubject(event.target.value)}/>
                    </FormControl>
                    <FormControl>
                     <FormLabel>Message</FormLabel>
                      <Input type='text' w={'30em'} h={'10em'} name='message' value={message} onChange={event => setMessage(event.target.value)} />
                    </FormControl>
                <Button bg={'#003B79'} color={'white'} w={'6em'} h={'2em'} type='submit'>Send</Button>
            </VStack>
        </HStack>
    </Box>
  )
}

export default Contact