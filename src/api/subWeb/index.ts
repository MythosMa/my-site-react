import { request } from "../request";

export type SubWebDto = {
  id: number;
  name: string;
  url: string;
};

export const getSubWebApi = async () => {
  return await request<SubWebDto[]>({
    method: "GET",
    url: "/subWeb",
    errorMessage: "info",
  });
};

export const isSubWebDto = (data: any): data is SubWebDto[] => {
  return (
    Array.isArray(data) &&
    data.every(
      (item) =>
        item &&
        typeof item === "object" &&
        "id" in item &&
        "name" in item &&
        "url" in item
    )
  );
};
