import React from 'react';
import { useRouter } from 'next/router';

const Back: React.FC = () => {
  const router = useRouter();
  return (
    <div onClick={router.back} className="w-full flex items-center mt-2 ml-2 select-none cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 hover:scale-125"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </div>
  );
};

export default Back;
