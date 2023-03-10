import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';

const Home = () => (
  <div>
    <Hero>
      <Banner title="Luxurious rooms" subtitle="delux rooms starting at $299">
        <Link to="/rooms" className="btn-primary">
          our rooms
        </Link>
      </Banner>
    </Hero>
  </div>
);

export default Home;
