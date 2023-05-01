import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Stack, Image } from '@chakra-ui/react';
const ProjectCarosal = ({ poster }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Stack width={'full'} >
      <Slider {...settings}>
        {poster.map(d => (
          <Image src={d} width={'30%'}  />
        ))}
      </Slider>
    </Stack>
  );
};

export default ProjectCarosal;
