import React, { useEffect } from 'react';
import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import './home.css';
import { Link } from 'react-router-dom';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import CourseCard from '../Card/CourseCard';
import Contact from '../Contact/Contact';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Marquee from 'react-fast-marquee';
import { GoPrimitiveDot } from 'react-icons/go';
import { AiOutlineArrowRight,AiFillHtml5 } from 'react-icons/ai';
import Tech from '../animations/TechStack/Tech';
import { IoLogoCss3 } from 'react-icons/io';

import { DiReact } from 'react-icons/di';

const Home = () => {
const tech=[<AiFillHtml5/>,<IoLogoCss3/>,<DiReact/>]
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
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
          marginTop={'-3rem'}
        >
          <Box borderRadius={'3rem'}>
            <Link>
              <Marquee speed="100" gradientColor="none" width="450px">
                <GoPrimitiveDot fontSize={'2rem'} color="red" width={'10px'} />
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
          marginTop={['13rem', '0rem']}
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
              color={'#8D8D8D'}
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
            <HStack>
              <Link to="/courses">
                <Button
                  size={'lg'}
                  padding={'1rem'}
                  colorScheme={'linkedin'}
                  // color={'white'}
                  borderRadius={'1rem'}
                  // width={['', '150px']}
                   minW={['40', '40']}
                >
                  Hire Me
                </Button>
              </Link>
              <Link to="/courses">
                <Button
                  size={'lg'}
                  padding={'1rem'}
                  colorScheme={'linkedin'}
                  // color={'white'}
                  borderRadius={'1rem'}
                   minW={['35', '40']}
                >
                  Download CV
                </Button>
              </Link>
            </HStack>
          </VStack>
        </Stack>

        {/* project box **************************** */}

        <Stack margin={'4rem '}>
          
          <Heading
            textAlign={'center'}
            size={['lg', 'xl']}
            children="Projects"
          />
        </Stack>
        <Grid
          templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}
          gap={6}
          // marginLeft={['3rem', '3rem']}
          width={['245px','1200px']}
       
        margin={'auto'}
          
        >
          <GridItem>
            <Link to="/otm">
              <CourseCard src='https://onix-systems.com/_next/image?url=https%3A%2F%2Fcdn.onix-systems.com%2Fstatic%2Fimages%2FPages%2FFitnessApp%2Frunning_woman.gif&w=640&q=75' title='Onthemove' colour='black' link='/otm' />
            </Link>
          </GridItem>
          <GridItem>
            <Link to="/netflix">
             <CourseCard src='https://i.pinimg.com/originals/25/ae/6c/25ae6c3bbc39e96c2948e863e6fe61c4.gif' title='Netflix Clone' color='red'
              link='/netflix'    />
             
            </Link>
          </GridItem>
          <GridItem >
            <Link to="/weather">
               <CourseCard src='https://i.pinimg.com/originals/79/35/fd/7935fdf1fe2c5dd8205de03a214befb0.gif' title='Weather App'color=''
               link='/weather'
                />
            </Link>
          </GridItem>
          <GridItem>
            <Link to="/lib">
              <Link to="/courses">
              <CourseCard src='https://cdn.dribbble.com/users/686119/screenshots/2435023/untitled.gif' title='My Library' colour=''/>
            </Link>
            </Link>
          </GridItem>
          <GridItem
          
          >
            <Link to="/courses">
            <Button
              size={'lg'}
              padding={'1rem'}
              colorScheme='linkedin'
              borderRadius={'1rem'}
              mt={['','4rem']}
               minW={['30', '30']}
            >
              More <AiOutlineArrowRight />
            </Button>
          </Link>
          </GridItem>

         
        </Grid>

        {/* what i do */}
        <Stack
          direction={['column', 'row']}
          marginTop={['1rem', '7rem']}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <VStack
            alignItems={'flex-start'}
            width={['', '7xl']}
            justifyContent={'center'}
            spacing={'5'}
            borderRadius={'2rem'}
            marginLeft={['', '3rem']}
          >
            <Heading textAlign={['center', '']} children="Things I Do" />
            <Text
              fontSize={'xl'}
              color={'#8D8D8D'}
              children="Design, strategy, management, creative direction, & development are my specialities, and I have had nearly a decade honing in my skills. In all my project, I find that efficient work - flows, excellent communication skills and a dose of self-discipline are key - a strong work ethic has driven my success in a myriad of specialties."
            />
          </VStack>
          <VStack
            alignItems={'center'}
            width={['', '7xl']}
            borderRadius={'2rem'}
          >
            <Stack
              bg={['', '#F3F4F6']}
              borderRadius={'20%'}
              height={['50vh']}
              boxShadow="rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px"
              data-aos="zoom-in"
            >
              <Tech />
            </Stack>
          </VStack>
        </Stack>
        <Stack marginTop={'5rem'}>
          <Contact />
          {/* <Testimonial/> */}
        </Stack>
      </div>
      {/* <Tech/> */}
    </section>
  );
};

export default Home;
