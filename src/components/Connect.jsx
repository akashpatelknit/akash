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
  const [loading, setLoading] = useState(false);
  const form = useRef();
  const nevigate = useNavigate();
  const sendEmail = e => {
    e.preventDefault();
    setLoading(true);
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
          setLoading(false);
          setEmail('');
          setMessage('');
          setName('');
          nevigate('/');
        },
        error => {
          setDisplay(error);
        }
      );
  };
  return (
    <>
      <div className="container">
        <Stack
          direction={['column', 'row']}
          w={['90%', '70%']}
          m={'auto'}
          mt={'2rem'}
          gap={'1rem'}
        >
          <VStack
            alignItems={'center'}
            width={['100%', '50%']}
            borderRadius={'1rem'}
            borderTopLeftRadius={['0', '0']}
            textAlign={'start'}
          >
            <Box p={4}>
              <Heading as="h1" size="xl" mb={6} fontFamily={'Iceland'}>
                Work Experience
              </Heading>
              <hr></hr>

              <VStack align="start" spacing={6} mt={'.5rem'}>
                <Box>
                  <Heading as="h2" size="lg" mb={2} fontFamily={'Iceland'}>
                    Backend Developer
                  </Heading>
                  <Text mb={2}>Onthemove | January 2023 - Present</Text>
                  <Text color="gray.500" fontSize={['lg', 'xl']}>
                    I have done internship at onthemove as a backend developer,
                    utilizing JavaScript, NodeJS, and ExpressJS. In my role, I
                    am responsible for implementing new modules into the website
                    and resolving any bugs that arise. I actively contribute to
                    enhancing the functionality and stability of the platform.
                    It is a rewarding experience to be part of the team and make
                    valuable contributions to the company's success.
                  </Text>
                </Box>
              </VStack>
            </Box>
          </VStack>

          <VStack
            alignItems={'flex-start'}
            width={['100%', '50%']}
            margin={'auto'}
            borderRadius={'1rem'}
            borderTopLeftRadius={['0', '0']}
          >
            <Box p={4} width={'100%'}>
              <Heading children="Contact" fontFamily={'Iceland'} />
              <HStack width={'100%'}>
                <Stack spacing={3} w={'100%'} padding={'6'}>
                  <form ref={form}>
                    <Box width={'100%'}>
                      <FormLabel htmlFor="name" children="Name" />
                      <Input
                        required
                        id="name"
                        width={'100%'}
                        value={name}
                        name="name"
                        onChange={e => setName(e.target.value)}
                        placeholder="Abc"
                        type={'text'}
                        focusBorderColor="yellow.500"
                      />
                    </Box>

                    <Box my={'4'} width={'100%'}>
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
                      {loading ? 'Sending...' : 'Send Mail'}
                    </Button>
                  </form>
                </Stack>
              </HStack>
            </Box>
          </VStack>
        </Stack>
    
      </div>
    </>
  );
};

export default Connect;
