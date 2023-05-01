import React from 'react';
import {
  HStack,
  VStack,
  Stack,
  Heading,
  Text,
} from '@chakra-ui/react';
import Tech from './animations/TechStack/Tech';
const ThingsIDo = () => {
  return (
    <>
      <Stack
        direction={['column', 'row']}
        w={'full'}
        m={'auto'}
        zIndex={'-1'}
        gap={'1rem'}
      >
        <VStack
          alignItems={'flex-start'}
          width={'full'}
          justifyContent={'center'}
          borderRadius={'1rem'}
          borderTopLeftRadius={['0', '0']}
          boxShadow={'-2px 0 10px rgba(196, 175, 245, 0.5)'}
        >
          <Heading
            textAlign={['center', '']}
            children="Things I Do"
            padding={'2'}
          />
          <Text
            fontSize={['lg', 'xl']}
            color={'#8D8D8D'}
            padding={['3', '2']}
            children="Design, strategy, management, creative direction, & development are my specialities, and I have had nearly a decade honing in my skills. In all my project, I find that efficient work - flows, excellent communication skills and a dose of self-discipline are key - a strong work ethic has driven my success in a myriad of specialties."
          />
        </VStack>
        <VStack
          alignItems={'flex-start'}
          width={'full'}
          borderRadius={'1rem'}
          borderTopLeftRadius={['0', '0']}
          boxShadow={'-2px 0 10px rgba(196, 175, 245, 0.5)'}
        >
          <Heading children="Skills" padding={'2'} />
          <HStack
            borderRadius={'1rem'}
            borderTopLeftRadius={['', '0']}
            // boxShadow="rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px"
            data-aos="zoom-in"
          >
            <Stack>
              <Tech />
            </Stack>
          </HStack>
        </VStack>
      </Stack>
    </>
  );
};

export default ThingsIDo;
