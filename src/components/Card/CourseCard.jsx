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
import { Link } from 'react-router-dom';
import { IoLogoCss3 } from 'react-icons/io';
import { AiFillHtml5 } from 'react-icons/ai';
// import { DiReact } from 'react-icons/di';
// import {BiLink} from 'react-icons/bi'
// import {AiFillApi} from 'react-icons/ai'
const CourseCard = ({ title, src, color, link }) => {
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
                      {/* {techh.map((item, index) => {
                        return <GridItem borderRadius={'50%'}key={index} padding={'4px'}>
                          {item}
                        </GridItem>
                      })} */}
                      <GridItem borderRadius={'50%'} padding={'4px'}>
                        <AiFillHtml5 />
                      </GridItem>
                      <GridItem
                        // bg={'skyblue'}
                        borderRadius={'50%'}
                        padding={'4px'}
                      >
                        <IoLogoCss3 color="blue" />
                      </GridItem>
                      <GridItem
                        // bg={'skyblue'}
                        borderRadius={'50%'}
                        padding={'4px'}
                      >
                        <IoLogoCss3 color="blue" />
                      </GridItem>
                      <GridItem
                        // bg={'skyblue'}
                        borderRadius={'50%'}
                        padding={'4px'}
                      >
                        <AiFillHtml5 color="red" />
                      </GridItem>
                      <GridItem borderRadius={'50%'} padding={'4px'}>
                        <AiFillHtml5 color="red" />
                      </GridItem>
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
