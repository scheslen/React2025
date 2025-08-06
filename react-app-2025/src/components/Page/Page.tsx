import "./page.css";
import { useState } from "react";
import { PageProps } from "../../app/types";

export const Page = (props: PageProps) => {
  const [number, setNumber] = useState(props.pageNumber);
  const maxNumber = 25;

  function prevPage() {
    setNumber(number === 0 ? 0 : number - 1);
    localStorage.setItem("page", number.toString());
  }

  function nextPage() {
    setNumber(number === maxNumber ? maxNumber : number + 1);
    localStorage.setItem("page", number.toString());
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
