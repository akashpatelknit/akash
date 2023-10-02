import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Stack, Image } from '@chakra-ui/react';
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green",borderRadius:'50%'}}
      onClick={onClick}
      
    />
  );
}
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red",borderRadius:'50%' }}
      onClick={onClick}
    />
  );
}
const ProjectCarosal = ({ poster }) => {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
  };
  return (
    <Stack width={'full'} >
      <Slider {...settings}>
        {poster.map(d => (
          <Image src={d} width={['60%','30%']}  />
        ))}
      </Slider>
    </Stack>
  );
};

export default ProjectCarosal;
