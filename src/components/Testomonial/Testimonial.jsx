import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Stack, VStack, Image, Text, Heading } from '@chakra-ui/react';
export default class Testimonial extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <VStack textAlign={'center'}>
          <Heading children="Testimonials" />
          
        </VStack>
        <Slider {...settings}>
          <div>
            <Stack
              direction={['column-reverse', 'row']}
              alignItems={'flex-start'}
               zIndex={'-1'}
              margin={'auto'}
              justifyContent={'center'}
              borderRadius={'1rem'}
              borderTopLeftRadius={['0', '1rem']}
              //  border={'1px'}
              bg={'white'}
              padding={['', '3rem']}
              
            >
              <VStack
                align={'flex-start'}
                //  border={'1px'}
                //  width={'fit-content'}
                position={['relative', 'initial']}
                top={['-40px', '']}
                borderRadius={'1rem'}
                bg={'white'}
                width={['95%', 'full']}
                m={'auto'}
                
              >
                <Image
                  width={['9%', '5%']}
                  src="https://img.icons8.com/color/48/null/quote-left.png"
                  position={'relative'}
                  top={['20px','0px']}
                />

                <Text
                  fontSize={['lg', 'xl']}
                  color={'#8D8D8D'}
                  padding={['3', '2']}
                  children="I developed an interest in HR Management and came across Internshala Trainings, the courses were affordable with great content. The best part was that they provided me with a lot of practical projects to work on, which landed me my first internship! I'll be forever grateful to Internshala!"
                />
                <Heading
                  textAlign={['center', '']}
                  children="Bhakti Karekar"
                  padding={'2'}
                />
                <Text
                  fontSize={['lg', 'xl']}
                  color={'#8D8D8D'}
                  padding={['3', '2']}
                  children="Weligkar Institute of Management"
                />
              </VStack>
              <VStack
                // border={'1px'}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <Image
                  width={'95%'}
                  src="https://trainings.internshala.com/cached_uploads/homepage/media/reviews_section/bhakti_karekar.png"
                  justifyContent={'center'}
                  alignItems={'center'}
                  borderRadius={'1rem'}
                  borderBottomLeftRadius={['0', '1rem']}
                  borderBottomRightRadius={['0', '1rem']}
                />
              </VStack>
            </Stack>
          </div>
          <div>
            <Stack
              direction={['column-reverse', 'row']}
              alignItems={'flex-start'}
              margin={'auto'}
              justifyContent={'center'}
              borderRadius={'2rem'}
              borderTopLeftRadius={['0', '0']}
              //  border={'1px'}
              padding={['', '3rem']}
            >
              <VStack
                align={'flex-start'}
                //  border={'1px'}
                //  width={'fit-content'}
                position={['relative', 'initial']}
                top={['-40px', '']}
                borderRadius={'1rem'}
                bg={'white'}
                width={['95%', 'full']}
                m={'auto'}
              >
                <Image
                  width={['9%', '5%']}
                  src="https://img.icons8.com/color/48/null/quote-left.png"
                  position={'relative'}
                  top={'20px'}
                />

                <Text
                  fontSize={['lg', 'xl']}
                  color={'#8D8D8D'}
                  padding={['3', '2']}
                  children="I developed an interest in HR Management and came across Internshala Trainings, the courses were affordable with great content. The best part was that they provided me with a lot of practical projects to work on, which landed me my first internship! I'll be forever grateful to Internshala!"
                />
                <Heading
                  textAlign={['center', '']}
                  children="Bhakti Karekar"
                  padding={'2'}
                />
                <Text
                  fontSize={['lg', 'xl']}
                  color={'#8D8D8D'}
                  padding={['3', '2']}
                  children="Weligkar Institute of Management"
                />
              </VStack>
              <VStack
                // border={'1px'}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <Image
                  width={'95%'}
                  src="https://trainings.internshala.com/cached_uploads/homepage/media/reviews_section/bhakti_karekar.png"
                  justifyContent={'center'}
                  alignItems={'center'}
                  borderRadius={'1rem'}
                  borderBottomLeftRadius={['0', '1rem']}
                  borderBottomRightRadius={['0', '1rem']}
                />
              </VStack>
            </Stack>
          </div>
        </Slider>
      </div>
    );
  }
}
