import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <>
      <Hero />
      <div className="row">
        <div className="col-md-4">
          <Content />
        </div>
      </div>

    </>
  );
};

export default Home;
