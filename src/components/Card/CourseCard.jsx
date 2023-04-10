import {
  Heading,
  VStack,
  Stack,
  Box,
  Image,
  Text,
  HStack,
  Grid,
  GridItem,
} from '@chakra-ui/react';
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
} from '../animations/TechStack/photos/index';
import { Link } from 'react-router-dom';
const CourseCard = ({ title, src, color, link }) => {
let image=[];
 if(title==='Netflix Clone'){
  image=[react,postman, gitHub,javascript,vscode];
 }else if(title==='Onthemove'){
   image=[html,gitHub,javascript,nodejs];
 }else if(title==='Weather App'){
   image=[react,gitHub,javascript,vscode];
 }else if(title==='My Library'){
   image=[react,gitHub,javascript,mongodb];
 }
  return (
    <Stack>
      <Link to={link}>
        <VStack
          className="course"
          alignItems={['center', 'center']}
          borderRadius={'1rem'}
          // bg={'GrayText'}
        >
          <Box
            padding={''}
            borderRadius={'1.5rem'}
            // bg={['#F3F4F6','#F3F4F6']}
            justifyContent={'center'}
            alignItems={'center'}
            width={['', '350px']}
            margin={'auto'}
          >
            <Stack direction={['column', 'row']} width={'full'} spacing={''}>
              <Image
                src={src}
                objectFit={'cover'}
                borderRadius={'1rem'}
                boxSize={['248px', '200px']}
                borderTopRightRadius={['', '0rem']}
                borderBottomLeftRadius={['1rem', '1rem']}
                borderBottomRightRadius={['1rem', '0rem']}
                // margin={'auto'}
              />
              <VStack padding={''} justifyContent={'space-evenly'} mt={'3'}>
                <Heading
                  children={title}
                  display={['', 'inherit']}
                  textAlign={'center'}
                  fontSize={['', 'xl']}
                  ml={'3'}
                  color={color}
                />
                <VStack>
                  <Text children="Tech Stacks" display={['none']} />
                  <HStack wrap={'wrap'} fontSize={'1.5rem'}>
                    <Grid
                      templateColumns={['repeat(6, 1fr)', 'repeat(3, 1fr)']}
                      gap={'5px'}
                      marginLeft={['1.5rem', '']}
                      mb={['1', '']}
                    >
                      {image.map((item, index) => {
                        return <GridItem borderRadius={'50%'} padding={'4px'}>
                        <img src={item} alt="" />
                      </GridItem>
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
