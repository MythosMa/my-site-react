import { request } from "../request";

export type SubWebDto = {
  id: number;
  name: string;
  url: string;
};

export const getSubWebApi = async () => {
  return await request<SubWebDto[]>({
    method: "GET",
    url: "/sub-webs",
    errorMessage: "info",
  });
};
