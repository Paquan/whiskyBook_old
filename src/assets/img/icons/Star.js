import React from 'react';

export const Star = ({ color = 'none', borderColor = '#979797', id, className, borderWidth = '5' }) => (
  <svg width="106" height="101" id={id} className={className}>
    <path
      fill={color}
      fillRule="evenodd"
      stroke={borderColor}
      strokeWidth={borderWidth}
      d="M53 81L23.61 96.45l5.614-32.725L5.447 40.55l32.858-4.774L53 6l14.695 29.775 32.858 4.774-23.777 23.176 5.613 32.726z"
    />
  </svg>
);
