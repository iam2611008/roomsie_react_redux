import React from 'react';

const AttachmentIcon = ({ width, height, color, scale }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width * scale}
    height={height * scale}
  >
    <path
      fillRule="evenodd"
      fill={color}
      d="M9.866,4.175 C9.425,4.175 9.068,4.532 9.068,4.973 L9.068,10.271 C9.068,12.238 7.467,13.840 5.500,13.840 C3.532,13.840 1.932,12.238 1.932,10.271 L1.932,2.332 C1.932,2.237 2.009,2.160 2.104,2.160 L6.102,2.160 C6.197,2.160 6.274,2.237 6.274,2.332 L6.274,9.223 C6.274,9.649 5.927,9.996 5.500,9.996 C5.073,9.996 4.727,9.649 4.727,9.222 L4.727,6.116 C4.727,5.675 4.370,5.318 3.929,5.318 C3.488,5.318 3.131,5.675 3.131,6.116 L3.131,9.222 C3.131,10.529 4.194,11.592 5.500,11.592 C6.807,11.592 7.870,10.529 7.870,9.223 L7.870,2.332 C7.870,1.357 7.077,0.564 6.102,0.564 L2.104,0.564 C1.129,0.564 0.336,1.357 0.336,2.332 L0.336,10.271 C0.336,13.119 2.653,15.436 5.500,15.436 C8.348,15.436 10.664,13.119 10.664,10.271 L10.664,4.973 C10.664,4.532 10.307,4.175 9.866,4.175 Z"
    />
  </svg>
);

AttachmentIcon.defaultProps = {
  width: 11,
  height: 16,
  color: 'black',
  scale: 1
};

export default AttachmentIcon;