import { Button, Heading, VStack, Stack, Box, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import  p4 from '../../assets/images/p4.png';
const CourseCard = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
  loading,
}) => {
  return (
    <a href="/">
      <VStack className="course" alignItems={['center', 'center']} >
        <Box padding={'4'} bg="yellow.100" borderRadius={'1.5rem'} >
          <Image
            src={p4}
            // boxSize={['60','60']}
            objectFit={'contain'}
            borderRadius={'1rem'}
          />
          {/* <Heading
            textAlign={['center', 'left']}
            // maxW="200px"
            
            size={'sm'}
            fontFamily={'sans-serif'}
            // noOfLines={3}
            children="Project1"
            margin={'3'}
          /> */}
        </Box>
{/* 
        <Stack direction={['column', 'row']} alignItems="center">
          <Link to={`/course/${id}`}>
            <Button colorScheme={'yellow'}>Preview</Button>
          </Link>
        </Stack> */}
      </VStack>
    </a>
  );
};
export default CourseCard;
