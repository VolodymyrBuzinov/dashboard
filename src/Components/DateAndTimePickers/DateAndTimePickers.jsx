import { useState } from 'react';
import style from './DateAndTimePickers.module.scss';

export default function DateAndTimePickers({ getDate }) {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = date => {
    setSelectedDate(date.target.value);
  };

  return (
    <form className={style.DateAndTimePickers__form}>
      <input
        className={
          selectedDate
            ? `${style.DateAndTimePickers__input}  ${style.active}`
            : style.DateAndTimePickers__input 
        }
        type="datetime-local"
        name="dateCreate"
        required
        min="2021-06-01T08:00"
        max="2022-06-30T21:00"
        value={selectedDate}
        onChange={handleDateChange}
        onBlur={() => {
          getDate('time',selectedDate);
        }}
      />
    </form>
  );
}
