import React from 'react';
import {
  Box,
  Button,
  Heading,
  HStack,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react';
import './home.css';
import { Link } from 'react-router-dom';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import CourseCard from '../Card/CourseCard';
import Contact from '../Contact/Contact';

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems={['center', 'baseline']}
          spacing={['16', '7rem']}
          marginTop={['13rem','0rem']}
        >
          <VStack
            width={'full'}
            alignItems={['center', 'center']}
            spacing={['3', '4']}
            marginTop={['-10rem', '5rem']}
          >
            <Heading
              textAlign={'center'}
              children="Hi, I'am Akash Patel."
              size={['lg', '3xl']}
              marginBottom={'-4'}
            />
            <Heading
              textAlign={'center'}
              children=" I design, code and develope websites."
              size={['lg', '3xl']}
            />
            <Text
              fontSize={['lg', '2xl']}
              width={['', '700px']}
              textAlign={['center', 'center']}
              children="I'm a Full Stack Developer and Programmer who enjoys turning problems and opportunities into simple interface through design and code."
            />

            

            <Box padding={'2'} bg="#F3F4F6" borderRadius={'2rem'} minW={'200'}>
              <HStack className="brandsBanner" justifyContent={'space-evenly'}>
                <a href="/">
                  <AiFillGithub />
                </a>
                <a href="/">
                  <AiFillInstagram />
                </a>
                <a href="/">
                  <AiFillLinkedin />
                </a>
                <a href="/">
                  <AiFillInstagram />
                </a>
              </HStack>
            </Box>
            <Link to="/courses">
              <Button size={'lg'} colorScheme="yellow" padding={'2rem'}>
                Hire Me
              </Button>
            </Link>

           
          </VStack>
          
         
        </Stack>

         {/* project box **************************** */}

              <Stack
               margin={'4rem '}
              >
                <Heading
                 textAlign={'center'}
             
                 size={['lg', 'xl']}
                children='Projects'
                />
              </Stack>
              <Stack className="brandsBanner" width={'full'}  spacing={['10','16']}  direction={['column' ,'row']} flexWrap={'wrap'}
              alignItems={'center'}
              justifyContent={'center'}
              // marginLeft={['-2.5rem' ,'0']}
              // margin={'auto'}
              >
                <Link to='/courses' >
                   <CourseCard/>
                </Link>
                <Link to='/courses'>
                   <CourseCard/>
                </Link>
                <Link to='/courses'>
                   <CourseCard/>
                </Link>
                <Link to='/courses'>
                   <CourseCard/>
                </Link>
                
              </Stack>
              
         

        {/* what i do */}
        <Stack
          direction={['column','row']}
           width={['','7xl']}
           marginTop={'3rem'}
           gap={'5rem'}
          //  display={'block'}
          >
            <VStack
            alignItems={'flex-start'}
            width={['','7xl']}
            justifyContent={'center'}
            spacing={'5'}
            padding={'4'}
            borderRadius={'2rem'}
            >
              <Heading
               textAlign={['center', '']}
              children='Things I Do'
              />
              <Text 
              fontSize={'xl'}
              children='Design, strategy, management, creative direction, & development are my specialities, and I have had nearly a decade honing in my skills. In all my project, I find that efficient work - flows, excellent communication skills and a dose of self-discipline are key - a strong work ethic has driven my success in a myriad of specialties.'
              />
            </VStack>
            <VStack
           alignItems={'flex-start'}
            width={['','7xl']}
            bg="#F3F4F6"
             padding={'4'}
            borderRadius={'2rem'}
            spacing={'5'}
            >
              <Heading
              children='Skills'
              />
              <Text
                fontSize={'xl'}
              children='HTML / CSS / JS / React / Next.js / Node.js / Express.js / Tailwind CSS / MUI / TypeScript / Figma / Adobe XD'
              />
              <Button borderRadius={'1rem'} color='white' bgColor={'black'}>Download CV</Button>
            </VStack>
          </Stack>
       <Contact/>
      </div>
    </section>
  );
};

export default Home;
