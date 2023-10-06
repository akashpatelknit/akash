import React from 'react';
import './courseCard.scss';
import {
  Heading,
  VStack,
  Stack,
  Box,
  Image,
  HStack,
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

import ProjectCarosal from '../All Projects/ProjectCarosal';
import project from './data';

const CourseCard = ({ title }) => {
  let data = project.filter(d => d.title === title)[0];

  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayTwo />);
  return (
    <Stack>
      <VStack
        className="course"
        alignItems={['center', 'center']}
        borderRadius={'1rem'}
        w={'full'}
        cursor={'pointer'}
        margin={'auto'}
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
        >
          <Box
            direction={['column']}
            width={'full'}
            m={'auto'}
            className="courseCard"
          >
            <Image src={data.src} borderRadius={'1rem'} />
            <Heading
              children={title}
              textAlign={'center'}
              fontSize={['', 'xl']}
              color={data.color}
            />
          </Box>
        </Box>
      </VStack>

      <Modal isOpen={isOpen} onClose={onClose} size={['sm', '3xl']}>
        {overlay}
        <ModalContent>
          <ModalCloseButton />
          <ModalBody mt={['1rem', '1rem']}>
            <Stack padding={'1rem'}>
              <ProjectCarosal poster={data.image} />
            </Stack>

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
                direction={['column', 'row']}
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
                    textAlign={['center', 'start']}
                    children={data.decs}
                  />

                  <VStack
                    width={'full'}
                    alignItems={['center', 'start']}
                    spacing={['3', '6']}
                    marginTop={['-10rem', '5rem']}
                  >
                    <HStack>
                      <a href={data.live} target="_blank" rel="noreferrer">
                        <Button colorScheme="linkedin" minW={['', '40']}>
                          Live Link
                        </Button>
                      </a>
                      <a href={data.github} target="_blank" rel="noreferrer">
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
