/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect } from 'react';
import { Stack } from '@chakra-ui/react';
import './home.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Introduction from '../Introduction';
import Projects from '../Projects';
import Connect from '../Connect';
import SkillCarosal from '../skillCarosal/SkillCarosal';
import AboutMyself from '../AboutMe/AboutMyself';
import Footer from '../Layout/Footer/Footer';
const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="home">
      <div className="container">
        <Stack direction={['column']} position={'relative'}>
          <Introduction />
          <SkillCarosal />
          <Projects />
          <AboutMyself />
          <Connect flag={true} />
        </Stack>
      </div>
    </section>
  );
};

export default Home;
