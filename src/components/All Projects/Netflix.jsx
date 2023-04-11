import React from 'react';
import {
  Box,
  HStack,
  Heading,
  Stack,
  VStack,
  Text,
  Button,
} from '@chakra-ui/react';
import '../Home/home.css';
import { Image } from '@chakra-ui/react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import StackUsed from '../Card/StackUsed';
const image = [
  'https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg',
  'https://media.designrush.com/inspiration_images/134557/conversions/_1505427129_791_netflix.001-preview.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1J8p__I-P48ad35VVIQshwXEK2qvLmAhQpczV3sI4sg&s',
];

const Netflix = () => {
  return (
    <section className="home" >
      <div className="container">
        <Stack
         boxShadow="rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px"
           borderRadius={'1rem'}
          
        >
         
          
        
        <Stack
          direction={['column']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems={['center', 'baseline']}
          spacing={['16', '3rem']}
          borderRadius={'1rem'}
          marginTop={['13rem', '0rem']}
         
        >
          <VStack
            width={'full'}
            alignItems={['center', 'center']}
            spacing={['3', '10']}
            marginTop={['-10rem', '5rem']}
          >
            <Heading
              textAlign={'center'}
              children="Netfilx Clone"
              size={['lg', 'xl']}
              marginBottom={'-4'}
              color={'red'}
            />
            <Text
              fontSize={['lg', 'xl']}
              width={['', '700px']}
              textAlign={'center'}
              color={'#8D8D8D'}
              children="I'm a Full Stack Developer and Programmer who enjoys turning problems and opportunities into simple interface through design and code."
            />
            <Image
              src="https://i.pinimg.com/originals/25/ae/6c/25ae6c3bbc39e96c2948e863e6fe61c4.gif"
              objectFit={'cover'}
              borderRadius={'1rem'}
              boxSize={['248px', '200px']}
              borderRight={'1rem'}
              // margin={'auto'}
            />
            <a href="/#">project link</a>
          </VStack>
          <VStack
            width={'full'}
            alignItems={['center', 'center']}
            spacing={['3', '6']}
            marginTop={['-10rem', '5rem']}
          >
            <Heading
              textAlign={'center'}
              children="My Contibution"
              size={['lg', 'md']}
            />
            <Text
              fontSize={['lg', 'xl']}
              width={['', '700px']}
              textAlign={'center'}
              color={'#8D8D8D'}
              children="I'm a Full Stack Developer and Programmer who enjoys turning problems and opportunities into simple interface through design and code."
            />
            <HStack
            
            >
              <a href="/">
                <Button colorScheme="linkedin" minW={['30', '40']} mb={'2rem'}>
                  Live Link 
                </Button>
              </a>
              <a href="/">
                <Button colorScheme="linkedin" minW={['35', '40']} mb={'2rem'}>
                  GitHub 
                </Button>
              </a>
            </HStack>
          </VStack>
        </Stack>
        </Stack>
      </div>
      <Stack justifyContent={'center'} width={['', '4xl']} margin={'auto'}
      
      >
         <Heading
              textAlign={'center'}
              children="Outcomes"
              size={['lg', 'md']}
              
            />
        <ResponsiveMasonry columnsCountBreakPoints={{ 100: 1, 600: 2, 800: 2 }}>
          <Masonry gutter={'1rem'}>
            {image.map((item, i) => (
              <Box>
                <Image
                  borderRadius={'1rem'}
                  src={item}
                  width={'80%'}
                  margin={['2rem', '1rem']}
                />
              </Box>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </Stack>
      <Stack alignItems={'center'}
      justifyContent={'center'}

      >
       <StackUsed/>
      </Stack>
    </section>
  );
};

export default Netflix;
