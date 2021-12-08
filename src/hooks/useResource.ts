import { useState, useCallback } from "react";

interface Resource<T> {
  data: T;
  loading: boolean;
  errorLoading: string;
}

interface LoadableResource<T> extends Resource<T> {
  load: (args: any) => Promise<void>;
}

type fetchCallback<T> = (args: any) => Promise<T>;

const useResource = <T>(
  initialData: T,
  fetchResource: fetchCallback<T>,
  errorMessage: string
): LoadableResource<T> => {
  const [resource, setResource] = useState<Resource<T>>({
    data: initialData,
    loading: false,
    errorLoading: "",
  });

  const load = useCallback(
    async (args: any) => {
      setResource((resource) => ({
        ...resource,
        loading: true,
        errorLoading: "",
      }));
      try {
        const fetchedResource = await fetchResource(args);
        setResource({
          data: fetchedResource,
          loading: false,
          errorLoading: "",
        });
      } catch (e) {
        setResource({
          data: initialData,
          loading: false,
          errorLoading: errorMessage,
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setResource]
  );

  return { ...resource, load };
};

export default useResource;
