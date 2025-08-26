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

interface IFormHookState {
  formData: IFormData;
  submittedData: IFormData[];
}

const initialState: IFormHookState = {
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

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateFormData: (state, action: PayloadAction<Partial<IFormData>>) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    submitForm: (state, action: PayloadAction<IFormData>) => {
      state.submittedData.push(action.payload);
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

export const { updateFormData, submitForm, resetForm, autoFillForm } = formSlice.actions;
export default formSlice.reducer;
