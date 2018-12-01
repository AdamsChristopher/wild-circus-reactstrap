import React from 'react';

import Bio from './Bio';

import '../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <div
      id="About-Us"
      className="my-4"
    >
      <h2 className="text-center">About Us</h2>
      <Bio />
    </div>
  )
}

export default AboutUs;