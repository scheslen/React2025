import "./page.css";
import { useState } from "react";
import { PageProps } from "../../app/types";

export const Page = (props: PageProps) => {
  const [number, setNumber] = useState(props.pageNumber);
  const maxNumber = 25;

  async function prevPage() {
    setNumber(number === 0 ? 0 : number - 1);
    await localStorage.setItem("page", number.toString());
    props.onClick(number);
  }

  async function nextPage() {
    setNumber(number === maxNumber ? maxNumber : number + 1);
    await localStorage.setItem("page", number.toString());
    props.onClick(number);
  }

  return (
    <div className="page">
      <p className="page__txt">
        Page:
        <span className="page__number">{number}</span>/{maxNumber}
      </p>
      <button className="btn page__btn" onClick={prevPage}>
        prev
      </button>
      <button className="btn page__btn" onClick={nextPage}>
        next
      </button>
    </div>
  );
};
