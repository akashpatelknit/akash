import { Button, Heading, VStack, Stack, Box, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
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
        <Box padding={'4'} bg="#F3F4F6" borderRadius={'1.5rem'} >
          <Image
            src={imageSrc}
            boxSize={['60','60']}
            objectFit={'contain'}
            borderRadius={'1.5rem'}
          />
          <Heading
            textAlign={['center', 'left']}
            // maxW="200px"
            
            size={'sm'}
            fontFamily={'sans-serif'}
            // noOfLines={3}
            children="Project1"
            margin={'3'}
          />
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
