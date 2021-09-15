import { useRouter } from "next/dist/client/router";
import { useContext, useRef } from "react";
import ErrorContext from "../context/error";
import storeUser from "../dbUtil/userDb";

export default function IndexPage() {
  const { setUser } = useContext(ErrorContext);
  const router = useRouter();
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(inputRef.current.value);
    storeUser(inputRef.current.value);
    router.push("/home");
  };

  return (
    <div className="form__container">
      <div className="form__container--form">
        <form onSubmit={handleSubmit}>
          <h2>Enter Your Name</h2>
          <input type="text" required ref={inputRef} />
          <button type="submit" className="button">
            START
          </button>
        </form>
      </div>
    </div>
  );
}
