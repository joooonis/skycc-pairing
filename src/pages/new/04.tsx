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
      <div className="flex h-full justify-center items-center p-4 w-full bg-slate-100 rounded-sm">
        <div className="m-auto flex justify-center items-center bg-amber-500 w-full rounded-md">
          <h1 className="my-8 text-white">
            새로운 경기 등록이 완료되었습니다.{' '}
          </h1>
        </div>
      </div>
    </Layout>
  );
}
