import React, { useState } from 'react';
import style from './InputTodo.module.scss';

export default function InputTodo() {
  const [input, setInput] = useState('');

  const handleInputChange = date => {
    setInput(date.target.value);
  };

  // const handleSubmit = useCallback(e => {
  //   e.preventDefault();

  //   console.log('run handleSubmit');
  // }, []);

  const handleSubmit = e => {
    e.preventDefault();

    console.log('run handleSubmit e =', e);
  };

  return (
    // <form className={style.InputTodo__form} onSubmit={handleSubmit}>
    //   <input
    //     className={style.InputTodo__input}
    //     type="text"
    //     value={input}
    //     placeholder="Create New Quest"
    //     onChange={handleInputChange}
    //   />
    // </form>

    <form className={style.InputTodo__form} onSubmit={handleSubmit}>
      <input
        className={style.InputTodo__input}
        type="text"
        required
        value={input}
        onChange={handleInputChange}
      />
      <span className={style.InputTodo__bar}></span>
      <label className={style.InputTodo__label}>CREATE NEW QUEST</label>
    </form>
  );
}
