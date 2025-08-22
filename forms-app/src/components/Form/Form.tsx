import { useState } from 'react';
import './Forms.css';


interface IFormProps{
  onSubmit: ()=> void;
}

export function Form({onSubmit} : IFormProps) {
  const [value, setValue] = useState('*');

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit();
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input className="input-name" value={value} onChange={(event) => changeHandler(event)}></input>
      <button className="btn" onClick={submitHandler}>OK</button>
    </form>
  );
}
