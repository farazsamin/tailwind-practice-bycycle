import React from 'react';
import cycle2 from '../images/cycle1.jpg';
import cycle1 from '../images/cycle2.gif';
import cycle3 from '../images/cycle3.jpg';
import cycle4 from '../images/cycle4.jpg';
import cycle5 from '../images/cycle5.jpg';
import cycle6 from '../images/cycle6.jpg';


const Content = () => {
  return (
    <>
      <div className='menu-card'>
        <img src={cycle1} alt='egg' className='h-full rounded mb-20 shadow' />
        <div className='center-content'>
          <h2 className='text-2xl mb-2'>Core Zoom Cycle</h2>
          <p className='mb-2'>Whether you ride for pleasure, anyone can fall in love with cycling.
</p>
          <span>$1600</span>
        </div>
      </div>
      <div className='menu-card'>
        <img src={cycle2} alt='egg' className='h-full rounded mb-20 shadow' />
        <div className='center-content'>
          <h2 className='text-2xl mb-2'>Phoenix Cycle</h2>
          <p className='mb-2'>Whether you ride for pleasure, anyone can fall in love with cycling.
</p>
          <span>$1800</span>
        </div>
      </div>
    </>
  );
};

export default Content;
