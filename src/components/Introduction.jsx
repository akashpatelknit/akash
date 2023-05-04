import { VStack, Heading, Text, Box, HStack, Button } from '@chakra-ui/react';
import React from 'react';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
const Introduction = () => {
  return (
    <>
      <VStack
        // width={['', '4xl']}
        alignItems={['center', 'center']}
        margin={'auto'}
        spacing={['7', '4']}
        marginTop={['3rem', '5rem']}
        fontSize={'3rem'}
        fontStyle={'bold'}
      >
        {/* <Typewriter
          onInit={typewriter => {
            typewriter
              .typeString("<strong><span >Hi, I'm </span></strong>")
              .typeString("<strong><span  style='color: #27ae60; '>Akash Patel.</span></strong>")
              .start();
          }}
        />
        <Typewriter
          onInit={typewriter => {
            typewriter
              .pauseFor(3000)
              .typeString("<strong><span > I design, code, and develop websites.</span></strong>")
              
              .start();
          }}
        /> */}
        <Heading
          textAlign={'center'}
          children="Hi, I'm Akash Patel."
          size={['lg', '3xl']}
          marginBottom={['-1.8rem', '-3.5']}
          data-aos="fade-left"
        />
        <Heading
          textAlign={'center'}
          children=" I design, code, and develop websites."
          size={['lg', '3xl']}
          data-aos="fade-right"
        />
        <Text
          fontSize={['lg', '2xl']}
          width={['', '700px']}
          textAlign={['center', 'center']}
          color={'#8D8D8D'}
          children="I'm a full-stack developer and programmer who enjoys turning problems and opportunities into simple interfaces through design and code."
        />

        <Box padding={'2'} bg="#F3F4F6" borderRadius={'2rem'}>
          <HStack className="brandsBanner" justifyContent={'space-evenly'}>
            <a href="https://github.com/akashpatelknit" target="">
              <AiFillGithub />
            </a>
            <a href="https://www.instagram.com/akashknitian_/">
              <AiFillInstagram />
            </a>
            <a href="https://www.linkedin.com/in/akash-patel-9330aa201/">
              <AiFillLinkedin />
            </a>
            <a href="https://twitter.com/AkashPa61475055">
              <AiFillTwitterCircle />
            </a>
          </HStack>
        </Box>

        <HStack>
          <Link to="/contact">
            <Button
              size={'lg'}
              // padding={'1rem'}
              colorScheme={'linkedin'}
              borderRadius={'1rem'}
              minW={['0', '40']}
            >
              Hire Me
            </Button>
          </Link>
          <Link
            to={
              'https://drive.google.com/file/d/1HJnWjKn2c2RgCIic4EK_YzdkNau8fV3K/view?usp=share_link'
            }
            target="_blank"
          >
            <Button
              size={'lg'}
              colorScheme={'linkedin'}
              borderRadius={'1rem'}
              minW={['0', '40']}
            >
              {' '}
              Download CV
            </Button>
          </Link>
        </HStack>
      </VStack>
    </>
  );
};

export default Introduction;
