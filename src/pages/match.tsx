import Layout from '@components/common/layout';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Calender from '@components/common/calender';

interface Team {
  name: string;
  team: string;
  phone: string;
}

export default function New() {
  const { register, handleSubmit } = useForm<Team>();
  const [plays, setPlays] = useState([]);
  useEffect(() => {
    fetch('/api/play')
      .then((res) => res.json())
      .then((res) => setPlays(res.plays));
  }, []);

  const [match, setMatch] = useState('');

  const router = useRouter();
  return (
    <Layout>
      <div className="flex-col h-full justify-center items-center p-4 w-full bg-slate-100 rounded-sm">
        <div>
          <h1 className="my-8">
            대기중인 경기에 참여하거나 <br />
            새로운 경기를 만들어 보세요!
          </h1>
        </div>
        <Calender />
        <div className="flex-col space-y-1 mt-6 text-sm">
          경기 정보
          {plays?.map((play) => (
            <div
              key={play.id}
              onClick={() => setMatch(play.id)}
              className={`${
                match === play.id && 'border-2 border-amber-500'
              } m-auto flex-col p-2 items-center bg-orange-50 w-full rounded-md`}
            >
              <div>{play.date.slice(6, 7) + '/' + play.date.slice(8, 10)}</div>
              <h1 className="my-2">
                {play.team}{' '}
                <span
                  className={`${play.school === '고려대학교' && 'bg-amber-500'} 
                  ${play.school === '연세대학교' && 'bg-sky-400'} 
                  ${play.school === '서울대학교' && 'bg-indigo-900 '} 
                  rounded-sm text-white px-2 py-1 text-[8px]`}
                >
                  {play.school}
                </span>
              </h1>{' '}
              <h1 className="my-2">{play.time}</h1>
            </div>
          ))}
          <button
            className={`${
              match === '' && 'opacity-50'
            } mt-4 bg-amber-500 text-xs hover:bg-amber-600 w-full text-white font-medium py-2 px-4 rounded`}
          >
            경기 참여하기
          </button>
        </div>
      </div>
    </Layout>
  );
}
