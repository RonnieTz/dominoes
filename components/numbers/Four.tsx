import React from 'react';
import BottomLeft from '../positions/BottomLeft';
import BottomRight from '../positions/BottomRight';
import TopLeft from '../positions/TopLeft';
import TopRight from '../positions/TopRight';

const Four = () => {
  return (
    <div className="container">
      <TopLeft />
      <TopRight />
      <BottomRight />
      <BottomLeft />
    </div>
  );
};

export default Four;
