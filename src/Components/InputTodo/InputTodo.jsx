import React, { useState, useRef } from 'react';
import { useEffect } from 'react';
import style from './InputTodo.module.scss';

export default function InputTodo({ title, getInputText, cb, isEdit, challenge }) {
  const [inputText, setinputText] = useState('');

  const inputEl = useRef(null);

  useEffect(() => {
    if (isEdit) setinputText(title);
  }, [isEdit, title]);

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

  const handleInputChange = event => {
    setinputText(event.target.value);
  };

  return (
    <div className={style.InputTodo__form}>
      <input
        ref={inputEl}
        className={challenge ? style.InputTodo__input__challenge : style.InputTodo__input}
        autoFocus={true}
        autoComplete="off"
        type="text"
        name="title"
        required
        maxLength="30"
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
    </div>
  );
}
