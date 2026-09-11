import { useState, useEffect } from "react"

export const UseLocalStorage = (key, initialValue) => {
    const [storage, setStorage] = useState(() => {
        const saved = localStorage.getItem(key);
        return saved ? JSON.parse(saved) : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(storage));
    }, [key, storage]);

    return [storage, setStorage]
};