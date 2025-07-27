import {useState} from 'react'

export const useLSRequest = () => {
  return localStorage.getItem("request") || "";
};

export const useLSPage = () => {
  return Number(localStorage.getItem("page") || "0");
};

export const useInput = (initValue: string) => {
  const [value, setValue] = useState(initValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
    setValue(e.target.value)
  }

  return { value, onChange}
}