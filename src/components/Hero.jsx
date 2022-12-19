import React from 'react';
import '../styles/Hero.scss';

const Hero = (defaultProps) => {
  const { children, hero } = defaultProps;

  return (
    <header className={hero}>
      {children}
    </header>
  );
};

Hero.defaultProps = {
  hero: 'defaultHero',
};

export default Hero;
