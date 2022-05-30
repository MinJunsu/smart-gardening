import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="relative w-[100vw] h-[100vh]">
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] rounded-full bg-[#D3E5FF] opacity-70  blur-[120px]" />
      <div className="absolute -bottom-28 -right-28 w-[500px] h-[500px] rounded-full bg-[#D5EEC9] opacity-70 blur-[120px]" />
    </div>
  );
};

export default Background;
