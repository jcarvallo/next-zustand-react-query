import axios from "axios";
import type { ApiFetchModel, HttpClientModel } from "@/models";

const config: any = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL });

const HttpClient: HttpClientModel | any = {
  get: async (request: ApiFetchModel) => {
    let { url, params, method } = request;
    return await config({
      method,
      url,
      params: params ? params : {},
    });
  },
  post: async (request: ApiFetchModel) => {
    let { url, data, auth, method } = request;
    return (await auth)
      ? config({ method, url, data: {}, auth })
      : config({ method, url, data });
  },
  put: async (request: ApiFetchModel) => {
    let { url, data, method } = request;
    return await config({ method, url, data });
  },
  delete: async (request: ApiFetchModel) => {
    let { url, method, params } = request;
    return await config({ method, url, params });
  },
};

export default HttpClient;
