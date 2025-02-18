import { useCallback, useState } from "react";

type ApiFunction<T> = () => Promise<T>;

type UseRequestReturn<T> = {
  loading: boolean;
  data: T | null;
  error: Error | null;
  fetchData: () => Promise<void>;
};

export const useRequest = <T>(
  apiFunction: ApiFunction<T>
): UseRequestReturn<T> => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const fetchData = useCallback(async () => {
    if (loading) return;
    try {
      setLoading(true);
      const res = await apiFunction();
      setData(res);
      setError(null);
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      } else {
        setError(new Error("Unknown error"));
      }
      setData(null);
    } finally {
      setLoading(false);
    }
  }, [apiFunction]);

  return { loading, data, error, fetchData };
};
