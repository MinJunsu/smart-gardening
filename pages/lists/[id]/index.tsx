import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useQuery } from 'react-query';
import Link from 'next/link';
import { getGarden, waterCommand } from '../../../components/api';
import axios from 'axios';

interface GardenResponse {
  id: number;
  image: string;
  section: string;
  name: string;
  period: number;
  humidity: number;
  is_water: boolean;
  is_turn_on: boolean;
}

const ListDetail: React.FC = () => {
  const router = useRouter();
  const { data, isLoading } = useQuery<GardenResponse>(['garden', router.query.id], () => getGarden(router.query.id));

  if (isLoading) {
    return <div></div>;
  }

  const onWaterClick = async () => {
    await waterCommand(data?.id, {
      location: data?.section,
      command: 'water',
      command_kor: `${data?.id}번 위치에 물주기를 완료하였습니다! `,
      is_done: false,
    });
  };

  return (
    <div className="w-full h-full py-5">
      <div className="flex flex-col w-4/5 h-5/6 m-auto bg-white items-center justify-evenly rounded-3xl shadow-2xl gap-2">
        <div onClick={router.back} className="w-full flex items-center mt-3 ml-3 select-none cursor-pointer">
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
        <span className="block text-xl text-gray-500  font-normal">{data?.section} 구역</span>
        <div className="relative">
          <Image className="rounded-2xl" src={data?.image ?? ''} width={200} height={200} />
          <div className="absolute -right-4 -bottom-4 rounded-full bg-white w-12 h-12 shadow-xl">
            <div className="w-full h-full flex justify-center items-center">
              <svg className="w-6 h-6" width="25" height="31" viewBox="0 0 25 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19.0625 29.7186C19.0625 30.0087 18.9473 30.2869 18.7421 30.492C18.537 30.6971 18.2588 30.8124 17.9687 30.8124H7.03124C6.74116 30.8124 6.46296 30.6971 6.25784 30.492C6.05273 30.2869 5.93749 30.0087 5.93749 29.7186C5.93749 29.4285 6.05273 29.1503 6.25784 28.9452C6.46296 28.7401 6.74116 28.6249 7.03124 28.6249H17.9687C18.2588 28.6249 18.537 28.7401 18.7421 28.9452C18.9473 29.1503 19.0625 29.4285 19.0625 29.7186ZM24.5312 12.2186C24.5349 14.041 24.123 15.8403 23.327 17.4796C22.531 19.119 21.3718 20.5554 19.9375 21.6795C19.6666 21.884 19.4467 22.1484 19.2949 22.452C19.1431 22.7556 19.0635 23.0901 19.0625 23.4295V24.2499C19.0625 24.83 18.832 25.3864 18.4218 25.7967C18.0116 26.2069 17.4552 26.4374 16.875 26.4374H8.12499C7.54483 26.4374 6.98843 26.2069 6.5782 25.7967C6.16796 25.3864 5.93749 24.83 5.93749 24.2499V23.4295C5.93656 23.0949 5.8598 22.7648 5.71299 22.4641C5.56617 22.1633 5.35312 21.8998 5.08984 21.6932C3.65849 20.5768 2.49898 19.1503 1.69856 17.521C0.898144 15.8918 0.477658 14.1022 0.468743 12.287C0.427728 5.76548 5.70507 0.33775 12.2129 0.187359C13.8173 0.147188 15.4136 0.428805 16.9074 1.01559C18.4013 1.60238 19.7624 2.48245 20.9106 3.60386C22.0588 4.72528 22.9707 6.06532 23.5925 7.54491C24.2144 9.0245 24.5336 10.6137 24.5312 12.2186ZM20.0469 10.9335C19.7817 9.37051 19.0362 7.92899 17.914 6.80925C16.7918 5.68951 15.3487 4.94717 13.7851 4.68541C13.6433 4.66207 13.4983 4.66689 13.3583 4.69961C13.2183 4.73232 13.0862 4.79229 12.9694 4.87608C12.8526 4.95987 12.7534 5.06584 12.6776 5.18795C12.6017 5.31006 12.5507 5.44591 12.5273 5.58775C12.504 5.72959 12.5088 5.87463 12.5415 6.01461C12.5743 6.15458 12.6342 6.28674 12.718 6.40354C12.8018 6.52034 12.9078 6.61949 13.0299 6.69533C13.152 6.77117 13.2878 6.82222 13.4297 6.84556C14.5441 7.03213 15.5725 7.56184 16.3715 8.36081C17.1704 9.15978 17.7001 10.1882 17.8867 11.3026C17.9318 11.5561 18.0648 11.7855 18.2623 11.9506C18.4599 12.1156 18.7094 12.2057 18.9668 12.2049H19.1582C19.301 12.1819 19.4378 12.1305 19.5604 12.0536C19.683 11.9767 19.7888 11.8759 19.8717 11.7573C19.9546 11.6387 20.0128 11.5047 20.0429 11.3632C20.073 11.2216 20.0743 11.0755 20.0469 10.9335V10.9335Z"
                  fill={`${data?.is_turn_on ? '#FFC700' : '#646464'}`}
                />
              </svg>
            </div>
          </div>
        </div>
        <h2 className="text-xl font-normal text-gray-500">{data?.name}</h2>
        <span className="text-md font-light text-gray-400">물주기: {data?.period}일</span>
        <div className="relative w-36 h-36 flex flex-col justify-center items-center">
          <div className="z-0 absolute w-full h-full bg-[#ECF1FA] rounded-full blur-md opacity-90" />
          <div className="z-10 flex flex-col justify-center items-center gap-1">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M27.1875 7.46852C25.256 5.23909 23.0869 3.22717 20.7188 1.46852C20.5074 1.32272 20.2567 1.24463 20 1.24463C19.7433 1.24463 19.4926 1.32272 19.2812 1.46852C16.9131 3.22717 14.744 5.23909 12.8125 7.46852C8.51562 12.3904 6.25 17.5935 6.25 22.4998C6.25 26.1465 7.69866 29.6439 10.2773 32.2225C12.8559 34.8011 16.3533 36.2498 20 36.2498C23.6467 36.2498 27.1441 34.8011 29.7227 32.2225C32.3013 29.6439 33.75 26.1465 33.75 22.4998C33.75 17.5935 31.4844 12.3904 27.1875 7.46852ZM28.625 23.9685C28.3219 25.7547 27.4699 27.4022 26.1874 28.6819C24.9049 29.9616 23.2556 30.81 21.4687 31.1091H21.2656C20.9507 31.1107 20.6467 30.9933 20.4146 30.7805C20.1825 30.5676 20.0393 30.2749 20.0136 29.961C19.9879 29.6471 20.0817 29.3351 20.2762 29.0873C20.4706 28.8396 20.7515 28.6744 21.0625 28.6248C22.3361 28.4116 23.5114 27.8062 24.4245 26.8931C25.3377 25.9799 25.943 24.8046 26.1562 23.531C26.1845 23.3687 26.2446 23.2136 26.3331 23.0746C26.4215 22.9356 26.5366 22.8154 26.6716 22.721C26.8067 22.6266 26.959 22.5599 27.12 22.5246C27.2809 22.4893 27.4472 22.4862 27.6094 22.5154C27.7726 22.5417 27.9289 22.6005 28.069 22.6884C28.2091 22.7763 28.3301 22.8914 28.4248 23.0269C28.5196 23.1625 28.5861 23.3157 28.6205 23.4774C28.6549 23.6392 28.6564 23.8062 28.625 23.9685Z"
                fill={`${data?.is_water ? '#698acb' : '#646464'}`}
              />
            </svg>
            <span className="font-thin text-xl text-gray-600">{data?.humidity}%RH</span>
          </div>
        </div>
        <button
          onClick={onWaterClick}
          className="w-24 h-10 border-gray-300 border-[2px] border-opacity-30 rounded-full shadow-2xl text-gray-400 text-md hover:text-gray-500 hover:border-gray-500 hover:border-opacity-60 select-none"
        >
          물주기
        </button>
        <div className="flex flex-row justify-end items-end gap-3 pb-2 text-sm">
          <Link
            href={{
              pathname: `/lists/${data?.id}/timelapse`,
              query: { section: data?.section },
            }}
          >
            <a className="text-gray-400 border-b-[1px] border-gray-400 select-none cursor-pointer">타임랩스 보기</a>
          </Link>
          <Link
            href={{
              pathname: `/lists/${data?.id}/diary`,
              query: { section: data?.section },
            }}
          >
            <a className="text-gray-400 border-b-[1px] border-gray-400 select-none cursor-pointer">식물일기</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListDetail;
