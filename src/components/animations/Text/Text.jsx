import { HStack, Heading, VStack } from '@chakra-ui/react'
import React,{useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Text = () => {
   useEffect(()=>{
   Aos.init({duration:2000});
   },[]);
  return (
   <VStack
    width={'full'}
      alignItems={['center', 'center']}
      spacing={['3', '4']}
      marginTop={['-10rem', '5rem']}
   >
    <HStack>
      <Heading
      textAlign={'center'}
      children="Hi,"
      size={['lg', '3xl']}
      marginBottom={'-4'}
      data-aos="fade-down-right"
      data-aos-delay="100"
      />
      <Heading
      textAlign={'center'}
      children=" I'm"
      size={['lg', '3xl']}
      marginBottom={'-4'}
      data-aos="fade-down-right"
      data-aos-delay="200"
      />
      <Heading
      textAlign={'center'}
      children=" Akash Patel"
      size={['lg', '3xl']}
      marginBottom={'-4'}
      data-aos="fade-down-right"
      data-aos-delay="300"
      />
      <Heading
      textAlign={'center'}
      children=" Patel."
      size={['lg', '3xl']}
      marginBottom={'-4'}
      data-aos="fade-down-right"
      data-aos-delay="400"
      />
     
    </HStack>
    <HStack>
      <Heading
      textAlign={'center'}
      children="I "
      size={['lg', '3xl']}
      marginBottom={'-4'}
      data-aos="fade-up-left"
      data-aos-delay="500"
      />
      <Heading
      textAlign={'center'}
      children="design, "
      size={['lg', '3xl']}
      marginBottom={'-4'}
      data-aos="fade-up-left"
      data-aos-delay="600"
      />
      <Heading
      textAlign={'center'}
      children=" code"
      size={['lg', '3xl']}
      marginBottom={'-4'}
      data-aos="fade-up-left"
      data-aos-delay="700"
      />
      <Heading
      textAlign={'center'}
      children=" and"
      size={['lg', '3xl']}
      marginBottom={'-4'}
      data-aos="fade-up-left"
      data-aos-delay="800"
      />
      <Heading
      textAlign={'center'}
      children=" develope"
      size={['lg', '3xl']}
      marginBottom={'-4'}
      data-aos="fade-up-left"
      data-aos-delay="900"
      />
      <Heading
      textAlign={'center'}
      children=" websites."
      size={['lg', '3xl']}
      marginBottom={'-4'}
      data-aos="fade-up-left"
      data-aos-delay="1000"
      />
     
    </HStack>
   </VStack>
  )
}

export default Text