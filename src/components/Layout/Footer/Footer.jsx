import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin,AiFillTwitterCircle } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box  minH={'10vh'}
    width={'99vw'}
    margin={'auto'}
 
    mt={['2rem','']}
    >
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'center']} width="full">
          <Heading children="All Rights Reserved"  />
          <Heading
            fontFamily={'body'}
            size="sm"
            children="@Akash Patel"
            
          />
        </VStack>

        <HStack
          spacing={['2', '10']}
          justifyContent="center"
          fontSize="50"
        >
           <Box padding={'2'} bg="#F3F4F6" borderRadius={'2rem'} minW={'200'}
           mr={['','17rem']}
           >
              <HStack className="brandsBanner" justifyContent={'space-evenly'}
             
              >
                <a href="https://github.com/akashpatelknit" target=''>
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
