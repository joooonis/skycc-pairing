import Calender from '@components/common/calender';
import Layout from '@components/common/layout';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

interface Team {
  name: string;
  team: string;
  phone: string;
}

export default function New() {
  const { register, handleSubmit } = useForm<Team>();
  const router = useRouter();

  return (
    <Layout>
      <div className="flex-col space-y-2 h-full justify-between items-center p-4 w-full bg-slate-100 rounded-sm">
        <h1 className="my-8">가능한 날을 선택해주세요. </h1>
        <div className="flex-col items-center">
          <Calender />
        </div>

        <div className="flex-col items-center">
          <button
            onClick={() => router.push('/new/02')}
            className="mt-8 bg-amber-500 text-xs hover:bg-amber-600 w-full text-white font-medium py-2 px-4 rounded"
          >
            다음
          </button>
        </div>
      </div>
    </Layout>
  );
}
