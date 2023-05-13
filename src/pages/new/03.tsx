import Layout from '@components/common/layout';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface Team {
  name: string;
  team: string;
  phone: string;
}

export default function New() {
  const { register, handleSubmit } = useForm<Team>();
  const [player, setPlayer] = useState<number>(0);
  const router = useRouter();
  const onSubmit = (data: Team) => console.log(data);
  return (
    <Layout>
      <form
        className="flex-col h-full justify-between items-center p-4 w-full bg-slate-100 rounded-sm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <h1 className="mt-8">참여 인원을 알려주세요. </h1>
        </div>
        <div className="text-2xl flex mt-8 items-center justify-center w-full">
          {player}
          <span className=" text-gray-700 font-light">&nbsp; 명</span>
        </div>
        <div className="w-full mt-4 items-center justify-between flex ">
          <button
            className="border bg-amber-500 text-white text-xs  rounded-md w-[calc(50%-8px)] px-4 py-2 focus:outline-none "
            onClick={() => {
              if (player > 0) setPlayer(player - 1);
            }}
          >
            -
          </button>
          <button
            className="border bg-amber-500 text-white text-xs  rounded-md w-[calc(50%-8px)] px-4 py-2 focus:outline-none "
            onClick={() => setPlayer(player + 1)}
          >
            +
          </button>
        </div>
        <div className="flex-col items-center">
          <button
            onClick={() => router.push('/new/03')}
            className="mt-4 bg-amber-500 text-xs hover:bg-amber-600 w-full text-white font-medium py-2 px-4 rounded"
          >
            다음
          </button>
        </div>
      </form>
    </Layout>
  );
}