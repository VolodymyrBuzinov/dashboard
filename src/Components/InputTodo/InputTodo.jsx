import React, { useState } from 'react';
import { useEffect } from 'react';
import style from './InputTodo.module.scss';

export default function InputTodo({ title, getInputText, cb, isEdit }) {
  const [inputText, setinputText] = useState('');

  useEffect(() => {    
    if (isEdit) setinputText(title);
  }, [isEdit]);

  const handleInputChange = event => {
    event.preventDefault();
    setinputText(event.target.value);
  };

  return (
    <form className={style.InputTodo__form}>
      <input
                className={style.InputTodo__input}
        autoFocus={true}
        type="text"
        name="title"
        required
        value={isEdit ? inputText : title}
        onChange={handleInputChange}
        onBlur={() => {
          getInputText('title', inputText, cb);
        }}
      />
      <span className={style.InputTodo__bar}></span>
      <label className={style.InputTodo__label}>{`${
        isEdit ? 'EDIT QUEST' : 'CREATE NEW QUEST'
      } `}</label>
    </form>
  );
}
