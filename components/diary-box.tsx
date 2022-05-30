import React from 'react';
import Image from 'next/image';

interface DiaryBoxProps {
  image: string;
  date: string;
  title: string;
  description: string;
}

const DiaryBox: React.FC<DiaryBoxProps> = ({ image, date, title, description }) => {
  return (
    <div className="flex flex-col mx-5">
      <div className="flex flex-col">
        <div className="relative">
          <div className="absolute w-4 h-4 rounded-full bg-gray-300 top-1 -left-7" />
        </div>
        <span className="text-gray-500 text-sm mb-1">{date}</span>
      </div>
      <div className="flex flex-row space-x-4">
        <div className="basis-1/3">
          <Image className="rounded-2xl" src={image} width={200} height={200} />
        </div>
        <div className="basis-2/3 flex flex-col">
          <h2 className="text-sm">{title}</h2>
          <p className="text-xs">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default DiaryBox;
