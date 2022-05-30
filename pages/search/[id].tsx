import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { getFlowerDetail } from '../../components/api';

interface FlowerResponse {
  id: number;
  name: string;
  month: number;
  day: number;
  flower_language: string;
  content: string;
  usage: string;
  growth: string;
  main_image: string;
}

const SearchDetail: NextPage = () => {
  const router = useRouter();
  const { data, isLoading } = useQuery<FlowerResponse>(['flower', router.query.id], () => getFlowerDetail(router.query.id));
  return (
    <div className="w-full h-full py-5">
      <div className="w-4/5 h-5/6 m-auto overflow-y-scroll bg-white rounded-xl shadow-2xl  scrollbar-hide">
        <div className="w-full h-full flex flex-col">
          <div onClick={router.back} className="flex items-center h-10 ml-3 select-none cursor-pointer">
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
          <div className="flex justify-center">
            <Image src={'/img.png'} width={180} height={180} />
          </div>
          <h2 className="text-xl font-normal flex justify-center items-center">{data?.name}</h2>
          <h3 className="text-lg text-blue-300 font-normal flex justify-center items-center">{data?.flower_language}</h3>
          <span className="my-1 text-md font-bold flex justify-center">내용</span>
          <p className="text-xs mx-3">{data?.content}</p>
          <span className="my-1 text-md font-bold flex justify-center">기르는 방법</span>
          <p className="text-xs mx-3">{data?.growth}</p>
          <span className="my-1 text-md font-bold flex justify-center">사용법</span>
          <p className="text-xs mx-3 mb-3">{data?.usage}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchDetail;
