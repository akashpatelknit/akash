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
import { GrShare } from 'react-icons/gr';
import { AiFillGithub } from 'react-icons/ai';
import Tech from '../../components/animations/TechStack/Tech';
const image = [
  'https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg',
  'https://media.designrush.com/inspiration_images/134557/conversions/_1505427129_791_netflix.001-preview.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1J8p__I-P48ad35VVIQshwXEK2qvLmAhQpczV3sI4sg&s',
];
const Lib = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems={['center', 'baseline']}
          spacing={['16', '3rem']}
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
              children="Mybrary"
              size={['lg', 'xl']}
              marginBottom={'-4'}
              color={'red'}
            />
            <Text
              fontSize={['lg', 'md']}
              width={['', '700px']}
              textAlign={'center'}
              children="A react based project for students to access the previous year exams and course related books. Students are able to login into website and upload and download materials.A MEARN application using a RESTful API.Utilized responsive design to ensure compatibility across all devices."
            />
            <Image
              src="https://cdn.dribbble.com/users/686119/screenshots/2435023/untitled.gif"
              objectFit={'cover'}
              borderRadius={'1rem'}
              boxSize={['248px', '200px']}
              borderRight={'1rem'}
              // margin={'auto'}
            />
            <a href="https://libb.vercel.app/" target='_blank' rel="noreferrer">https://libb.vercel.app/</a>
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
              children="I'm a Full Stack Developer and Programmer who enjoys turning problems and opportunities into simple interface through design and code."
            />
            <HStack>
              <a href="https://libb.vercel.app/" target='_blank' rel="noreferrer">
                <Button colorScheme="linkedin" minW={['40', '40']}>
                  Live Link <GrShare />
                </Button>
              </a>
              <a href="https://github.com/akashpatelknit/libb.git" target='_blank' rel="noreferrer">
                <Button colorScheme="linkedin" minW={['40', '40']}>
                  GitHub <AiFillGithub />
                </Button>
              </a>
            </HStack>
          </VStack>
          <VStack
            width={'full'}
            alignItems={['center', 'center']}
            spacing={['3', '6']}
            marginTop={['-10rem', '5rem']}
          >
            <Heading
              textAlign={'center'}
              children="Outcomes"
              size={['lg', 'md']}
            />
          </VStack>
        </Stack>
      </div>
      <Stack justifyContent={'center'} width={['', '4xl']} margin={'auto'}>
        {/* <ResponsiveMasonry columnsCountBreakPoints={{ 100: 1, 600: 2, 800: 2 }}>
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
        </ResponsiveMasonry> */}
      </Stack>
      {/* <Tech /> */}
    </section>
  );
};

export default Lib;
