import axios from "axios";
import type { ApiFetchModel, HttpClientModel } from "@/models";

const config: any = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL });

const HttpClient: HttpClientModel | any = {
  get: async (request: ApiFetchModel) => {
    return await config({...request});
  },
  post: async (request: ApiFetchModel) => {
    return await config({ ...request });
  },
  put: async (request: ApiFetchModel) => {
    return await config({ ...request });
  },
  delete: async (request: ApiFetchModel) => {
    return await config({ ...request });
  },
};

export default HttpClient;
