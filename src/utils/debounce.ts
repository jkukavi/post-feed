type timeoutType = NodeJS.Timeout | null;

export const debounce = (func: Function, wait: number) => {
  let timeout: timeoutType;
  return function (arg: any) {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      timeout = null;
      func(arg);
    }, wait);
  };
};
