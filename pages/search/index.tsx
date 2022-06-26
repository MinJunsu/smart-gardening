import type { NextPage } from 'next';
import { useState } from 'react';
import PlantDataBox from '../../components/plant-data-box';
import Head from 'next/head';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { getFlowersList } from '../../components/api';

interface SearchForm {
  word: string;
}

interface Flower {
  id: number;
  name: string;
  content: string;
  main_image: string;
}

interface FlowersResponse {
  count: number;
  next: number | null;
  previous: number | null;
  results: Flower[];
}

const Search: NextPage = () => {
  const { register, handleSubmit, reset } = useForm<SearchForm>();
  const [word, setWord] = useState<string>();
  const { data, isLoading } = useQuery<FlowersResponse>(['flowers', word], () => getFlowersList(word));
  const onValid = (data: SearchForm) => {
    setWord(data.word);
    reset();
  };
  return (
    <div className="flex flex-col w-full">
      <Head>
        <title>식물 도감</title>
      </Head>
      <form onSubmit={handleSubmit(onValid)} className="flex flex-row w-4/5 m-auto my-8 bg-white h-12 rounded-full items-center">
        <svg className="mx-5" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.90878 15.625C13.5332 15.625 16.4713 12.6869 16.4713 9.0625C16.4713 5.43813 13.5332 2.5 9.90878 2.5C6.28441 2.5 3.34628 5.43813 3.34628 9.0625C3.34628 12.6869 6.28441 15.625 9.90878 15.625Z"
            stroke="#BABABA"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M14.5494 13.7031L18.3463 17.5" stroke="#BABABA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <input
          {...register('word', {
            required: true,
            minLength: 3,
          })}
          className="outline-none flex-1 pr-3 placeholder:text-lg placeholder:flex placeholder:items-center"
          type="text"
          placeholder="검색"
        />
        <input type="submit" className="hidden" />
      </form>
      <div className="w-full flex flex-col gap-3">
        {isLoading || data?.count === 0 ? (
          <div className="w-full h-96 flex justify-center items-center">
            <span className="text-2xl font-semibold text-gray-500">내용이 없습니다.</span>
          </div>
        ) : (
          data?.results?.map((flower) => {
            console.log(flower.main_image);
            return <PlantDataBox key={flower.id} num={flower.id} src={'/img.png'} title={flower.name} description={flower.content} />;
          })
        )}
      </div>
    </div>
  );
};

export default Search;
