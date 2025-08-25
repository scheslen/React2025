import * as yup from 'yup';

export const validSchema = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .matches(/^[A-Z][a-zA-Z\s-]+$/, 'Only latin letters, spaces, -. First letter must be uppercase'),

  age: yup
    .number()
    .required('Age is required')
    .min(5, 'Age must be greater than 5')
    .max(120, 'Age must be less than 120')
    .typeError('Age must be a number'),

  mail: yup
    .string()
    .required('Email is required')
    .email('Invalid email address'),

  pass1: yup
    .string()
    .required('Password is required')
    .min(4, 'Password must be at least 4 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      'Password must contain uppercase, lowercase, number, and special character'
    ),

  pass2: yup
    .string()
    .required('Please confirm your password')
    .oneOf([yup.ref('pass1')], 'Passwords do not match'),

  gender: yup
    .string()
    .required('Gender is required')
    .oneOf(['male', 'female'], 'Invalid gender selection'),

  accept: yup
    .boolean()
    .required('You must accept the terms and conditions')
    .oneOf([true], 'You must accept the terms and conditions')
});