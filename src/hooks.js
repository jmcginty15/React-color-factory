import { useState } from 'react';

const useLocalStorage = (key, value) => {
    const parsedValue = JSON.parse(value);
    const [colors, setColors] = useState(parsedValue ? parsedValue : []);
    const syncColors = (value) => {
        localStorage.setItem(key, JSON.stringify(value));
        setColors(value);
    }
    const clearColors = () => {
        localStorage.clear();
        setColors([]);
    }
    return [colors, syncColors, clearColors];
}

export default useLocalStorage;