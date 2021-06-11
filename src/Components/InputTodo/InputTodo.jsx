import React, { useState, useRef } from 'react';
import { useEffect } from 'react';
import style from './InputTodo.module.scss';

export default function InputTodo({ title, getInputText, cb, isEdit }) {
  const [inputText, setinputText] = useState('');

  const inputEl = useRef(null);

  useEffect(() => {
    if (isEdit) setinputText(title);
  }, [isEdit]);

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
        className={style.InputTodo__input}
        autoFocus={true}
        autocomplete="off"
        type="text"
        name="title"
        required
        maxlength="30"
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
