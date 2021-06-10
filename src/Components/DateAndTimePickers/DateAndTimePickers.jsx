import { useState } from 'react';
import style from './DateAndTimePickers.module.scss';

export default function DateAndTimePickers({ getDate, cb }) {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = date => {
    console.log(
      '🚀 ~ file: DateAndTimePickers.jsx ~ line 8 ~ DateAndTimePickers ~ date',
      date,
    );

    setSelectedDate(date.target.value);
  };

  return (
    <form className={style.DateAndTimePickers__form}>
      {/* <div>

      </div> */}
      <input
        className={
          selectedDate
            ? `${style.DateAndTimePickers__input}  ${style.active}`
            : style.DateAndTimePickers__input
        }
        type="datetime-local"
        name="dateCreate"
        required
        step="0"
        min="2021-06-01T08:00"
        max="2022-06-30T21:00"
        value={selectedDate}
        onChange={handleDateChange}
        onBlur={() => {
          getDate('time', selectedDate, cb);
        }}
      />
    </form>
  );
}
