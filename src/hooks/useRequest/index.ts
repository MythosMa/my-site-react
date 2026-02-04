import { useCallback, useState } from "react";

type ApiFunction<T> = () => Promise<T>;

type UseRequestOptions<T> = {
  defaultValue?: T;
};

type UseRequestReturn<T> = {
  loading: boolean;
  data: T;
  error: Error | null;
  fetchData: () => Promise<void>;
};

export const useRequest = <T>(
  apiFunction: ApiFunction<T>,
  options: UseRequestOptions<T>
): UseRequestReturn<T> => {
  const { defaultValue } = options;
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<T>(defaultValue!);
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
      setData(defaultValue!);
    } finally {
      setLoading(false);
    }
  }, [apiFunction, defaultValue]);

  return { loading, data, error, fetchData };
};
