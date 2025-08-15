import { useEffect, useState } from "react";

export const useDebounce = <T>(value: T, delay: number): T => {
  const [debonceValue, setDebouneValue] = useState(value);

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setDebouneValue(value);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, delay]);

  return debonceValue;
};
