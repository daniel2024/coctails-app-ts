import { useState, useEffect } from "react";

type AsyncState<T> = {
  data: T | null;
  loading: boolean;
  error: Error | null | unknown;
};

function useAsync<T>(
  asyncFunction: () => Promise<T>,
  deps: any[] = []
): AsyncState<T> {
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      try {
        const data = await asyncFunction();
        if (mounted) {
          setState({ data, loading: false, error: null });
        }
      } catch (error) {
        if (mounted) {
          setState({ data: null, loading: false, error });
        }
      }
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps

  return state;
}

export default useAsync;
