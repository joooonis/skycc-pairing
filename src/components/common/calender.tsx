import { useEffect, useState } from 'react';
import { formatDate } from '@utils/calender';
import { useAppDispatch, useAppSelector } from '@features/hooks';

export default function Calender() {
  const [date, setDate] = useState(new Date());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [days, setDays] = useState<any[]>([]);
  const [chosenDays, setChosenDays] = useState<boolean[]>([]);
  const dispatch = useAppDispatch();
  const playState = useAppSelector((state) => state.play);

  useEffect(() => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const firstDayIndex = firstDay.getDay();
    const lastDayIndex = lastDay.getDay();
    const numberOfDays = lastDay.getDate();
    const daysArray = [];

    for (let i = 1; i <= numberOfDays; i++) {
      daysArray.push(i);
    }

    for (let i = 0; i < firstDayIndex; i++) {
      daysArray.unshift('');
    }

    for (let i = lastDayIndex; i < 6; i++) {
      daysArray.push('');
    }

    setDays(daysArray);
    const chosenDaysArray = daysArray.map((day) => {
      if (day !== '') return false;
    });
  }, [month, year, playState.date]);

  const nextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const prevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const handleWeekDayClick = (index: number) => {
    const newChosenDays = [...chosenDays].map(() => false);
    newChosenDays[index] = !newChosenDays[index];
    setChosenDays(newChosenDays);
  };

  return (
    <div className="w-full flex flex-col items-center bg-orange-50 p-4 rounded-md">
      <div className="flex w-full justify-between items-center">
        <span className="text-primary-green-3">
          {year}년 {month + 1}월
        </span>
        <div className="text-primary-green-3 cursor-pointer flex">
          <svg
            onClick={prevMonth}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-4 h-4 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          <svg
            onClick={nextMonth}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-3 w-full mt-2 text-h3 p-4 rounded-lg text-primary-green-3 bg-secondary-orange-3">
        {['일', '월', '화', '수', '목', '금', '토'].map((day, index) => (
          <div
            className="py-[2px] rounded-full flex items-center justify-center"
            key={index}
          >
            {day}
          </div>
        ))}
        {days.map((day, index) => (
          <div
            key={index}
            onClick={
              day === ''
                ? () => console.log('')
                : () => handleWeekDayClick(index)
            }
            className={`relative rounded-full flex items-center py-1 justify-center transition ${
              day === '' ? '' : 'cursor-pointer'
            }
            ${chosenDays[index] ? 'bg-amber-500 text-white' : ''}
            `}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}
