import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import Loader from "../components/loader/loader";
import ErrorContext from "../context/error";
import submitResult from "../dbUtil/submitResult";

export default function Result() {
  const { errors, user } = useContext(ErrorContext);
  const [scores, setScores] = useState([]);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetcher() {
      const Data = await submitResult({ name: user, mistakes: errors });
      setScores(Data);
      setLoading(false);
    }
    fetcher();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="result__container">
      <div className="result__info">
        <div className="play__count">
          <span>
            You Played <b>{scores.length}</b> times
          </span>
        </div>
        <div className="scores__container">
          <button onClick={() => setShow((show) => !show)}>Show Scores</button>
          <ul className={`scores ${show ? "" : "hidden"}`}>
            <li>
              <span>Mistakes</span>
              <span>Time</span>
            </li>
            {scores.map((score) => (
              <li key={score.time * Math.random()}>
                <span>{score.mistakes}</span>
                <span>{String(new Date(score.time).toLocaleString())}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="result__container--result">
        <div className="user__name">{user}</div>
        <div>Total Mistakes: {errors}</div>
        <Link href="/home">Replay</Link>
      </div>
    </div>
  );
}
