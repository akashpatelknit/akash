import React from 'react';
import './float.css';
import { motion } from 'framer-motion';
import {
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
const icon = [
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
];
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
          {icon.map((icon, index) => {
            return (
              <motion.img
                className="item"
                drag
                dragConstraints={dragConstraints}
                whileTap={{ cursor: 'grabbing' }}
                src={icon}
                alt=""
                key={index}
              />
            );
          })}
        </motion.div>
      </section>
    </>
  );
};

export default Tech;
