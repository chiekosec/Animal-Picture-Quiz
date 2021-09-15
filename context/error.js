import { createContext, useState } from "react";

const ErrorContext = createContext();

export const ErrorProvider = ({ children }) => {
  const [errors, setErrors] = useState(0);
  const [user, setUser] = useState("");

  const increment = () => setErrors((errors) => errors + 1);
  const reset = () => setErrors(0);

  return (
    <ErrorContext.Provider value={{ errors, increment, reset, user, setUser }}>
      {children}
    </ErrorContext.Provider>
  );
};
export default ErrorContext;
