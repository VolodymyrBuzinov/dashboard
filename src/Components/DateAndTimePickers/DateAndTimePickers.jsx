import { useState, useEffect, useRef } from 'react';
import style from './DateAndTimePickers.module.scss';

export default function DateAndTimePickers({
  isChallenge,
  time,
  getDate,
  cb,
  isEdit,
  day,
  dayName,
}) {
  const [selectedDate, setSelectedDate] = useState('');

  const inputEl = useRef(null);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Enter') {
        inputEl.current.blur();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isEdit]);

  const handleDateChange = date => {
    setSelectedDate(date.target.value);
  };

  return (
    <form className={style.DateAndTimePickers__form}>
      <p className={style.DateAndTimePickers__text}>
        {selectedDate &&
          `${selectedDate.slice(0, 10)}, ${selectedDate.slice(11)}`}
        {!time && !selectedDate && !isChallenge && `Today`}
        {time && !selectedDate && !isChallenge && `${day}, ${time.slice(11)}`}
        {isChallenge && !selectedDate && !time && `by Today`}
        {isChallenge && !selectedDate && time && `by ${dayName}`}
      </p>

      <input
        ref={inputEl}
        // isChallenge
        className={
          selectedDate && isChallenge
            ? `${style.DateAndTimePickers__input}  ${style.active}   ${style.isChallenge} `
            : style.DateAndTimePickers__input
        }
        type="datetime-local"
        name="dateCreate"
        required
        step="0"
        min="2021-06-01T08:00"
        max="2022-06-30T21:00"
        value={isEdit ? selectedDate : time}
        onChange={handleDateChange}
        onBlur={() => {
          getDate('time', selectedDate, cb);
        }}
      />
    </form>
  );
}
