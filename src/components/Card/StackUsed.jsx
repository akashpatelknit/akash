import React from 'react';
import {
  css,
  html,
  js,
  reactjs,
  react,
  gitHub,
  scss,
  vscode,
  postman,
} from '../animations/TechStack/photos/index';
import { HStack, Heading, Stack } from '@chakra-ui/react';
const icon = [css, html, reactjs, js, react, gitHub, scss, vscode, postman];
const StackUsed = () => {
  return (
    <section class="body">
      <Stack
        direction={['column']}
        width={['300px', '800px']}
        margin={'auto'}
        mt={['2.5rem', '4rem']}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Heading
          children="Tech Stacks"
          size={['lg', 'md']}
          alignItems={'center'}
          justifyContent={'center'}
        />
        <HStack display={'flex'} flexWrap={'wrap'} gap={'1'}>
          {icon.map((icon, index) => {
            return <img className="item" src={icon} alt="" key={index} />;
          })}
        </HStack>
      </Stack>
    </section>
  );
};

export default StackUsed;
