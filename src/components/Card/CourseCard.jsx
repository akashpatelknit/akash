import { Button, Heading, VStack, Stack, Box, Image,Text,HStack } from '@chakra-ui/react';
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
      <VStack className="course" alignItems={['center', 'center']} 
      borderRadius={'1rem'}
      bg={'GrayText'}
      >
        <Box padding={'1'}  borderRadius={'1.5rem'}
         >
          <Image
            src={p4}
            objectFit={'contain'}
            borderRadius={'1rem'}
          />
        
        </Box>
        
        <Stack direction={['column', 'row']} alignItems="center"
        bg="#F3F4F6"
        padding={'2'}
        borderRadius={'1rem'}
        borderTopLeftRadius={'0'}
        borderTopRightRadius={'0'}
        >
           <Text
              fontSize={'2md'}
              color={'#8D8D8D'}
              children='ection, & development are my specialities, and I have had nearly a decade honing in my skills. In all my project, I '
              />
        </Stack>
              
      </VStack>
    </a>
  );
};
export default CourseCard;
