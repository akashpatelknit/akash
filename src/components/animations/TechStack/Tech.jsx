import React from 'react';

import BallCanvas from './Ball';
import SectionWrapper from './SectionWrapper';
import { technologies } from './data';
import {  Stack } from '@chakra-ui/react';

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-9">
      <Stack direction={['column','row']}>
        {
        technologies.map(technology => (
          <BallCanvas icon={technology.icon} />
        ))}
      </Stack>
    </div>
  );
};

export default SectionWrapper(Tech, '');
