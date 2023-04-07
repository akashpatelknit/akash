import React from 'react';
import './tech.css'
import {Heading} from '@chakra-ui/react'
import {
  github,
  css,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
} from './photos/index'
const Tech = () => {
  return (
    <>
   <section class="main-container">
  <div class="main">
    <div class="big-circle">
      <div class="icon-block">
        {/* <AiFillGithub/> */}
        <img src={html} alt="" />
      </div>
      <div class="icon-block"  >
        <img src={javascript} alt="game design icon" />
      </div>
      <div class="icon-block">
        <img src={reactjs} alt="game dev icon" />
      </div>
      <div class="icon-block">
        <img src={mongodb} alt="ui-ux icon" />
      </div>
      <div class="icon-block">
        <img src={redux} alt="ui-ux icon" />
      </div>
      <div class="icon-block">
        <img src={redux} alt="ui-ux icon" />
      </div>
      <div class="icon-block">
        <img src={redux} alt="ui-ux icon" />
      </div>
      <div class="icon-block">
        <img src={redux} alt="ui-ux icon" />
      </div>
    </div>


    <div class="circle">
      <div class="icon-block">
        <img src={css} alt="app icon" />
      </div>
      <div class="icon-block">
        <img src={git} alt="blockchain icon" />
      </div>
      <div class="icon-block">
        <img src={nodejs} alt="ar-vr icon" />
      </div>
      <div class="icon-block">
        <img src={github} alt="artificial intelligence icon" />
      </div>
    </div>
    <div class="center-logo">
       <Heading
              children='Skills'
              fontSize={'2xl'}
              
              />
    </div>
  </div>
</section>
    </>
  );
};

export default Tech;
