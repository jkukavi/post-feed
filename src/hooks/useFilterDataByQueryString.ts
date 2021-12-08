import { useMemo, useState } from "react";

export interface FilterProps<T> {
  data: T[];
  filterFunction: (item: T, queryString: string) => boolean;
}

export interface FilterReturn<T> {
  filteredData: T[];
  noSearchResultsFound: boolean;
  setQueryString: React.Dispatch<React.SetStateAction<string>>;
}

const useFilterDataByQueryString = <T>({
  data,
  filterFunction,
}: FilterProps<T>): FilterReturn<T> => {
  const [queryString, setQueryString] = useState<string>("");

  const filteredData = useMemo(() => {
    if (queryString) {
      return data.filter((item) => filterFunction(item, queryString));
    } else {
      return data;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, queryString]);

  const noSearchResultsFound: boolean = !filteredData.length && !!queryString;

  return {
    filteredData,
    noSearchResultsFound,
    setQueryString,
  };
};

export default useFilterDataByQueryString;
