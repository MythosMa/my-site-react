import { request } from "../request";

export type LoginDto = {
  username: string;
  password: string;
};

export type LoginVo = {
  token: string;
  userInfo: {
    id: string;
    username: string;
    email: string;
  };
};

export const loginApi = (data: LoginDto) => {
  return request<LoginVo>({ method: "POST", url: "/login", data });
};

export const checkTokenApi = () => {
  return request<LoginVo>({ method: "GET", url: "/checkToken" });
};
