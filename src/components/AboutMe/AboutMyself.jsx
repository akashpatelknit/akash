import React from 'react';
import './aboutMyself.scss';
import data from './data';
import { FcPrevious } from 'react-icons/fc';
import { FcNext } from 'react-icons/fc';
import { useState } from 'react';
import { Button } from '@chakra-ui/react';
const AboutMyself = () => {
  const [skill, setSkill] = useState(0);
  const isloading = false;
  const skillData = data[skill];
  return (
    <div className="container">
      <div className="about_myself">
        <div className="about_text_container">
          <h1 className="about_heading">About Myself</h1>
          {/* <div className="project_buttons">
            <Button colorScheme="teal">Frontend</Button>
            <Button colorScheme="teal">Full Stack</Button>
            <Button isLoading={isloading} colorScheme="teal">
              API
            </Button>
            <Button colorScheme="teal">Backend</Button>
          </div> */}
        </div>
        <div className="about_para">
          {/* <h3 className="about_desc">
            Knack of Building application with frontend and backend operation
          </h3> */}
          <div className="para_item">
            <p>
              My name is Akash. A professional and enthusiastic full-stack
              developer and designer. However, I am more than just your average
              programmer or designer. I've been running my own business for the
              past 1 years and I was continually coming up with new concepts.
              I'm very fluid and never stop learning and adapting to new
              situations.
            </p>
          </div>
          <div className="para_item">
            <p>
              This attitude propelled me on an endless journey to learn a
              variety of skills, including design,
              front-end and back-end development, SEO and optimisations,
              server management, and many more...
            </p>
          </div>
          <div className="para_item">
            <p>
              When I encounter a new problem, I usually conduct extensive
              research on it in order to comprehend it and discover cutting-edge
              and innovative approaches for dealing with similar problems in the
              future. As a result, it's not unexpected that I've listed a lot of
              abilities here:
            </p>
          </div>
        </div>
      </div>
      <div className="about_cards">
        <div className="about_left_card">
          {data.map(item => (
            <div
              data-aos="zoom-in"
              key={item.id}
              className="left_card_item"
              onClick={() => setSkill(item.id - 1)}
            >
              <img src={item.img} alt="" />
              <span>
                {item?.skill_name[0]} <br />
                {item?.skill_name[1]}
              </span>
              <hr />
            </div>
          ))}
        </div>
        <div className="about_right_card">
          <div className="right_card_text">
            <h3>My skills as</h3>
            <h1>{skillData.skill_name}</h1>
            <ul>
              {skillData.skills.map(item => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
          <div className="right_card_button">
            <div
              className="div1 div"
              onClick={() => setSkill(skill === 0 ? 5 : skill - 1)}
            >
              <FcPrevious />
            </div>
            <div
              className="div2 div"
              onClick={() => setSkill(skill === 5 ? 0 : skill + 1)}
            >
              <FcNext />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMyself;
