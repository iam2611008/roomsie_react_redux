import React from 'react';

const MobilePhoneIcon = ({ width, height, color, scale }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width * scale}
    height={height * scale}
  >
    <path
      fillRule="evenodd"
      fill={color}
      d="M25.558,50.575 C25.558,50.575 30.029,50.575 30.029,46.016 L30.029,4.983 C30.029,0.424 25.558,0.424 25.558,0.424 L5.438,0.424 C5.438,0.424 0.967,0.424 0.967,4.983 L0.967,46.016 C0.967,50.575 5.438,50.575 5.438,50.575 L25.558,50.575 ZM15.498,48.677 C14.263,48.677 13.262,47.657 13.262,46.400 C13.262,45.144 14.263,44.125 15.498,44.125 C16.731,44.125 17.733,45.144 17.733,46.400 C17.733,47.657 16.731,48.677 15.498,48.677 ZM9.909,3.203 C9.909,2.921 10.130,2.699 10.403,2.699 L20.591,2.699 C20.863,2.699 21.086,2.925 21.086,3.203 L21.086,3.337 C21.086,3.621 20.865,3.840 20.592,3.840 L10.403,3.840 C10.132,3.840 9.909,3.614 9.909,3.337 L9.909,3.203 ZM3.202,6.114 L27.793,6.114 L27.793,42.532 L3.202,42.532 L3.202,6.114 Z"
    />
  </svg>
);

MobilePhoneIcon.defaultProps = {
  width: 31,
  height: 51,
  color: 'black',
  scale: 1
};

export default MobilePhoneIcon;
