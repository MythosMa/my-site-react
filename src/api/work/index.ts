import { request } from "../request";

export type WordCloudDTO = {
  text: string;
  value: number;
};

export type WorkDTO = {
  year: string;
  description: string;
};

export const getWordCloudsApi = async () => {
  return await request<WordCloudDTO[]>({
    method: "GET",
    url: "/word-cloud",
    errorMessage: "info",
  });
};

export const isWordCloudDto = (data: any): data is WordCloudDTO[] => {
  return (
    Array.isArray(data) &&
    data.every((item) => {
      return typeof item.text === "string" && typeof item.value === "number";
    })
  );
};

export const getWorksApi = async () => {
  return await request<WorkDTO[]>({
    method: "GET",
    url: "/work",
    errorMessage: "info",
  });
};

export const isWorkDto = (data: any): data is WorkDTO[] => {
  return (
    Array.isArray(data) &&
    data.every((item) => {
      return (
        typeof item.year === "string" && typeof item.description === "string"
      );
    })
  );
};
