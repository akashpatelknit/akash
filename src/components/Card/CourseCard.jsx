import { Button, Heading, VStack, Stack, Box, Image,Text,HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import  p4 from '../../assets/images/p4.png';
import {GrShare} from 'react-icons/gr'
import {AiFillGithub} from 'react-icons/ai'
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
        <Box padding={''}  borderRadius={'1.5rem'} >
          <Image
            src={p4}
            // boxSize={['60','60']}
            objectFit={'contain'}
            borderRadius={'1rem'}
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
