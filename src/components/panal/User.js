import React, { useState } from 'react';
import HeroSection from '../pages/HeroSection';
import Plans from '../pages/Plans';
import Services from '../pages/Services';
import FAQ from '../pages/FAQ';
import AR from '../pages/RoomDesign';


const User = () => {
  return (
    <div>
      <HeroSection />
      <Plans />
      <Services />
      <AR />
      <FAQ />
    </div>
  );
};

export default User;
