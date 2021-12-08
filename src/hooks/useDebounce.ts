import { Dispatch, SetStateAction, useCallback } from "react";
import { debounce } from "utils/debounce";

type callback<T> = Dispatch<SetStateAction<T>>;

const useDebounce = <T>(func: callback<T>, Ms: number) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedFunc = useCallback(debounce(func, Ms), [func]);

  return debouncedFunc;
};

export default useDebounce;
