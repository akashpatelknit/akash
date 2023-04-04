import React, { useEffect, useState } from 'react';
import {VStack,Image, Box} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import  p4 from '../../assets/images/p4.png';
import Aos from 'aos';
import 'aos/dist/aos.css'
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

   useEffect(()=>{
   

   Aos.init({duration:1000});
   },[]);
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Box padding={'4'} bg="#F3F4F6" borderRadius={'1.5rem'} >
        <Image data-aos="fade-up" src={p4}   borderRadius={'1.5rem'} />
      </Box>
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
      gap={'2rem'}
      >
      <Link to='/netflix'>
      <Course/>
      </Link>
      <Link to='/weather'>
      <Course/>
      </Link>
      <Link to='/lib'>
      <Course/>
      </Link>
      <Link to='/netflix'>
      <Course/>
      </Link>
     
      
      
      </Stack>
    </Container>
  );
};

export default Courses;
