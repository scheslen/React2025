import { useState } from 'react';
import './Form.css';

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
  const [valueAccept, setValueAccept] = useState('');

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
      placeholder: 'e-mail: name@mail.ex',
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
    if (isValidForm()) onSubmit();
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

      // case 'accept':
      //   setValueAccept(event.target.value);
      //   break;
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

  const isValidForm = () => {
    let flValid = true;
    let sError = '';

    aFields.map((iInput) => {
      console.log(iInput.name);
      sError = '';
      // const pInput = document.querySelector(
      //   `.register input[name="${iInput.name}"]`,
      // ) as HTMLInputElement;

      // if (pInput) {
      //   console.log (pInput)

      //   sError = validField(pInput.value, iInput.name);

      //   console.log(sError)

      if (sError) flValid = false;

      //   if (pInput.nextElementSibling)
      //     pInput.nextElementSibling.textContent = sError;
      // }
    });

    return flValid;
  };

  // function validField(value: string, name: string) {
  //   const reName = /^[a-z\s-]+$/i; // /^[A-Za-z]+$/
  //   const reEmail = /\w+@\w+\.[a-z]{2,3}/i;
  //   const rePassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/;

  //   let sError = '';

  //   if (!value) sError = 'Field is required';
  //   else {
  //     switch (name) {
  //       case 'name':
  //         if (!reName.test(value)) sError = 'Only latin letters, spaces, - , _. First letter must be uppercase';
  //         break;

  //       case 'age':
  //         if (Number(value) < 5) sError = 'The user must be over 5 years old';
  //         else if (Number(value) > 120) sError = 'Age cannot exceed 120 years';
  //         break;

  //       case 'email':
  //         if (!reEmail.test(value)) sError = 'Invalid email';
  //         break;

  //       case 'password':
  //         if (value.length < 4) sError = 'Password must contain at least 4 characters';
  //         else if (!rePassword.test(value))
  //           sError = 'Password must contain uppercase, lowercase, number, special character';
  //         break;
  //     }
  //   }
  //   return sError;
  // }

  const setValues = () => {
    setValueName('Nn');
    setValueAge('24');
    setValueMail('name@mail.ex');
    setValueGender('male');
    setValuePassword('Pp1%');
    setValueAccept('true');
  };

  return (
    <form onSubmit={submitHandler}>
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
            min={iField.name === 'age' ? 5 : ''}
            max={iField.name === 'age' ? 120 : ''}
          ></input>

          {iField.label && <p>{iField.label}</p>}

          {iField.label !== 'male' && <p className="input-message"></p>}
        </div>
      ))}

      <button className="btn" onClick={submitHandler}>
        Submit
      </button>
      <button type="button" className="btn" onClick={setValues}>
        Autocomplete
      </button>
    </form>
  );
}
