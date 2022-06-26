import { NextPage } from 'next';
import Back from '../../../../components/back';
import React from 'react';
import { useRouter } from 'next/router';

const TimeLapse: NextPage = () => {
  const router = useRouter();
  const section = router.query.section;
  return (
    <React.Fragment>
      <Back />
      <div className="w-4/5 h-5/6 m-auto overflow-y-scroll bg-white scrollbar-hide rounded-2xl">
        <h1 className="flex w-full justify-center mt-2 text-xl font-medium">{section} 구역</h1>
        <h2 className="flex w-full justify-center text-lg font-light text-gray-500">{'name'}</h2>
        <div className="flex flex-row w-11/12 m-auto h-16  shadow-2xl shadow-inner rounded-full">
          <div className="w-20 flex justify-center items-center">
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_197_423)">
                <circle cx="22.5843" cy="18.187" r="16.0864" fill="white" stroke="#646464" strokeWidth="4" />
                <path
                  d="M31.1813 17.0579L19.3121 9.8127C19.1144 9.68741 18.8861 9.61884 18.6521 9.61448C18.418 9.61012 18.1873 9.67013 17.9851 9.78797C17.7798 9.90057 17.6088 10.0664 17.4898 10.268C17.3709 10.4696 17.3085 10.6996 17.3092 10.9337V25.4405C17.3085 25.6746 17.3709 25.9045 17.4898 26.1062C17.6088 26.3078 17.7798 26.4736 17.9851 26.5862C18.1873 26.704 18.418 26.7641 18.6521 26.7597C18.8861 26.7553 19.1144 26.6868 19.3121 26.5615L31.1813 19.3163C31.3759 19.1989 31.5368 19.0333 31.6485 18.8355C31.7602 18.6376 31.8189 18.4143 31.8189 18.1871C31.8189 17.9599 31.7602 17.7365 31.6485 17.5387C31.5368 17.3409 31.3759 17.1752 31.1813 17.0579Z"
                  fill="#646464"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_197_423"
                  x="0.497925"
                  y="0.100586"
                  width="44.1729"
                  height="44.1729"
                  filterUnits="userSpaceOnUse"
                  colorInterpolation-filters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_197_423" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_197_423" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="justify-center h-full flex flex-col">
            <span className="flex text-md">하루치</span>
            <span className="flex text-sm">2022-01.01-2022-02.01</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TimeLapse;
