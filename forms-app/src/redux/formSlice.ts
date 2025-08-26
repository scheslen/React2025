import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface IFormData {
  name: string;
  age: number;
  mail: string;
  pass1: string;
  pass2: string;
  gender: 'male' | 'female';
  accept: boolean;
}

interface IFormState {
  formData: IFormData;
  submittedData: IFormData[];
}

const initialState: IFormState = {
  formData: {
    name: '',
    age: 0,
    mail: '',
    pass1: '',
    pass2: '',
    gender: 'male',
    accept: false,
  },
  submittedData: [],
};

export const formHookSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateFormData: (state, action: PayloadAction<Partial<IFormData>>) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    submitForm: (state, action: PayloadAction<IFormData>) => {
      state.submittedData.push(action.payload);
      // Очищаем форму после отправки
      state.formData = initialState.formData;
    },
    resetForm: (state) => {
      state.formData = initialState.formData;
    },
    autoFillForm: (state) => {
      state.formData = {
        name: 'Nn',
        age: 24,
        mail: 'name@mail.ex',
        pass1: 'Pp1%',
        pass2: 'Pp1%',
        gender: 'male',
        accept: true,
      };
    },
  },
});

export const { updateFormData, submitForm, resetForm, autoFillForm } = formHookSlice.actions;
export default formHookSlice.reducer;
