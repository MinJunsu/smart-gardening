import { NextPage } from 'next';
import React from 'react';
import { useRouter } from 'next/router';
import Back from '../../../../components/back';
import DiaryBox from '../../../../components/diary-box';
import { useQuery } from 'react-query';
import { getDiary } from '../../../../components/api';
import Link from 'next/link';

interface DiaryResponse {
  id: number;
  image: string;
  title: string;
  description: string;
  created_at: string;
}

const Diary: NextPage = () => {
  const router = useRouter();
  const { data, isLoading } = useQuery<DiaryResponse[]>(['diary', router.query.id], () => getDiary(router.query.id));
  const section = router.query.section;
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <React.Fragment>
      <Back />
      <div className="w-4/5 h-5/6 m-auto overflow-y-scroll  bg-white scrollbar-hide rounded-2xl">
        <div className="flex flex-col w-full h-full">
          <h2 className="flex justify-center text-lg font-light py-2">{section} 구역</h2>
          <div className="w-full  flex justify-end px-5">
            <Link
              href={{
                pathname: `/lists/${router.query.id}/diary/create`,
                query: { section },
              }}
            >
              <a className="w-5 h-5 bg-[#646464] rounded-full flex justify-center items-center rounded-full text-sm font-normal text-white">
                +
              </a>
            </Link>
          </div>
          <div className="flex flex-row mt-5">
            <div className="relative w-6">
              <div className="absolute my-3 h-full w-1 bg-gray-200 mx-5 rounded-full" />
            </div>

            <div className="flex flex-col space-y-4">
              {data?.map((diary) => {
                return (
                  <DiaryBox
                    key={diary.id}
                    date={diary.created_at.slice(0, 10)}
                    image={diary.image}
                    title={diary.title}
                    description={diary.description}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Diary;
