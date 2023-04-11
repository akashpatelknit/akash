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
import { Grid, GridItem, HStack } from '@chakra-ui/react';
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
      <section >
        <HStack
        >
          <Grid
          templateColumns={['repeat(4, 1fr)', 'repeat(10, 1fr)']}
          gap={'4'}
          padding={'3'}
          >
           
             {/* <motion.div className="container-float"> */}
          {icon.map((icon, index) => {
            return (
             <GridItem>
              <motion.img
                className="item"
                drag
                dragConstraints={dragConstraints}
                whileTap={{ cursor: 'grabbing' }}
                src={icon}
                alt=""
                key={index}
              />
              </GridItem>
            );
          })}
        {/* </motion.div> */}
         
          </Grid>
          
        </HStack>
       
      </section>
    </>
  );
};

export default Tech;
