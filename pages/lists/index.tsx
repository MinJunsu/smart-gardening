import type { NextPage } from 'next';
import PlantBox from '../../components/plant-box';
import { useQuery } from 'react-query';
import { getGardens } from '../../components/api';

interface Garden {
  id: number;
  image: string;
  section: number;
  name: string;
  is_turn_on: boolean;
  is_water: boolean;
}

const Lists: NextPage = () => {
  const { data, isLoading } = useQuery<Garden[]>('gardens', () => getGardens(), { refetchInterval: 1000 * 5 });
  console.log(data);
  return (
    <div className="flex flex-col gap-5 mt-10 overflow-y-scroll">
      {data?.map((garden) => {
        return (
          <PlantBox
            key={garden.id}
            num={garden.section}
            src={garden.image}
            district={`${garden.section} 구역`}
            title={garden.name}
            isWatered={garden.is_water}
            isLighted={garden.is_turn_on}
          />
        );
      })}
    </div>
  );
};

export default Lists;
