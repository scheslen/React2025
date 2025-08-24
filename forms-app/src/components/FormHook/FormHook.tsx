import { useForm } from 'react-hook-form';
import './FormHook.css';

interface IFormProps {
  onSubmit: (data: IFormData) => void;
}

interface IFormData {
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
  name: keyof IFormData;
  type: string;
  placeholder: string;
  label: string;
  validation?: object;
}

export function FormHook({ onSubmit }: IFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset
  } = useForm<IFormData>({
    mode: 'onChange',
    defaultValues: {
      gender: 'male',
      accept: false
    }
  });

  const password = watch('pass1');

  const aFields: IField[] = [
    {
      id: 1,
      name: 'name',
      type: 'text',
      placeholder: 'name: Nn',
      label: '',
      validation: {
        required: 'Name is required',
        minLength: {
          value: 2,
          message: 'Name must be at least 2 characters'
        },
        pattern: {
          value: /^[A-Z][a-zA-Z\s-]+$/,
          message: 'Only latin letters, spaces, - , _. First letter must be uppercase'
        }
      }
    },
    {
      id: 2,
      name: 'age',
      type: 'number',
      placeholder: 'age: 24',
      label: '',
      validation: {
        required: 'Age is required',
        min: {
          value: 5,
          message: 'Age must be  > 5'
        },
        max: {
          value: 120,
          message: 'Age must be < 120'
        }
      }
    },
    {
      id: 3,
      name: 'mail',
      type: 'email',
      placeholder: 'e-mail: name@mail.com',
      label: '',
      validation: {
        required: 'Email is required',
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: 'Invalid email address'
        }
      }
    },
    {
      id: 4,
      name: 'pass1',
      type: 'password',
      placeholder: 'password: Pp1%',
      label: '',
      validation: {
        required: 'Password is required',
        minLength: {
          value: 4,
          message: 'Password must be at least 4 characters'
        },
        pattern: {
          value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
          message: 'Password must contain uppercase, lowercase, number, special character'
        }
      }
    },
    {
      id: 5,
      name: 'pass2',
      type: 'password',
      placeholder: 'confirm password: Pp1%',
      label: '',
      validation: {
        required: 'Please confirm your password',
        validate: (value: string) => value === password || 'Passwords do not match'
      }
    },
    {
      id: 6,
      name: 'gender',
      type: 'radio',
      placeholder: '',
      label: 'male',
      validation: { required: 'Gender is required' }
    },
    {
      id: 7,
      name: 'gender',
      type: 'radio',
      placeholder: '',
      label: 'female',
      validation: { required: 'Gender is required' }
    },
    {
      id: 8,
      name: 'accept',
      type: 'checkbox',
      placeholder: '',
      label: 'accept Terms and Conditions agreement',
      validation: {
        required: 'You must accept the terms and conditions'
      }
    },
  ];

  const onSubmitForm = (data: IFormData) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="form">
      {aFields.map((iField) => (
        <div className="input-box" key={iField.id}>
              <input
                className={`input ${errors[iField.name] ? 'input-error' : ''}`}
                type={iField.type}
                placeholder={iField.placeholder}
                {...register(iField.name, iField.validation)}
              />
              {iField.label && <p>{iField.label}</p>}
              {/* {iField.label !== 'male' &&<p className='input-message'></p>} */}

              {errors[iField.name]? (
                <p className="input-message">{errors[iField.name]?.message}</p>
              ): (iField.label !== 'male' && <p className='input-message'></p>)}


        </div>
      ))}

      <button type="submit" className="btn">
        Submit
      </button>
      <button type="button" className="btn">
        Autocomplete
      </button>


    </form>
  );
}