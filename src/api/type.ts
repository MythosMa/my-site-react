export type CommonResponse<T> = {
  code: number;
  data: T;
  message: string;
};
