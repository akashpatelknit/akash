import React, { useState } from 'react';
import {VStack,Image, Box} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
  loading,
}) => {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Box padding={'4'} bg="#F3F4F6" borderRadius={'1.5rem'} >
        <Image src={imageSrc} boxSize="60" objectFit={'contain'} borderRadius={'1.5rem'} />
         <Heading
        textAlign={['center', 'left']}
        maxW="200px"
        size={'sm'}
        fontFamily={'sans-serif'}
        noOfLines={3}
        children='Project1'
        margin={'3'}
      />
       <Stack direction={['column', 'row']} alignItems="center">
        <Link to={`/course/${id}`}>
          <Button colorScheme={'yellow'}>Preview</Button>
        </Link>
        
      </Stack>
      </Box>
      
     
      
     
      {/* <Heading
        size="xs"
        children={`Views - ${views}`}
        textTransform="uppercase"
      /> */}
     
    </VStack>
  );
};
const Courses = () => {
  const categories = [
    'All',
    'React',
    'API',
    'MERN',
  ];
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  return (
    <Container minH={'95vh'} maxW={'container.lg'} paddingY={'8'}>
      <Heading children="All Projects" m={'8'} textAlign={'center'} />
      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search a project"
        type="text"
        // focusBorderColor='yellow.200'
      />
      <HStack
        overflowX={'auto'}
        padding={'8'}
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {categories.map((item, index) => (
          <Button
            key={index}
           
            minW={'35'}
            onClick={e => setCategory(e.target.value)}
          >
            <Text children={item} textAlign={'center'} />
          </Button>
        ))}
      </HStack>
      <Stack
      direction={['column','row']}
      flexWrap={'wrap'}
      justifyContent={['center','center']}
      alignItems={['center','flex-start']}
      >
      
      <Course/>
      <Course/>
      <Course/>
      <Course/>
      <Course/>
      <Course/>
      <Course/>
      </Stack>
    </Container>
  );
};

export default Courses;
