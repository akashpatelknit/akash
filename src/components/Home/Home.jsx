import React,{useEffect} from 'react';
import {
  Box,
  Button,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
  keyframes
} from '@chakra-ui/react';
import './home.css';
import { Link } from 'react-router-dom';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import CourseCard from '../Card/CourseCard';
import Contact from '../Contact/Contact';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Textt from '../animations/Text/Text';
import Marquee from 'react-fast-marquee';
import {GoPrimitiveDot} from 'react-icons/go'
import { Fade, Slide } from "react-awesome-reveal";
import Tech from '../animations/TechStack/Tech';
const Home = () => {
   useEffect(()=>{
   

   Aos.init({duration:1000});
   },[]);
  return (
    <section className="home">
      <div className="container">
        <Stack
          //  bg={'black'}
          bg="#F3F4F6"
          padding={'.5rem'}
          width={'450px'}
          margin={'auto'}
          borderRadius={'3rem'}
          display={['none', 'inherit']}
          marginTop={'-1rem'}
        >
          <Box
            borderRadius={'3rem'}
          >
            <Link>
              <Marquee speed="100" gradientColor="none" width='450px'>
              <GoPrimitiveDot
              fontSize={'2rem'}
              color='red'
              width={'10px'}
              />
              <Text
                textAlign={'center'}
                children=" AVALIABLE FOR FREELANCE WORK"
                size={['lg', 'xl']}
                color={'black'}
              />
            </Marquee>
            </Link>

          </Box>
        </Stack>
        <Stack
          direction={['column']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems={['center', 'baseline']}
          spacing={['16', '7rem']}
          marginTop={['13rem','0rem']}
        >

          {/* <Textt/> */}
          <VStack
            width={'full'}
            alignItems={['center', 'center']}
            spacing={['7', '4']}
            marginTop={['-10rem', '5rem']}
          >
            <Heading
              
              textAlign={'center'}
              children="Hi, I'm Akash Patel."
              size={['lg', '3xl']}
              marginBottom={'-4'}
              data-aos="fade-left"
              
            />
            <Heading
              textAlign={'center'}
              children=" I design, code and develope websites."
              size={['lg', '3xl']}
              data-aos="fade-right"
            />
            <Text
              fontSize={['lg', '2xl']}
              width={['', '700px']}
              textAlign={['center', 'center']}
              children="I'm a Full Stack Developer and Programmer who enjoys turning problems and opportunities into simple interface through design and code."
            />

            

            <Box padding={'2'} bg="#F3F4F6" borderRadius={'2rem'} minW={'200'}
            
            >
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
            <HStack
            
            >
               <Link to="/courses">
              <Button size={'lg'} colorScheme="yellow" padding={'1rem'} bgColor={'black'} color={'white'} borderRadius={'1rem'} width={['','150px']}>
                Hire Me
              </Button>
            </Link>
             <Link to="/courses">
              <Button size={'lg'} colorScheme="yellow" padding={'1rem'} bgColor={'black'} color={'white'}borderRadius={'1rem'} >
                Download CV
              </Button>
            </Link>
            </HStack>
           

           
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
              <Stack
              direction={'column'}
               alignItems={'center'}
              justifyContent={'center'}
              >
                 <Stack className="brandsBanner" width={'full'}  spacing={['10','']}  direction={['column' ,'row']} flexWrap={'wrap'}
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
                <Link to="/courses">
              <Button size={'lg'} colorScheme="black" padding={'1rem'}>
                More 
              </Button>
            </Link>

              </Stack>
             
              
         

        {/* what i do */}
        <Stack
          direction={['column','row']}
          //  width={['','7xl']}
          marginTop={'7rem'}
          // gap={'5rem'}
          alignItems={'center'}
          justifyContent={'center'}
          
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
           alignItems={'center'}
            width={['','7xl']}
            // bg="#F3F4F6"
             padding={''}
            borderRadius={'2rem'}
            spacing={''}
            >
              {/* <Heading
              children='Skills'
               color={'black'}
              /> */}
              {/* <Text
                fontSize={'xl'}
                color={'black'}
              children='HTML / CSS / JS / React / Next.js / Node.js / Express.js / Tailwind CSS / MUI / TypeScript / Figma / Adobe XD'
              /> */}
               <Tech/>
              {/* <Button borderRadius={'1rem'} color='white' bgColor={'black'}>Download CV</Button> */}
            </VStack>
          </Stack>
       <Contact/>
      </div>
       {/* <Tech/> */}
    </section>
  );
};

export default Home;
