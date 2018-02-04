import React from 'react';

const MyBookingsIcon = ({ width, height, color, colorOverlay, scale }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width * scale}
    height={height * scale}
  >
    <defs>
      <filter id="MyBookingsIcon">
        <feFlood
          floodColor={colorOverlay || color}
          floodOpacity="1"
          result="floodOut"
        />
        <feComposite
          operator="atop"
          in="floodOut"
          in2="SourceGraphic"
          result="compOut"
        />
        <feBlend mode="normal" in="compOut" in2="SourceGraphic" />
      </filter>
    </defs>
    <g filter="url(#MyBookingsIcon)">
      <path
        fillRule="evenodd"
        fill={color}
        d="M21.852,24.426 L2.398,24.426 C1.255,24.426 0.324,23.495 0.324,22.351 L0.324,12.671 C0.324,12.289 0.634,11.980 1.015,11.980 L3.136,11.980 L3.136,1.515 C3.136,1.133 3.446,0.824 3.827,0.824 L17.703,0.824 C18.085,0.824 18.394,1.133 18.394,1.515 L18.394,4.102 C18.461,4.155 18.525,4.212 18.585,4.273 L20.533,6.237 C20.934,6.641 21.162,7.176 21.160,7.706 L21.160,11.980 L23.234,11.980 C23.616,11.980 23.926,12.289 23.926,12.671 L23.926,22.351 C23.926,23.495 22.995,24.426 21.852,24.426 ZM17.011,2.207 L4.519,2.207 L4.519,11.980 L5.210,11.980 C5.686,11.980 5.840,12.385 5.902,12.508 L5.902,4.327 C5.902,3.945 6.211,3.636 6.593,3.636 L17.011,3.636 L17.011,2.207 ZM19.777,7.703 C19.778,7.537 19.693,7.354 19.551,7.211 L17.603,5.247 C17.478,5.121 17.293,5.019 17.115,5.019 L17.011,5.019 L17.011,7.785 L19.777,7.785 L19.777,7.703 ZM19.777,9.168 L16.320,9.168 C15.938,9.168 15.628,8.858 15.628,8.476 L15.628,5.019 L7.285,5.019 L7.285,14.745 L17.229,14.745 L18.421,12.362 C18.538,12.127 18.778,11.980 19.040,11.980 L19.777,11.980 L19.777,9.168 ZM22.543,13.362 L19.467,13.362 L18.275,15.746 C18.158,15.980 17.919,16.128 17.657,16.128 L6.593,16.128 C6.327,16.128 6.089,15.974 5.975,15.746 L4.783,13.362 L1.707,13.362 L1.707,22.351 C1.707,22.733 2.017,23.043 2.398,23.043 L21.852,23.043 C22.233,23.043 22.543,22.733 22.543,22.351 L22.543,13.362 ZM14.891,21.660 L9.359,21.660 C8.215,21.660 7.285,20.729 7.285,19.586 C7.285,18.442 8.215,17.511 9.359,17.511 L14.891,17.511 C16.035,17.511 16.965,18.442 16.965,19.586 C16.965,20.729 16.035,21.660 14.891,21.660 ZM14.891,18.894 L9.359,18.894 C8.978,18.894 8.668,19.204 8.668,19.586 C8.668,19.967 8.978,20.277 9.359,20.277 L14.891,20.277 C15.272,20.277 15.582,19.967 15.582,19.586 C15.582,19.204 15.272,18.894 14.891,18.894 ZM16.274,13.362 L9.359,13.362 C8.977,13.362 8.668,13.053 8.668,12.671 C8.668,12.289 8.977,11.980 9.359,11.980 L16.274,11.980 C16.656,11.980 16.965,12.289 16.965,12.671 C16.965,13.053 16.656,13.362 16.274,13.362 ZM13.508,10.550 L9.359,10.550 C8.977,10.550 8.668,10.241 8.668,9.859 C8.668,9.477 8.977,9.168 9.359,9.168 L13.508,9.168 C13.890,9.168 14.199,9.477 14.199,9.859 C14.199,10.241 13.890,10.550 13.508,10.550 ZM13.508,7.785 L9.359,7.785 C8.977,7.785 8.668,7.475 8.668,7.093 C8.668,6.711 8.977,6.402 9.359,6.402 L13.508,6.402 C13.890,6.402 14.199,6.711 14.199,7.093 C14.199,7.475 13.890,7.785 13.508,7.785 Z"
      />
    </g>
  </svg>
);

MyBookingsIcon.defaultProps = {
  width: 24,
  height: 25,
  color: '#c24045',
  colorOverlay: '#a3a9ac',
  scale: 1
};

export default MyBookingsIcon;