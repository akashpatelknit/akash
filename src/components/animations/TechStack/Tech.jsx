import React from 'react';
// import './tech.css'
import './float.css';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Heading } from '@chakra-ui/react';
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
  cpp,
  js,
  bootstrap,
  react,
  gitHub,
  scss,
  vscode,
  postman,
} from './photos/index';
const Tech = () => {
  const dragConstraints = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  };

  return (
    <>
      <section class="body">
        <motion.div className="container-float">
          <motion.img
            className="item"
            drag
            dragConstraints={dragConstraints}
            whileTap={{ cursor: 'grabbing' }}
            src={html}
            alt=""
          />

          <motion.img
            className="item"
            drag
            dragConstraints={dragConstraints}
            src={css}
            alt=""
          />

          <motion.img
            className="item"
            drag
            dragConstraints={dragConstraints}
            src={javascript}
            alt=""
          />
          <motion.img
            className="item"
            drag
            dragConstraints={dragConstraints}
            src={mongodb}
            alt=""
          />
          <motion.img
            className="item"
            drag
            dragConstraints={dragConstraints}
            src={reactjs}
            alt=""
          />
          <motion.img
            className="item"
            drag
            dragConstraints={dragConstraints}
            src={git}
            alt=""
          />
          <motion.img
            className="item"
            drag
            dragConstraints={dragConstraints}
            src={redux}
            alt=""
          />
          <motion.img
            className="item"
            drag
            dragConstraints={dragConstraints}
            src={nodejs}
            alt=""
          />
          <motion.img
            className="item"
            drag
            dragConstraints={dragConstraints}
            src={gitHub}
            alt=""
          />
          <motion.img
            className="item"
            drag
            dragConstraints={dragConstraints}
            src={react}
            alt=""
          />
          <motion.img
            className="item"
            drag
            dragConstraints={dragConstraints}
            src={vscode}
            alt=""
          />
          <motion.img
            className="item"
            drag
            dragConstraints={dragConstraints}
            src={js}
            alt=""
          />
          <motion.img
            className="item"
            drag
            dragConstraints={dragConstraints}
            src={cpp}
            alt=""
          />
          <motion.img
            className="item"
            drag
            dragConstraints={dragConstraints}
            src={postman}
            alt=""
          />
          <motion.img
            className="item"
            drag
            dragConstraints={dragConstraints}
            src={bootstrap}
            alt=""
          />
          <motion.img
            className="item"
            drag
            dragConstraints={dragConstraints}
            src={scss}
            alt=""
          />
        </motion.div>

        {/* <motion.img className="item" drag dragConstraints={constraintsRef} src={javascript} alt=""/> */}
      </section>
    </>
  );
};

export default Tech;
