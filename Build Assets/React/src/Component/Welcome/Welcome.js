import React from 'react';
import { Link } from 'react-router-dom';
import Typing from 'react-typical';
import SocialMedia from '../Social Media/SocialMedia';

export default function Welcome() {
  const textToType = [
    'Hi!',
    1000,
    'Welcome To My Page!',
    3000,
    "I'm KRSBX",
    3000,
    "I'm a Developer",
    3000,
    'See My CV Down Below!',
    3000,
  ];

  return (
    <div className="Home">
      <div className="content">
        <h1 id="typedText">
          <Typing loop={Infinity} wrapper="b" steps={textToType} />
        </h1>
        <SocialMedia />
        <div className="curriculum-vitae">
          <Link to="CV">My CV</Link>
        </div>
      </div>
    </div>
  );
}
