import Layout from '@components/common/layout';
import { useAppSelector } from '@features/hooks';
import useMutation from '@libs/client/useMutation';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface Team {
  name: string;
  team: string;
  phone: string;
}

export default function New() {
  const { register, handleSubmit } = useForm<Team>();
  const playState = useAppSelector((state) => state.play);
  const teamState = useAppSelector((state) => state.team);
  const [createTeam, { loading, data }] = useMutation('/api/team');

  useEffect(() => {
    if (teamState) {
      fetch('/api/team', {
        method: 'POST',
        body: JSON.stringify(teamState),
      });

      fetch('/api/hello')
        .then((res) => res.json())
        .then((res) => console.log(res));
    }
  }, [teamState]);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  const router = useRouter();
  return (
    <Layout>
      <div className="flex h-full justify-center items-center p-4 w-full bg-slate-100 rounded-sm">
        <div
          onClick={() => router.push('/match')}
          className="m-auto flex justify-center items-center bg-amber-500 w-full rounded-md"
        >
          <h1 className="my-8 text-white">
            새로운 경기 등록이 완료되었습니다.{' '}
          </h1>
        </div>
      </div>
    </Layout>
  );
}
