import { useState } from 'react';
import './Forms.css';

interface IFormProps {
  onSubmit: () => void;
}

interface IField {
  id: number;
  name: string;
  type: string;
  placeholder: string;
  label: string;
}

export function Form({ onSubmit }: IFormProps) {
  const [valueName, setValueName] = useState('');
  const [valueAge, setValueAge] = useState('');
  const [valueMail, setValueMail] = useState('');
  const [valuePassWord, setValuePassword] = useState('');
  const [valueGender, setValueGender] = useState('male');
  const [valueAccept, setValueAccept] = useState('male');

  const aFields: IField[] = [
    {
      id: 1,
      name: 'name',
      type: 'text',
      placeholder: 'name: N',
      label: '',
    },
    {
      id: 2,
      name: 'age',
      type: 'number',
      placeholder: 'age: 24',
      label: '',
    },
    {
      id: 3,
      name: 'mail',
      type: 'text',
      placeholder: 'e-mail: name@mail.com',
      label: '',
    },
    {
      id: 4,
      name: 'pass1',
      type: 'password',
      placeholder: 'password: 1Pp%',
      label: '',
    },
    {
      id: 5,
      name: 'pass2',
      type: 'password',
      placeholder: 'password: 1Pp%',
      label: '',
    },
    {
      id: 6,
      name: 'gender',
      type: 'radio',
      placeholder: '',
      label: 'male',
    },
    {
      id: 7,
      name: 'gender',
      type: 'radio',
      placeholder: '',
      label: 'female',
    },
    {
      id: 8,
      name: 'accept',
      type: 'checkbox',
      placeholder: '',
      label: 'accept Terms and Conditions agreement ',
    },
  ];

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit();
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case 'name':
        setValueName(event.target.value);
        break;

      case 'age':
        setValueAge(event.target.value);
        break;

      case 'mail':
        setValueMail(event.target.value);
        break;

      case 'pass1':
      case 'pass2':
        setValuePassword(event.target.value);
        break;
      case 'gender':
        setValueGender(event.target.value);
        break;

      case 'accept':
        setValueAccept(event.target.value);
        break;
    }
  };

  const inputValue = (name: string) => {
    switch (name) {
      case 'name':
        return valueName;
      case 'age':
        return valueAge;
      case 'mail':
        return valueMail;
      case 'pass1':
      case 'pass2':
        return valuePassWord;
      case 'gender':
        return valueGender;
      case 'access':
        return valueAccept;
    }
  };

  // const changeHandlerAge = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setValueAge(event.target.value);
  // };

  return (
    <form onSubmit={submitHandler}>
      {/* <input className="input-name" placeholder='name' value={valueName} onChange={(event) => changeHandlerName(event)}></input>
      <input className="input-age" placeholder='age' value={valueAge} onChange={(event) => changeHandlerAge(event)}></input>
      <input className="input-mail" placeholder='age' value={valueAge} onChange={(event) => changeHandlerAge(event)}></input> */}

      {aFields.map((iField) => (
        <div className="input-box">
          <input
            className="input"
            name={iField.name}
            value={inputValue(iField.name)}
            type={iField.type}
            placeholder={iField.placeholder}
            onChange={(event) => changeHandler(event)}
            key={iField.id}
          ></input>

          {iField.label && <p>{iField.label}</p>}
        </div>
      ))}

      <button className="btn" onClick={submitHandler}>
        Submit
      </button>
    </form>
  );
}
