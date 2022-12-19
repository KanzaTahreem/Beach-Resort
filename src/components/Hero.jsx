import React from 'react';
import '../styles/Hero.scss';

const Hero = (props) => {
  const { children, hero } = props;

  return (
    <header className={hero}>
      {children}
    </header>
  );
};

export default Hero;
