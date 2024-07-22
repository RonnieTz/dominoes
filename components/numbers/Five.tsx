import React from 'react';
import BottomLeft from '../positions/BottomLeft';
import BottomRight from '../positions/BottomRight';
import Center from '../positions/Center';
import TopLeft from '../positions/TopLeft';
import TopRight from '../positions/TopRight';

const Five = () => {
  return (
    <div className="container">
      <TopLeft />
      <TopRight />
      <BottomRight />
      <BottomLeft />
      <Center />
    </div>
  );
};

export default Five;
