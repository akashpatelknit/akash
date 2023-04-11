import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box
      minH={'10vh'}
      width={'90vw'}
      margin={'auto'}
      borderTopRadius={'2rem'}
      boxShadow="rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 20px"
      mt={['2rem', '']}
    >
      <Stack 
      direction={['column','row']}
      width={'full'}
      margin={'auto'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      gap={['','6rem']}
      fontSize={'1.3rem'}
      mb={'1rem'}
      padding={'1rem'}
      color={'#8D8D8D'}
      fontWeight={'500'}
      >
        <Link  to='/'>Home</Link>
        <Link to='/courses'>Projects</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/about'>About</Link>
        
      </Stack>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'center']} width="full">
          <Heading children="All Rights Reserved" />
          <Heading fontFamily={'body'} size="sm" children="@Akash Patel" />
        </VStack>

        <HStack spacing={['2', '10']} justifyContent="center" fontSize="50">
          <Box
            padding={'2'}
            bg="#F3F4F6"
            borderRadius={'2rem'}
            minW={'200'}
            mr={['', '17rem']}
          >
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
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
