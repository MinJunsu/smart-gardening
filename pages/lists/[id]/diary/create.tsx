import { NextPage } from 'next';
import React from 'react';
import Back from '../../../../components/back';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { createDiary } from '../../../../components/api';

interface DiaryForm {
  image: File;
  title: string;
  description: string;
}

const DiaryCreate: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<DiaryForm>();
  const onValid = (data: DiaryForm) => {
    createDiary(router.query.id, data);
  };
  const onError = () => {
    alert('모든 내용을 작성해주세요!');
  };
  const section = router.query.section;
  return (
    <React.Fragment>
      <Back />
      <div className="w-4/5 h-5/6 m-auto overflow-y-hide  bg-white  rounded-2xl">
        <form onSubmit={handleSubmit(onValid, onError)} className="flex flex-col w-full">
          <h2 className="flex justify-center text-lg font-light py-2">{section} 구역</h2>
          <div className="w-full flex justify-center">
            <div className="w-2/5 aspect-square shadow-[inset_0_6px_20px_0_rgba(0,0,0,0.25)]">
              <div className="w-full h-full flex justify-center items-center">
                <label className="w-6 h-6 bg-[#646464] rounded-full">
                  <span className="w-full h-full flex justify-center items-center font-medium text-white">+</span>
                  <input {...register('image')} className="hidden" type="file" accept="image/*" />
                </label>
              </div>
            </div>
          </div>

          <div className="w-4/5 m-auto flex flex-col space-y-4">
            <div className="flex flex-col gap-1">
              <span className="text-sm text-gray-500">제목</span>
              <input
                {...register('title', { required: true, minLength: 5 })}
                type="text"
                className="px-3 py-1 outline-none shadow-[inset_0_4px_5px_0_rgba(0,0,0,0.25)]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm text-gray-500">내용</span>
              <textarea
                {...register('description', { required: true, minLength: 5 })}
                className="px-3 py-1 h-52 outline-none resize-none shadow-[inset_0_4px_5px_0_rgba(0,0,0,0.25)]"
              />
            </div>
          </div>
          <input
            className="shadow-[inset_0_3px_10px_0_rgba(0,0,0,0.25)] m-auto my-3 w-24 h-8 rounded-2xl text-sm text-gray-500"
            type="submit"
            value="일기 등록"
          />
        </form>
      </div>
    </React.Fragment>
  );
};

export default DiaryCreate;
