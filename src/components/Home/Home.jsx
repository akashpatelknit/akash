import React, { useEffect } from 'react';
import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
  FormLabel,
  Textarea,
} from '@chakra-ui/react';
import './home.css';
import { Link } from 'react-router-dom';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import CourseCard from '../Card/CourseCard';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Marquee from 'react-fast-marquee';
import { GoPrimitiveDot } from 'react-icons/go';
import { AiOutlineArrowRight, AiFillTwitterCircle } from 'react-icons/ai';
import Tech from '../animations/TechStack/Tech';
import project from './data';
// import Testimonial from '../Testomonial/Testimonial'
// import Contact from '../Contact/Contact';
const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className="home">
      <div className="container">
        <Stack
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
        <Stack direction={['column']} height="100%" spacing={['16', '6rem']}>
          <VStack
            width={'full'}
            alignItems={['center', 'center']}
            spacing={['7', '4']}
            marginTop={['3rem', '5rem']}
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
              <Link to="/courses">
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
              <Link to="/courses">
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

          {/**************** * PROJECTS ********************************/}
          <Stack textAlign={'center'}>
            <Heading size={['lg', 'xl']} children="Projects" />
            <Grid
              templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}
              padding={'2'}
              gap={['10', '']}
            >
              {project.map((item, index) => {
                return (
                  <GridItem>
                    <CourseCard
                      src={item.src}
                      title={item.title}
                      colour={item.colour}
                      link={item.link}
                    />
                  </GridItem>
                );
              })}
              <GridItem>
                <Link to="/courses">
                  <Button
                    size={'lg'}
                    padding={'1rem'}
                    colorScheme="linkedin"
                    borderRadius={'1rem'}
                    mt={['', '4rem']}
                    minW={['30', '30']}
                  >
                    More <AiOutlineArrowRight />
                  </Button>
                </Link>
              </GridItem>
            </Grid>
          </Stack>

          {/***********************************************************/}

          {/***************************THINGS I DO***************************/}
          <Stack
            direction={['column', 'row']}
            w={'full'}
            m={'auto'}
            gap={'1rem'}
          >
            <VStack
              alignItems={'flex-start'}
              width={'full'}
              justifyContent={'center'}
              borderRadius={'2rem'}
              borderTopLeftRadius={['0', '0']}
              boxShadow="rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px"
            >
              <Heading
                textAlign={['center', '']}
                children="Things I Do"
                padding={'2'}
              />
              <Text
                fontSize={['lg', 'xl']}
                color={'#8D8D8D'}
                padding={['3', '2']}
                children="Design, strategy, management, creative direction, & development are my specialities, and I have had nearly a decade honing in my skills. In all my project, I find that efficient work - flows, excellent communication skills and a dose of self-discipline are key - a strong work ethic has driven my success in a myriad of specialties."
              />
            </VStack>
            <VStack
              alignItems={'flex-start'}
              // width={['', '7xl']}
              width={'full'}
              borderRadius={'2rem'}
              borderTopLeftRadius={['0', '0']}
              boxShadow="rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px"
            >
              <Heading children="Skills" padding={'2'} />
              <HStack
                borderRadius={'2rem'}
                borderTopLeftRadius={['', '0']}
                // boxShadow="rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px"
                data-aos="zoom-in"
              >
                <Stack>
                  <Tech />
                </Stack>
              </HStack>
            </VStack>
          </Stack>

          {/* Contact************************************************** */}
          <Stack
            direction={['column', 'row']}
            w={'full'}
            m={'auto'}
            gap={'1rem'}
          >
            <VStack
              alignItems={'flex-start'}
              width={'full'}
              justifyContent={'center'}
              borderRadius={'2rem'}
              borderTopLeftRadius={['0', '0']}
              boxShadow="rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px"
            >

              {/* <Testimonial/> */}
            </VStack>
            <VStack
              alignItems={'flex-start'}
              width={'full'}
              borderRadius={'2rem'}
              borderTopLeftRadius={['0', '0']}
              boxShadow="rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px"
            >
              <Heading children="Contact" padding={'2'} />
              <HStack
                borderRadius={'2rem'}
                borderTopLeftRadius={['', '0']}
                // boxShadow="rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px"
              >
                <Stack
                  spacing={3}
                  // border={'1px'}
                  w={['300px', '650px']}
                  padding={'6'}
                >
                  <Box >
                    <FormLabel htmlFor="name" children="Name" />
                    <Input
                      required
                      id="name"
                      // value={name}
                      // onChange={e => setName(e.target.value)}
                      placeholder="Abc"
                      type={'text'}
                      focusBorderColor="yellow.500"
                    />
                  </Box>

                  <Box my={'4'}>
                    <FormLabel htmlFor="email" children="Email Address" />
                    <Input
                      required
                      id="email"
                      // value={email}
                      // onChange={e => setEmail(e.target.value)}
                      placeholder="abc@gmail.com"
                      type={'email'}
                      focusBorderColor="yellow.500"
                    />
                  </Box>

                  <Box my={'4'}>
                    <FormLabel htmlFor="message" children="Message" />
                    <Textarea
                      required
                      id="message"
                      // value={message}
                      // onChange={e => setMessage(e.target.value)}
                      placeholder="Your Message...."
                      focusBorderColor="yellow.500"
                    />
                  </Box>
                  <Button
                     maxW={'100'}
                    my="4"
                    colorScheme={'linkedin'}
                    type="submit"
                  >
                    Send Mail
                  </Button>
                </Stack>
              </HStack>
            </VStack>
          </Stack>

          {/**************services************************ */}

          {/***********************************************************/}
        </Stack>
      </div>
    </section>
  );
};

export default Home;
