/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect} from 'react';
import { Stack,Heading } from '@chakra-ui/react';
import './home.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Testimonial from '../Testomonial/Testimonial';
import Freelance from '../Freelance';
import Introduction from '../Introduction';
import Projects from '../Projects';
import ThingsIDo from '../ThingsIDo';
import Connect from '../Connect';
const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className="home">
      <div className="container">
        <Freelance />
        <Stack direction={['column']} height="100%" spacing={['16', '6rem']}>
          <Introduction />
          {/**************** * PROJECTS ********************************/}

          <Projects />
          {/***********************************************************/}

          {/***************************THINGS I DO***************************/}
          <ThingsIDo />
          <Stack
            // 
            borderRadius={'1rem'}
          >
            <Heading children="Testimonials" textAlign={'center'}/>
            <Testimonial />
          </Stack>
          {/* Contact************************************************** */}

          <Connect flag={true}/>
          {/**************services************************ */}

          {/***********************************************************/}
        </Stack>
      </div>
    </section>
  );
};

export default Home;
