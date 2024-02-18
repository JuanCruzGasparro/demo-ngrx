export const debouncer = <T extends any[]>(
  callback: (...args: T) => void,
  delay: number
) => {
  let timerId: ReturnType<typeof setTimeout>;
  return (...args: T) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};
