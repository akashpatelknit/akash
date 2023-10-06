import React from 'react';
import './skillCarosal.scss';
const img = [
  'https://i.ibb.co/zGxVBB8/sass.png',
  'https://i.ibb.co/s11pB71/nodejs.png',
  'https://i.ibb.co/2Yh6jMY/html.png',
  'https://i.ibb.co/CH2z97G/css.png',
  'https://i.ibb.co/bRf7KR2/javascript.png',
  'https://i.ibb.co/tCKvZVV/react.png',
];
const SkillCarosal = () => {
  return (
    <div className="container">
      <div className="skill_carosal">
        {img.map((i, index) => {
          return (
            // <div className="skill_card" key={index}>
            <img src={i} alt="html" border="0" className="skill" />
            // </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillCarosal;
