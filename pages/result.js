import Link from "next/link";
import { useContext, useEffect } from "react";
import ErrorContext from "../context/error";
import submitResult from "../dbUtil/submitResult";

export default function Result() {
  const { errors, user } = useContext(ErrorContext);
  useEffect(() => {
    submitResult({ name: user, mistakes: errors });
  }, []);
  return (
    <div className="result__container">
      <div className="result__container--result">
        <div className="user__name">{user}</div>
        <div>Total Mistakes: {errors}</div>
        <Link href="/home">Replay</Link>
      </div>
    </div>
  );
}
