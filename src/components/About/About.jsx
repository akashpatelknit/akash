import {
  Avatar,
  Container,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const Founder = () => (
  <Stack
    direction={['column']}
    spacing={['4', '16']}
    padding={'8'}
    height={'80vh'}
  >
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
        children="I'm a Full Stack Developer and Programmer who enjoys turning problems and opportunities into simple interface through design and code....."
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
      width={['', '2xl']}
      m={'auto'}
    >
      <Heading children="About Me" textAlign={['center', 'center']} />
      <Founder />
      <Stack
        m=""
        direction={['column', 'row']}
        alignItems="center"
      ></Stack>
    </Container>
  );
};

export default About;
