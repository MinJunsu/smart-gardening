import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface IPlantDataBoxProps {
  num: number;
  src: string;
  title: string;
  description: string;
}

const PlantDataBox: React.FC<IPlantDataBoxProps> = ({ num, src, title, description }) => {
  return (
    <Link href={`/search/${num}`}>
      <div className="w-4/5 h-24 m-auto flex flex-row justify-between items-center bg-white px-4 rounded-3xl shadow-lg select-none cursor-pointer">
        <div className="basis-1/5  flex items-center">
          <Image className="rounded-full" src={src} height={72} width={72} />
        </div>
        <div className="basis-4/5 ml-3 flex flex-col">
          <h1 className="font-semibold text-lg">{title}</h1>
          <p className="text-xs text-ellipsis line-clamp-3 text-gray-500">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default PlantDataBox;
