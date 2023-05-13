import Layout from '@components/common/layout';
import { useAppDispatch } from '@features/hooks';
import { setTime } from '@features/play/playSlice';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

export default function New() {
  const { register, handleSubmit } = useForm<Play>();
  const router = useRouter();
  const dispach = useAppDispatch();

  const onSubmit = (data: Play) => {
    const { time } = data;
    dispach(setTime(time));
    router.push({
      pathname: '/new/03',
    });
  };
  return (
    <Layout>
      <form
        className="flex-col h-full justify-between items-center p-4 w-full bg-slate-100 rounded-sm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <h1 className="mt-8">가능한 시간을 선택해주세요. </h1>
          <span className="text-xs text-gray-700 font-light">
            두 팀이 서로 만나는 시간입니다.
          </span>
        </div>
        <div className="flex-col mt-4 items-center">
          <input
            {...register('time')}
            type="time"
            className="border text-xs border-gray-300 rounded-md w-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-transparent"
          />
        </div>

        <div className="flex-col items-center">
          <button
            // onClick={() => router.push('/new/03')}
            className="mt-4 bg-amber-500 text-xs hover:bg-amber-600 w-full text-white font-medium py-2 px-4 rounded"
          >
            다음
          </button>
        </div>
      </form>
    </Layout>
  );
}
