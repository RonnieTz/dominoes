import React from 'react';
import BottomRight from '../positions/BottomRight';
import TopLeft from '../positions/TopLeft';
import Center from '../positions/Center';

const Three = () => {
  return (
    <div className="container">
      <TopLeft />
      <BottomRight />
      <Center />
    </div>
  );
};

export default Three;
