import React from 'react';

const Logo = () => {
  return (
    <section className="flex mb-2 justify-center items-center h-4 bg-transparent rotate-[-20deg]">
      <svg
        width="60px"
        height="60px"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="50,15 90,85 10,85"
          style={{ fill: "none", stroke: "white", strokeWidth: 2 }}
        />
        <text
          x="50%"
          y="60%"
          textAnchor="middle"
          fill="black"
          fontSize="11"
          fontFamily="Arial"
          className='z-10'
        >
          Works by Khawla
        </text>
      </svg>
    </section>
  );
};

export default Logo;
