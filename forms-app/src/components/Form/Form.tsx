import React from 'react';
import { useState } from 'react';
import * as yup from 'yup';
import { validSchema } from '../../Yup/validSchema';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormData, submitForm } from '../../redux/formSlice';
import { type RootState } from '../../redux/store/store';

import './Form.css';

interface IData {
  name: string;
  age: number;
  mail: string;
  pass1: string;
  pass2: string;
  gender: 'male' | 'female';
  accept: boolean;
}

interface IField {
  id: number;
  name: keyof IData;
  type: string;
  placeholder: string;
  label: string;
}

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

interface IFormProps {
  onSubmit: (data: IData) => void;
}

export function Form({ onSubmit }: IFormProps) {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState<IData>({
    name: '',
    age: 0,
    mail: '',
    pass1: '',
    pass2: '',
    gender: 'male',
    accept: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof IData, string>>>({});

  const reduxData = useSelector((state: RootState) => state.form.formData);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'number' ? Number(value) : value,
    }));

    const fieldValue = type === 'checkbox' ? checked : type === 'number' ? Number(value) : value;
    dispatch(updateFormData({ [name]: fieldValue }));
  };

  const isValidForm = async (): Promise<boolean> => {
    try {
      await validSchema.validate(formData, { abortEarly: false });
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const aErrors: Partial<Record<keyof IData, string>> = {};
        error.inner.forEach((err) => {
          if (err.path) {
            aErrors[err.path as keyof IData] = err.message;
          }
        });

        setErrors(aErrors);
      }
      return false;
    }
  };

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    const isValid = await isValidForm();

    if (isValid) {
      //  dispatch(updateFormData(reduxData));
      dispatch(submitForm(reduxData));
      //onSubmit(formData);

      if (onSubmit) {
        onSubmit(reduxData);
      }

      setFormData({
        name: '',
        age: 0,
        mail: '',
        pass1: '',
        pass2: '',
        gender: 'male',
        accept: false,
      });
    }
  };

  const setValues = () => {
    setFormData({
      name: 'Nn',
      age: 24,
      mail: 'name@mail.ex',
      pass1: 'Pp1%',
      pass2: 'Pp1%',
      gender: 'male',
      accept: true,
    });
  };

  const inputValue = (name: keyof IData) => {
    switch (name) {
      case 'name':
        return formData.name;
      case 'age':
        return formData.age;
      case 'mail':
        return formData.mail;
      case 'pass1':
        return formData.pass1;
      case 'pass2':
        return formData.pass2;
      case 'gender':
        return formData.gender;
    }
  };

  //   const inputValue = (name: keyof IData): string | number | boolean => {
  //   return reduxData[name];
  // };

  return (
    <form onSubmit={submitHandler}>
      {aFields.map((iField) => (
        <div className="input-box" key={iField.id}>
          <input
            className={`input ${errors[iField.name] ? 'input-error' : ''}`}
            name={iField.name}
            value={inputValue(iField.name)}
            type={iField.type}
            placeholder={iField.placeholder}
            onChange={(event) => changeHandler(event)}
            min={iField.name === 'age' ? 5 : ''}
            max={iField.name === 'age' ? 120 : ''}
          ></input>

          {iField.label && <p>{iField.label}</p>}

          {errors[iField.name] ? (
            <p className="input-message">{errors[iField.name]}</p>
          ) : (
            iField.label !== 'male' && <p className="input-message"></p>
          )}
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
