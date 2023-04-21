import { useEffect, useState } from 'react';

export type StoredValue<T> = T | null;

const useSessionStorage = <T>(
  key: string,
  initialValue?: T
): [StoredValue<T>, (value: T) => void] => {
  const [storedValue, setStoredValue] = useState<StoredValue<T>>(() => {
    try {
      const item = window.sessionStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue ?? null;
    } catch (error) {
      console.error(`Error getting "${key}" from sessionStorage: ${error}`);
      return initialValue ?? null;
    }
  });

  useEffect(() => {
    try {
      if (storedValue === null) {
        window.sessionStorage.removeItem(key);
      } else {
        window.sessionStorage.setItem(key, JSON.stringify(storedValue));
      }
    } catch (error) {
      console.error(`Error setting "${key}" in sessionStorage: ${error}`);
    }
  }, [key, storedValue]);

  const setValue = (value: T): void => {
    setStoredValue(value);
  };

  return [storedValue, setValue];
};

export default useSessionStorage;
