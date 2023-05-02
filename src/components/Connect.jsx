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
  Text,
  Heading,
} from '@chakra-ui/react';
const Connect = ({ flag }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [display, setDisplay] = useState('');
  const form = useRef();
  const nevigate = useNavigate();
  const sendEmail = e => {
    e.preventDefault();

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
        gap={'1rem'}
        //  zIndex={'-1'}
      >
        <VStack
          alignItems={'start'}
          width={'full'}
          borderRadius={'1rem'}
          borderTopLeftRadius={['0', '0']}
          boxShadow={'-2px 0 10px rgba(196, 175, 245, 0.5)'}
          textAlign={'start'}
        >
          <Box p={4}>
            <Heading as="h1" size="xl" mb={6}>
              Work Experience
            </Heading>
            <hr></hr>

            <VStack align="start" spacing={6} mt={'1rem'}>
              <Box>
                <Heading as="h2" size="lg" mb={2}>
                  Backend Developer
                </Heading>
                <Text color="gray.500" mb={2}>
                  Onthemove | January 2023 - Present
                </Text>
                <Text>
                  I am currently employed at onthemove as a backend developer,
                  utilizing JavaScript, NodeJS, and ExpressJS. In my role, I am
                  responsible for implementing new modules into the website and
                  resolving any bugs that arise. I actively contribute to
                  enhancing the functionality and stability of the platform. It
                  is a rewarding experience to be part of the team and make
                  valuable contributions to the company's success.
                </Text>
              </Box>
            </VStack>
          </Box>
        </VStack>

        <VStack
          alignItems={'flex-start'}
          width={'full'}
          borderRadius={'1rem'}
          borderTopLeftRadius={['0', '0']}
          // boxShadow="rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px"
          boxShadow={'-2px 0 10px rgba(196, 175, 245, 0.5)'}
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
                  Send Mail
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
