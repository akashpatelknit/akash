import { Grid, GridItem, Stack } from '@chakra-ui/react';
import 'aos/dist/aos.css';
import {
  Button,
  HStack,
  Heading,
  Text,
} from '@chakra-ui/react';
import data from './data';
import CourseCard from '../Card/CourseCard';
const Courses = () => {
  const categories = ['All', 'Industary', 'React', 'API', 'MERN'];
  return (
    <div className="container">
      <Stack
      w={'full'}
      margin={'auto'}
      >
        <Heading children="All Projects" m={'8'} textAlign={'center'} />
        <HStack
          overflowX={'auto'}
          direction={'row'}
          gap={['', '1rem']}
          width={'full'}
          ml={['','10rem']}
          css={{
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          {categories.map((item, index) => (
            <Button key={index} minW={['20', '40']} ml={['','16rem']}>
              <Text children={item} textAlign={'center'} />
            </Button>
          ))}
        </HStack>
        <Stack textAlign={'center'}>
          <Grid
            templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}
            // padding={'2'}
            gap={['10','']}
            mt={'3rem'}
          >
            {data.map((item, index) => {
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
          </Grid>
        </Stack>
      </Stack>
    </div>
  );
};

export default Courses;
