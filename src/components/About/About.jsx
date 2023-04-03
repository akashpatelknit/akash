import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

// import { Link } from 'react-router-dom';

const Founder = () => (
  <Stack height={'100vh'} direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
    <VStack>
      <Avatar
        src="https://avatars.githubusercontent.com/u/86844027?s=400&u=8ce2530eb94b6f75ba6725e80f94194e3960dcec&v=4"
        boxSize={['40', '48']}
      />
      <Text children="Full Stack Developer" opacity={0.7} />
    </VStack>

    <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
      <Heading children="Akash Patel" size={['md', 'xl']} />
      <Text
        textAlign={['center', 'left']}
        children={`Hi, I am a full-stack developer and a teacher.
      Our mission is to provide quality content at reasonable price.`}
      />
    </VStack>
  </Stack>
);

const About = () => {
  return (
    <Container
      maxW={'container.lg'}
      padding="6"
      boxShadow={'lg'}
      marginTop={'2rem'}
    >
      <Heading children="About Us" textAlign={['center', 'left']} />
      <Founder />
      <Stack m="" direction={['column', 'row']} alignItems="center">
       

      </Stack>
    </Container>
  );
};

export default About;
