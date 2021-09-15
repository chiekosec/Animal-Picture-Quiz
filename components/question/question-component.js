import { useRouter } from "next/dist/client/router";
import { useContext, useState } from "react";
import ErrorContext from "../../context/error";

export default function Question({
  number,
  question,
  options,
  answer,
  handleNext,
}) {
  const [correct, setCorrect] = useState(false);
  const { increment } = useContext(ErrorContext);
  const router = useRouter();

  const handleCheck = (guess, e) => {
    if (guess === answer) {
      setCorrect(true);
      e.target.classList.add("correct");
    } else {
      increment();
      e.target.classList.add("wrong");
    }
  };

  return (
    <div className="question__container">
      <div className="image__container">
        <img src={`/${question}`} alt="animal" />
      </div>
      <div className="options__container">
        {options.map((option) => (
          <button
            className="option__button"
            key={option}
            onClick={(e) => handleCheck(option, e)}
          >
            {option}
          </button>
        ))}
      </div>
      {correct &&
        (number == 5 ? (
          <button
            className="option__button option__button--next"
            onClick={() => router.push("/result")}
          >
            Submit
          </button>
        ) : (
          <button
            className="option__button option__button--next"
            onClick={handleNext}
          >
            Next
          </button>
        ))}
    </div>
  );
}
