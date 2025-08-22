import { useState } from 'react';
import './Forms.css';

const submitHandler = (event: React.FormEvent) => {
  event.preventDefault();
};

export function Form() {
  const [value, setValue] = useState('*');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input className="input-name" value={value} onChange={(event) => changeHandler(event)}></input>
      <button className="btn">OK</button>
    </form>
  );
}
