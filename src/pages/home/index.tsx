import Calender from '@components/common/calender';
import Layout from '@components/common/layout';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

interface Team {
  name: string;
  team: string;
  phone: string;
}

export default function Home() {
  const { register, handleSubmit } = useForm<Team>();

  const router = useRouter();
  const onSubmit = (data: Team) => console.log(data);
  return (
    <Layout>
      <form
        className="flex-col space-y-2 h-full justify-between items-center p-4 w-full bg-slate-100 rounded-sm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="my-8">
          대기중인 경기에 참여하거나 <br />
          새로운 경기를 만들어보세요!
        </h1>
        <div className="flex-col items-center">
          <Calender isEditable={false} />
        </div>

        <div className="flex-col items-center">
          <button
            onClick={() => router.push('/new/01')}
            className="mt-8 bg-amber-500 text-xs hover:bg-amber-600 w-full text-white font-medium py-2 px-4 rounded"
          >
            새로운 경기 만들기
          </button>
        </div>
      </form>
    </Layout>
  );
}
