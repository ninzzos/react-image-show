import React from 'react';

const Arrow = props => {
  const { direction } = props;
  const points = direction === 'left'
    ? '8.165,25 25,0 0,25 25,50 8.165,25'
    : '16.835,25 0,50 25,25 0,0 16.835,25';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25" height="50" viewBox="0 0 25 50"
    >
      <polyline fill="#8B8B8B" points={points} />
    </svg>
  )
};

const Arrows = props => {
  const { onLeftClick, onRightClick } = props;
  const backArrow = '8.165,25 25,0 0,25 25,50 8.165,25';
  const nextArrow = '16.835,25 0,50 25,25 0,0 16.835,25';
  return (
    <div className="arrows">
      <span className="arrow-left" onClick={onLeftClick}>
        <Arrow direction="left" />
      </span>
      <span className="arrow-right" onClick={onRightClick}>
        <Arrow direction="right" />
      </span>
    </div>
  );
};

export default Arrows