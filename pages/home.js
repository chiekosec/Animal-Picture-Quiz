import { useContext, useEffect, useState } from "react";
import Loader from "../components/loader/loader";
import Question from "../components/question/question-component";
import ErrorContext from "../context/error";

export default function Home() {
  const [questions, setQuestions] = useState(null);
  const [loading, setLoading] = useState(true);
  const [ques, setQues] = useState(0);
  const handleNext = () => setQues((ques) => ques + 1);
  const { reset } = useContext(ErrorContext);

  useEffect(() => {
    fetch("/api/questions")
      .then((res) => res.json())
      .then(({ data }) => {
        const qData = data.map((question, index) => {
          return {
            number: index + 1,
            ...question,
          };
        });
        setQuestions(qData);
        setLoading(false);
      });
    reset();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="home">
      {questions && (
        <Question
          key={questions[ques].number}
          question={questions[ques].question}
          options={questions[ques].options}
          answer={questions[ques].answer}
          number={questions[ques].number}
          handleNext={handleNext}
        />
      )}
    </div>
  );
}
