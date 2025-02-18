import { LOCATION_STORAGE_TOKEN } from "@/constant/request";
import { message, Modal } from "antd";
import axios, { AxiosRequestConfig } from "axios";

const withoutTokenUrl = ["/login", "/subWeb"];

const isWithoutTokenUrl = (url: string) => {
  return !withoutTokenUrl.includes(url);
};

const instance = axios.create({
  baseURL: "/api",
});

const handleUnauthorized = () => {
  let timer = 5;
  const modal = Modal.error({
    title: "登录失效",
    content: `请重新登录，${timer}秒后自动跳转`,
    okText: "重新登录",
    onOk: () => {
      clearInterval(intervalFn);
      localStorage.clear();
      modal.destroy();
      window.location.href = "/login";
    },
  });
  const intervalFn = setInterval(() => {
    modal.update({
      content: `请重新登录，${--timer}秒后自动跳转`,
    });
    if (timer === 0) {
      clearInterval(intervalFn);
      localStorage.clear();
      modal.destroy();
      window.location.href = "/login";
    }
  }, 1000);
};

// 请求拦截器（预处理）
instance.interceptors.request.use(
  (config) => {
    if (config.url && !isWithoutTokenUrl(config.url)) {
      const token = localStorage.getItem(LOCATION_STORAGE_TOKEN);
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 请求响应器（处理响应）
instance.interceptors.response.use(
  (response) => {
    const { code, message: msg, data } = response.data;

    if ([200].includes(code)) {
      const successMessage: "modal" | "info" = (
        response.config as AxiosRequestConfig & {
          successsMessage: "modal" | "info";
        }
      ).successsMessage;

      if (successMessage) {
        if (successMessage === "modal") {
          // 弹窗提示
          Modal.success({
            content: msg || "操作成功",
          });
        } else {
          message.success(msg || "操作成功");
        }
      }
      return data;
    } else if ([401].includes(code)) {
      handleUnauthorized();
    } else {
      const errorMessage: "modal" | "info" = (
        response.config as AxiosRequestConfig & {
          errorMessage: "modal" | "info";
        }
      ).errorMessage;
      if (errorMessage) {
        if (errorMessage === "modal") {
          // 弹窗提示
          Modal.error({
            content: msg || "操作失败",
          });
        } else {
          message.error(msg || "操作失败");
        }
      }
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const request = async <T = unknown>(
  config: AxiosRequestConfig & {
    successMessage?: "modal" | "info";
    errorMessage?: "modal" | "info";
  }
) => {
  try {
    return await instance.request<unknown, T>(config);
  } catch (error: unknown) {
    const msg = error ? (error as Error).message : "未知错误";
    if (config.errorMessage === "info") {
      message.error(msg);
    } else if (config.errorMessage === "modal") {
      Modal.error({
        content: msg,
      });
    }

    return new Error(msg);
  }
};
