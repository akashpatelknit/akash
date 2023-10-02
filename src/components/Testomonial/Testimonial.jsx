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
      <>
        <Slider {...settings}>
          <div>
            <Stack
              direction={['column-reverse', 'row']}
              alignItems={'flex-start'}
              margin={'auto'}
              justifyContent={'center'}
              borderRadius={'2rem'}
              padding={['', '3rem']}
              border={'2px solid #8D8D8D'}
            >
              <Stack boxShadow={'-2px 0 10px rgba(196, 175, 245, 0.5)'}></Stack>
              <VStack
                align={['flex-start']}
                position={['relative', 'initial']}
                top={['-40px', '']}
                borderRadius={'1rem'}
                width={['95%', 'full']}
                m={'auto'}
              >
                <Image
                  width={['9%', '5%']}
                  src="https://img.icons8.com/color/48/null/quote-left.png"
                  position={'relative'}
                  top={'30px'}
                />

                <Text
                  fontSize={['lg', 'xl']}
                  color={'#8D8D8D'}
                  padding={['3', '']}
                  children="Akash was hired as a backend developer at onethemove.life. We were extremely satisfied with his work. His contributions greatly enhanced our project. Akash's skills and dedication made a significant impact on our team's success."
                />
                <Heading
                  textAlign={['center', '']}
                  children="Pranav Yadav"
                  paddingLeft={'2'}
                />
                <Text
                  fontSize={['lg', 'xl']}
                  color={'#8D8D8D'}
                  paddingLeft={['3', '']}
                  children="IIT Kanpur"
                />
              </VStack>
              <VStack
                // border={'1px'}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <Image
                  width={'50%'}
                  src="https://icon-library.com/images/male-user-icon/male-user-icon-11.jpg"
                  justifyContent={'center'}
                  alignItems={'center'}
                  margin={'auto'}
                  borderRadius={'1rem'}
                  borderBottomLeftRadius={['0', '1rem']}
                  borderBottomRightRadius={['0', '1rem']}
                />
              </VStack>
            </Stack>
          </div>
        </Slider>
      </>
    );
  }
}
