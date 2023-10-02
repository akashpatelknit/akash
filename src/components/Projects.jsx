import React from 'react';
import {
  Button,
  Stack,
  Grid,
  GridItem,
  Heading,
} from '@chakra-ui/react';
import CourseCard from './Card/CourseCard';
import { Link } from 'react-router-dom';
import project from '../components/Home/data';
const Projects = () => {
  return (
    <>
      <Stack textAlign={'center'}>
        <Heading size={['lg', '2xl']} children="Projects" mb={'1rem'} />
        <Grid
          display={'flex'}
          padding={'2'}
          justifyContent={'center'}
          alignItems={'center'}
          justifySelf={'center'}
          flexWrap={'wrap'}
          gap={['10', '3rem']}
        >
          {project.map((item, index) => {
            return (
              <GridItem>
                <CourseCard
                  title={item.title}
                />
              </GridItem>
            );
          })}
        </Grid>
        <Link to="/courses">
          <Button
            size={'lg'}
            padding={'1rem'}
            colorScheme="linkedin"
            borderRadius={'1rem'}
            justifySelf={'center'}
            minW={['30', '30']}
          >
            More
          </Button>
        </Link>
      </Stack>
    </>
  );
};

export default Projects;
