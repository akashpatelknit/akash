import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import {
  HStack,
  VStack,
  Stack,
  Input,
  Box,
  FormLabel,
  Button,
  Textarea,
  Heading,
} from '@chakra-ui/react';
const Connect = ({ flag }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [display, setDisplay] = useState('');
  const [loading ,setLoading]=useState(false)
  const form = useRef();
  const nevigate = useNavigate();
  const sendEmail = e => {
    e.preventDefault();
    setLoading(true)
    emailjs
      .sendForm(
        'service_ykgugju',
        'template_g2d9rg5',
        form.current,
        'S293160B7dAsEJ9hc'
      )
      .then(
        result => {
          setDisplay('Your message has been sended successfully');
          nevigate('/');
        },
        error => {
          setDisplay(error);
        }
      );
  };
  return (
    <>
      <Stack
        direction={['column', 'row']}
        w={'full'}
        m={'auto'}
       justifyContent={'center'}
       alignItems={'center'}
        height={'80vh'}
      >
        
        <VStack
          alignItems={'center'}
          width={'full'}
          borderRadius={'1rem'}
          borderTopLeftRadius={['0', '0']}
        >
          <Heading children="Contact" padding={'2'} />
          <HStack
            borderRadius={'1rem'}
            borderTopLeftRadius={['', '0']}
            // boxShadow="rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px"
          >
            <Stack
              spacing={3}
              // border={'1px'}
              w={['300px', '650px']}
              padding={'6'}
            >
              <form ref={form}>
                <Box>
                  <FormLabel htmlFor="name" children="Name" />
                  <Input
                    required
                    id="name"
                    value={name}
                    name="name"
                    onChange={e => setName(e.target.value)}
                    placeholder="Abc"
                    type={'text'}
                    focusBorderColor="yellow.500"
                  />
                </Box>

                <Box my={'4'}>
                  <FormLabel htmlFor="email" children="Email Address" />
                  <Input
                    required
                    id="email"
                    value={email}
                    name="email"
                    onChange={e => setEmail(e.target.value)}
                    placeholder="abc@gmail.com"
                    type={'email'}
                    focusBorderColor="yellow.500"
                  />
                </Box>

                <Box my={'4'}>
                  <FormLabel htmlFor="message" children="Message" />
                  <Textarea
                    required
                    id="message"
                    name="message"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="Your Message...."
                    focusBorderColor="yellow.500"
                  />
                </Box>

                <Button
                  maxW={'100'}
                  my="4"
                  colorScheme={'linkedin'}
                  type="submit"
                  onClick={sendEmail}
                >
                  {loading?"Sending...":"Send Mail"}
                </Button>
                <text>{display}</text>
              </form>
            </Stack>
          </HStack>
        </VStack>
      </Stack>
    </>
  );
};

export default Connect;
