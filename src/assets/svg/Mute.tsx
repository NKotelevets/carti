import React from 'react';

interface IconProps {
  color?: string;
  className?: string;
  muted?: boolean;
}

export const Mute: React.FC<IconProps> = ({ color, className, muted }) => {
  return muted ? (
    <svg className={className} width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path
        d="M25.875 14.6251L29.25 18.0001M29.25 18.0001L32.625 21.3751M29.25 18.0001L32.625 14.6251M29.25 18.0001L25.875 21.3751M10.125 12.3751L17.2045 5.29563C17.9132 4.58692 19.125 5.08886 19.125 6.09112V29.9091C19.125 30.9114 17.9132 31.4133 17.2045 30.7046L10.125 23.6251H6.76358C5.44457 23.6251 4.20886 22.8654 3.85856 21.5938C3.54336 20.4496 3.375 19.2445 3.375 18.0001C3.375 16.7557 3.54336 15.5507 3.85856 14.4065C4.20886 13.1348 5.44457 12.3751 6.76358 12.3751H10.125Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ) : (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        opacity="0.15"
        d="M13 3L7 8H5C3.89543 8 3 8.89543 3 10V14C3 15.1046 3.89543 16 5 16H7L13 21V3Z"
        fill={color}
      />
      <path
        d="M7 8L13 3V21L7 16H5C3.89543 16 3 15.1046 3 14V10C3 8.89543 3.89543 8 5 8H7Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
