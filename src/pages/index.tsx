import Layout from '@components/common/layout';
import { useForm } from 'react-hook-form';

export default function Home() {
  const { register, handleSubmit } = useForm<Team>();
  const onSubmit = (data: Team) => console.log(data);
  return (
    <Layout>
      <form
        className="flex-col space-y-2 h-full justify-between items-center p-4 w-full bg-slate-100 rounded-sm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex-col items-center">
          <label className="mr-2 text-xs">동아리 이름</label>
          <input
            {...register('name')}
            type="text"
            className="border text-xs mt-2 h-9 w-full border-gy-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-transparent"
          ></input>
        </div>
        <div className="flex-col items-center">
          <label className="mr-2 text-xs">이름</label>
          <input
            {...register('name')}
            type="text"
            className="border text-xs mt-2 h-9 w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-transparent"
          ></input>
        </div>
        <div className="flex-col items-center">
          <label className="mr-2 text-xs">연락처</label>
          <input
            {...register('name')}
            type="text"
            className="border text-xs mt-2 h-9 w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-transparent"
          ></input>
          <button className="mt-8 bg-amber-500 text-xs hover:bg-amber-600 w-full text-white font-medium py-2 px-4 rounded">
            확인
          </button>
        </div>
      </form>
    </Layout>
  );
}
