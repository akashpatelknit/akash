import React,{useState} from 'react';
import {
  Heading,
  VStack,
  Stack,
  Box,
  Image,
  HStack,
  Grid,
  GridItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
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
import ProjectCarosal from '../All Projects/ProjectCarosal';
import project from './data';
const CourseCard = ({ title}) => {
  let data = project.filter(d=>d.title===title)[0];
  let image=[]
  if (title === 'Netflix Clone') {
    image = [react, postman, gitHub, javascript, vscode, scss];
  } else if (title === 'Onthemove') {
    image = [html, gitHub, javascript, nodejs];
  } else if (title === 'Weather App') {
    image = [react, gitHub, javascript, vscode];
  } else if (title === 'My Library') {
    image = [react, gitHub, javascript, mongodb];
  }
  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = useState('inside')
  const [overlay, setOverlay] = React.useState(<OverlayTwo />);
  return (
    <Stack
    // mt={'4rem'}
    >
      <VStack
        className="course"
        alignItems={['center', 'center']}
        borderRadius={'1rem'}
        w={'full'}
        cursor={'pointer'}
        margin={'auto'}
        //  boxShadow={'-2px 0 10px rgba(196, 175, 245, 0.5)'}
        onClick={() => {
          onOpen();
          setOverlay(<OverlayTwo />);
        }}
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
              src={data.src}
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
                color={data.color}
              />
              <VStack>
                <HStack wrap={'wrap'} fontSize={'1.5rem'}>
                  <Grid templateColumns={['repeat(4, 1fr)', 'repeat(3, 1fr)']}>
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

    
      <Modal isCentered isOpen={isOpen} onClose={onClose} size={['sm', '3xl']}
      scrollBehavior={scrollBehavior}
      
      >
        {overlay}
        <ModalContent >
          <ModalCloseButton />
          <ModalBody mt={['1rem','1rem']}>
            <ProjectCarosal poster={data.image} />
            
            <Stack
              direction={['column']}
              height="100%"
              justifyContent={['center', 'space-between']}
              alignItems={['center', 'baseline']}
              spacing={['16', '3rem']}
              borderRadius={'1rem'}
              marginTop={['12rem', '0rem']}
            >
              <Stack
              direction={['column','row']}
               marginTop={['-10rem', '3rem']}
               alignItems={'center'}
               justifyContent={'center'}
              >
                <VStack
                  width={'full'}
                  alignItems={['center', 'start']}
                  spacing={['3', '7']}
                 
                >
                  <Heading
                    textAlign={'start'}
                    children={data.title}
                    size={['lg', 'xl']}
                    marginBottom={'-4'}
                    color={'red'}
                  />
                  <Text
                    fontSize={['lg', 'md']}
                    width={['300px', '510px']}
                    textAlign={['center','start']}
                    
                    children={data.decs}
                  />

                  <VStack
                    width={'full'}
                    alignItems={['center', 'start']}
                    spacing={['3', '6']}
                    marginTop={['-10rem', '5rem']}
                  >
                    <HStack>
                      <a
                        href={data.live}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button colorScheme="linkedin" minW={['', '40']}>
                          Live Link
                        </Button>
                      </a>
                      <a
                        href={data.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button
                          colorScheme="linkedin"
                          minW={['', '40']}
                          letterSpacing={'2'}
                        >
                          Source Code
                        </Button>
                      </a>
                    </HStack>
                  </VStack>
                </VStack>
                <Image
                  src={data.src}
                  objectFit={'cover'}
                  borderRadius={'1rem'}
                  boxSize={['248px', '200px']}
                  borderRight={'1rem'}
                />
              </Stack>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Stack>
  );
};
export default CourseCard;
