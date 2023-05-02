import React from 'react'
import { Stack,Box ,Text} from '@chakra-ui/react'
import Marquee from 'react-fast-marquee';
import { GoPrimitiveDot } from 'react-icons/go';
import { Link } from 'react-router-dom';
const Freelance = () => {
  return (
    <>

    
     <Stack
          bg="#F3F4F6"
          width={'450px'}
          margin={'auto'}
          borderRadius={'3rem'}
          display={['none', 'inherit']}
          py={'.5rem'}
          mt={'-1rem'}
        >
          <Box borderRadius={'3rem'}
          
          >
            <Link to={'/contact'}>
              <Marquee speed="100" gradientColor="none" width="450px">
                <GoPrimitiveDot fontSize={'2rem'} color="red" width={'10px'} />
                <Text
                  textAlign={'center'}
                  children=" AVALIABLE FOR FREELANCE WORK"
                  size={['lg', 'xl']}
                  color={'black'}
                />
              </Marquee>
            </Link>
          </Box>
        </Stack>
      
    </>
  )
}

export default Freelance