import React, { useState } from 'react';
import style from './InputTodo.module.scss';

export default function InputTodo({ title, getInputText }) {
  
  const [inputText, setinputText] = useState(null);

  const handleInputChange = date => {
    setinputText(date.target.value);
  };

  return (
    <form className={style.InputTodo__form}>
      <input
        className={style.InputTodo__input}
        autoFocus={false}
        type="text"
        name="title"
        required
        value={inputText===null ? title: inputText}
        onChange={handleInputChange}
        onBlur={() => {
          getInputText('title', inputText);
        }}
      />
      <span className={style.InputTodo__bar}></span>
      <label className={style.InputTodo__label}>{`${title ? "EDIT QUEST": "CREATE NEW QUEST"} `}</label>
    </form>
  );
}
