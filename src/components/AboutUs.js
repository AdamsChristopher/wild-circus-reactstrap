import React from 'react';

import Bio from './Bio';

import '../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <div
      id="About-Us"
      className="page flex-grow-1 my-5"
    >
      <h2 className="text-center">About Us</h2>
      <Bio />
    </div>
  )
}

export default AboutUs;