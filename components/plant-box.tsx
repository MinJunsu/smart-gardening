import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface IPlantBoxProps {
  num: number;
  src: string;
  district: string;
  title: string;
  isWatered: boolean;
  isLighted: boolean;
}

const PlantBox: React.FC<IPlantBoxProps> = ({ num, src, district, title, isWatered, isLighted }) => {
  const [isWater, setIsWater] = useState<boolean>(isWatered);
  const [isLight, setIsLight] = useState<boolean>(isLighted);

  const waterHandler = () => {
    setIsWater(!isWater);
  };

  const lightHandler = () => {
    setIsLight(!isLight);
  };

  return (
    <Link href={`/lists/${num}`}>
      <div className="flex flex-row w-4/5 m-auto h-32 bg-white shadow-2xl rounded-2xl items-center justify-between px-5 active:bg-green-50 ">
        <Image className="h-full flex items-center rounded-2xl" src={src} width={100} height={100} />
        <div className="flex flex-col flex-grow ml-7">
          <span className="font-light text-sm ">{district}</span>
          <span className="font-normal text-2xl">{title}</span>
        </div>
        <div className="flex flex-row h-full items-end mb-7">
          {/*<svg onClick={waterHandler} width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
          {/*  <path*/}
          {/*    d="M23.7891 6.53526C22.099 4.58451 20.201 2.82408 18.1289 1.28526C17.944 1.15768 17.7247 1.08936 17.5 1.08936C17.2753 1.08936 17.056 1.15768 16.8711 1.28526C14.799 2.82408 12.901 4.58451 11.2109 6.53526C7.45117 10.8419 5.46875 15.3946 5.46875 19.6876C5.46875 22.8785 6.73632 25.9387 8.99262 28.195C11.2489 30.4513 14.3091 31.7189 17.5 31.7189C20.6909 31.7189 23.7511 30.4513 26.0074 28.195C28.2637 25.9387 29.5312 22.8785 29.5312 19.6876C29.5312 15.3946 27.5488 10.8419 23.7891 6.53526ZM25.0469 20.9728C24.7817 22.5357 24.0362 23.9772 22.914 25.097C21.7918 26.2167 20.3487 26.959 18.7852 27.2208H18.6074C18.3318 27.2222 18.0659 27.1195 17.8628 26.9332C17.6597 26.7469 17.5343 26.4909 17.5119 26.2162C17.4894 25.9415 17.5715 25.6685 17.7417 25.4517C17.9118 25.2349 18.1575 25.0904 18.4297 25.047C19.5441 24.8604 20.5725 24.3307 21.3715 23.5317C22.1704 22.7328 22.7002 21.7044 22.8867 20.59C22.9115 20.4479 22.964 20.3122 23.0414 20.1906C23.1188 20.0689 23.2195 19.9638 23.3377 19.8812C23.4558 19.7986 23.5891 19.7402 23.73 19.7093C23.8708 19.6784 24.0163 19.6757 24.1582 19.7013C24.3011 19.7243 24.4378 19.7758 24.5604 19.8526C24.683 19.9295 24.7888 20.0303 24.8717 20.1489C24.9546 20.2675 25.0128 20.4015 25.0429 20.543C25.073 20.6846 25.0744 20.8307 25.0469 20.9728Z"*/}
          {/*    fill={`${isWater ? '#646464' : '#D3E5FF'}`}*/}
          {/*  />*/}
          {/*</svg>*/}
          {/*<svg onClick={lightHandler} width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
          {/*  <path*/}
          {/*    d="M24.0625 31.7186C24.0625 32.0087 23.9473 32.2869 23.7421 32.492C23.537 32.6971 23.2588 32.8124 22.9687 32.8124H12.0312C11.7412 32.8124 11.463 32.6971 11.2578 32.492C11.0527 32.2869 10.9375 32.0087 10.9375 31.7186C10.9375 31.4285 11.0527 31.1503 11.2578 30.9452C11.463 30.7401 11.7412 30.6249 12.0312 30.6249H22.9687C23.2588 30.6249 23.537 30.7401 23.7421 30.9452C23.9473 31.1503 24.0625 31.4285 24.0625 31.7186ZM29.5312 14.2186C29.5349 16.041 29.123 17.8403 28.327 19.4796C27.531 21.119 26.3718 22.5554 24.9375 23.6795C24.6666 23.884 24.4467 24.1484 24.2949 24.452C24.1431 24.7556 24.0635 25.0901 24.0625 25.4295V26.2499C24.0625 26.83 23.832 27.3864 23.4218 27.7967C23.0116 28.2069 22.4552 28.4374 21.875 28.4374H13.125C12.5448 28.4374 11.9884 28.2069 11.5782 27.7967C11.168 27.3864 10.9375 26.83 10.9375 26.2499V25.4295C10.9366 25.0949 10.8598 24.7648 10.713 24.4641C10.5662 24.1633 10.3531 23.8998 10.0898 23.6932C8.65849 22.5768 7.49898 21.1503 6.69856 19.521C5.89814 17.8918 5.47766 16.1022 5.46874 14.287C5.42773 7.76548 10.7051 2.33775 17.2129 2.18736C18.8173 2.14719 20.4136 2.42881 21.9074 3.01559C23.4013 3.60238 24.7624 4.48245 25.9106 5.60386C27.0588 6.72528 27.9707 8.06532 28.5925 9.54491C29.2144 11.0245 29.5336 12.6137 29.5312 14.2186ZM25.0469 12.9335C24.7817 11.3705 24.0362 9.92899 22.914 8.80925C21.7918 7.68951 20.3487 6.94717 18.7851 6.68541C18.6433 6.66207 18.4983 6.66689 18.3583 6.69961C18.2183 6.73232 18.0862 6.79229 17.9694 6.87608C17.8526 6.95987 17.7534 7.06584 17.6776 7.18795C17.6017 7.31006 17.5507 7.44591 17.5273 7.58775C17.504 7.72959 17.5088 7.87463 17.5415 8.01461C17.5743 8.15458 17.6342 8.28674 17.718 8.40354C17.8018 8.52034 17.9078 8.61949 18.0299 8.69533C18.152 8.77117 18.2878 8.82222 18.4297 8.84556C19.5441 9.03213 20.5725 9.56184 21.3715 10.3608C22.1704 11.1598 22.7001 12.1882 22.8867 13.3026C22.9318 13.5561 23.0648 13.7855 23.2623 13.9506C23.4599 14.1156 23.7094 14.2057 23.9668 14.2049H24.1582C24.301 14.1819 24.4378 14.1305 24.5604 14.0536C24.683 13.9767 24.7888 13.8759 24.8717 13.7573C24.9546 13.6387 25.0128 13.5047 25.0429 13.3632C25.073 13.2216 25.0743 13.0755 25.0469 12.9335Z"*/}
          {/*    fill={`${isLight ? '#646464' : '#FFC700'}`}*/}
          {/*  />*/}
          {/*</svg>*/}
        </div>
      </div>
    </Link>
  );
};

export default PlantBox;
