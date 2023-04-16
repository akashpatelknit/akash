import {
  Heading,
  VStack,
  Stack,
  Box,
  Image,
  HStack,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import {
  html,
  javascript,
  mongodb,
  nodejs,
  react,
  gitHub,
  scss,
  vscode,
  postman,
} from '../animations/TechStack/photos/index';
import { Link } from 'react-router-dom';

const CourseCard = ({ title, src, color, link }) => {
  let image = [];
  if (title === 'Netflix Clone') {
    image = [react, postman, gitHub, javascript, vscode, scss];
  } else if (title === 'Onthemove') {
    image = [html, gitHub, javascript, nodejs];
  } else if (title === 'Weather App') {
    image = [react, gitHub, javascript, vscode];
  } else if (title === 'My Library') {
    image = [react, gitHub, javascript, mongodb];
  }
  return (
    <Stack>
      <Link to={link}>
        <VStack
          className="course"
          alignItems={['center', 'center']}
          borderRadius={'1rem'}
          w={'full'}
          margin={'auto'}
          //  boxShadow={'-2px 0 10px rgba(196, 175, 245, 0.5)'}
        >
          <Box
            borderRadius={'1.5rem'}
            justifyContent={'center'}
            alignItems={'center'}
            width={['', '400px']}
            margin={'auto'}
            boxShadow={'-2px 0 10px rgba(196, 175, 245, 0.5)'}
          >
            <Stack direction={['column', 'row']} width={'full'} m={'auto'}>
              <Image
                src={src}
                objectFit={'cover'}
                borderRadius={'1rem'}
                boxSize={['248px', '200px']}
                // margin={'auto'}
                borderBottomLeftRadius={['1rem', '1rem']}
                borderBottomRightRadius={['1rem', '0rem']}
                borderTopRightRadius={['1rem', '0rem']}
              />
              <VStack
                padding={''}
                justifyContent={'space-evenly'}
                // boxShadow={'-2px 0 10px rgba(196, 175, 245, 0.5)'}
                w={'full'}
                m={'auto'}
              >
                <Heading
                  children={title}
                  textAlign={'center'}
                  fontSize={['', 'xl']}
                  color={color}
                />
                <VStack>
                  <HStack wrap={'wrap'} fontSize={'1.5rem'}>
                    <Grid
                      templateColumns={['repeat(4, 1fr)', 'repeat(3, 1fr)']}
                    >
                      {image.map((item, index) => {
                        return (
                          <GridItem
                            borderRadius={'50%'}
                            padding={'4px'}
                            width={'50px'}
                          >
                            <img src={item} alt="" />
                          </GridItem>
                        );
                      })}
                    </Grid>
                  </HStack>
                </VStack>
              </VStack>
            </Stack>
          </Box>
        </VStack>
      </Link>
    </Stack>
  );
};
export default CourseCard;
