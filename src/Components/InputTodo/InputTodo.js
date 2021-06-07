import React, { useState } from 'react';
import style from './InputTodo.module.scss';

export default function InputTodo({ getInputText }) {
  const [inputText, setinputText] = useState('');

  const handleInputChange = date => {
    setinputText(date.target.value);
  };

  return (
    <form className={style.InputTodo__form}>
      <input
        className={style.InputTodo__input}
        autoFocus={true}
        type="text"
        name='title'
        required
        value={inputText}
        onChange={handleInputChange}
        onBlur={() => {
          getInputText('title', inputText);
        }}
      />
      <span className={style.InputTodo__bar}></span>
      <label className={style.InputTodo__label}>CREATE NEW QUEST</label>
    </form>
  );
}
