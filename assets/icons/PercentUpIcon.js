import React from 'react';

const PercentUpIcon = ({ width, height, color, scale }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width * scale}
    height={height * scale}
  >
    <path
      fillRule="evenodd"
      fill={color}
      d="M27.697,33.548 L1.302,33.548 C0.758,33.548 0.317,33.107 0.317,32.563 L0.317,15.819 C0.317,15.510 0.462,15.219 0.709,15.032 L13.906,5.087 C14.258,4.822 14.742,4.822 15.093,5.087 L28.291,15.032 C28.538,15.219 28.683,15.510 28.683,15.819 L28.683,32.563 C28.683,33.107 28.242,33.548 27.697,33.548 ZM26.711,16.310 L14.500,7.108 L2.288,16.310 L2.288,31.578 L26.711,31.578 L26.711,16.310 ZM27.697,12.609 C27.490,12.609 27.282,12.544 27.104,12.410 L14.500,2.912 L1.896,12.410 C1.461,12.738 0.843,12.651 0.515,12.217 C0.188,11.782 0.274,11.165 0.709,10.837 L13.906,0.892 C14.258,0.627 14.742,0.627 15.093,0.892 L28.291,10.837 C28.726,11.165 28.812,11.783 28.484,12.217 C28.291,12.474 27.995,12.609 27.697,12.609 Z"
    />
  </svg>
);

PercentUpIcon.defaultProps = {
  width: 29,
  height: 34,
  color: 'black',
  scale: 1
};

export default PercentUpIcon;