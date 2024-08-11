import { BaseApiResponse } from "@/interface/common.interface";
import {
  globalCatchError,
  globalCatchSucess,
  globalCatchWarning
} from "@/lib/functions/_helpers.lib";
import axios, { AxiosError, AxiosResponse } from "axios";
import { baseUrlApi, sucessNotificationEndPoints } from "../endpoints";
const axiosInstance = axios.create({
  baseURL: baseUrlApi
});

axiosInstance.interceptors.request.use((config) => {
  return config;
});

axiosInstance.interceptors.response.use(
  (res: AxiosResponse) => {
    if (sucessNotificationEndPoints.includes(res.config.url as string)) {
      if (res?.data?.status !== 200) {
        globalCatchWarning(res);
      } else {
        globalCatchSucess(res);
      }
    }

    return res;
  },
  async (error: AxiosError<BaseApiResponse>) => {
    globalCatchError(error);

    return Promise.reject(error);
  }
);

export default axiosInstance;
