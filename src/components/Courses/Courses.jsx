import { Grid, GridItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import {
  Button,
  Container,
  HStack,
  Heading,
  Input,
  Text,
} from '@chakra-ui/react';

import CourseCard from '../Card/CourseCard';
const Courses = () => {
  const categories = ['All', 'Industary', 'React', 'API', 'MERN'];
  return (
    <Container minH={'95vh'} maxW={'container.lg'} paddingY={'8'}>
      <Heading children="All Projects" m={'8'} textAlign={'center'} />
      <Input
        placeholder="Search a project"
        type="text"
        focusBorderColor="blue.200"
      />
      <HStack
        overflowX={'auto'}
        padding={'9'}
        gap={['', '1rem']}
        ml={['', '2rem']}
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {categories.map((item, index) => (
          <Button key={index} minW={['20', '40']}>
            <Text children={item} textAlign={'center'} />
          </Button>
        ))}
      </HStack>
      <Grid
        templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
        gap={6}
        // marginLeft={['2rem', '3rem','6rem']}
        width={['245px','800px']}
       
        margin={'auto'}
      >
        <GridItem>
          <Link to="/netflix">
            <CourseCard
              src="https://i.pinimg.com/originals/25/ae/6c/25ae6c3bbc39e96c2948e863e6fe61c4.gif"
              title="Netflix Clone"
              colour="red"
              link='/netflix'
            />
          </Link>
        </GridItem>
        <GridItem>
          <Link to="/weather">
            <CourseCard
              src="https://i.pinimg.com/originals/79/35/fd/7935fdf1fe2c5dd8205de03a214befb0.gif"
              title="Weather App"
              colour="black"
              link='/weather'
            />
          </Link>
        </GridItem>
        <GridItem>
          <Link to="/lib">
            <CourseCard
              src="https://cdn.dribbble.com/users/686119/screenshots/2435023/untitled.gif"
              title="My Library"
              colour="black"
              link='/lib'
            />
          </Link>
        </GridItem>
        <GridItem>
          <Link to="/otm">
            <CourseCard
              src="https://onix-systems.com/_next/image?url=https%3A%2F%2Fcdn.onix-systems.com%2Fstatic%2Fimages%2FPages%2FFitnessApp%2Frunning_woman.gif&w=640&q=75"
              title="Onthemove"
              colour="black"
              link='/otm'
            />
          </Link>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Courses;
