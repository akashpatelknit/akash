import { VStack, Heading, Box, HStack, Button } from '@chakra-ui/react';
import React from 'react';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import newCV from './newCV.pdf';
import './introduction.scss';
const Introduction = () => {
  return (
    <div className="intro">
      <VStack
        id="intro"
        alignItems={['center', 'center']}
        margin={'auto'}
        spacing={['7', '4']}
        marginTop={['5rem', '5rem']}
        fontSize={'3rem'}
        fontStyle={'bold'}
      >
        <Heading
          textAlign={'center'}
          children="Hi, I'm Akash Patel."
          size={['lg', '3xl']}
          marginBottom={['-1.8rem', '-3.5']}
          data-aos="fade-left"
          fontFamily={'Iceland'}
        />
        <Heading
          textAlign={'center'}
          fontFamily={'Iceland'}
          children=" I design, code, and develop websites."
          size={['lg', '3xl']}
          data-aos="fade-right"
        />
        <h3 className="description_20">
          I'm a full-stack developer and programmer who enjoys turning problems
          and opportunities into simple interfaces through design and code.
        </h3>

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
          <Link to={newCV} target="_blank">
            <Button
              size={'lg'}
              colorScheme={'linkedin'}
              borderRadius={'1rem'}
              minW={['0', '40']}
            >
              Resume
            </Button>
          </Link>
        </HStack>
      </VStack>
    </div>
  );
};

export default Introduction;
