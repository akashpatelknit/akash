import React from 'react';
import { Stack, Heading } from '@chakra-ui/react';
import './project.scss';
import CourseCard from './Card/CourseCard';
import Slider from 'react-slick';
import project from '../components/Home/data';
const Projects = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: 'linear',
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 11000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <>
      <div className="container">
        <div className="textContainer">
          <Heading
            size={['3xl', '2xl']}
            children="Recent Works"
            mb={'1rem'}
            color={'#48AFDE;'}
            fontFamily={'Iceland'}
          />
          <h3
            className="description_20"
            children="Here are a few of my most recent work. As a web designer and full-stack web developer. I always enjoy working on my projects, so each one is a new adventure for me. While working on each new project, I attempt to learn new things."
          ></h3>
        </div>
        <Stack textAlign={'strat'} className="project_bg">
          <div className="projectCarosal">
            <Slider {...settings}>
              {project.map((item, index) => {
                return (
                  <div>
                    <CourseCard title={item.title} />
                  </div>
                );
              })}
            </Slider>
          </div>
        </Stack>
      </div>
    </>
  );
};

export default Projects;
