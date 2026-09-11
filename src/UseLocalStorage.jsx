import { useState, useEffect } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storage, setStorage] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storage));
  }, [key, storage]);

  return [storage, setStorage];
};