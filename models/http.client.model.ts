import { ApiFetchModel } from "@/models";

export type HttpClientModel = {
  get: (value: ApiFetchModel) => void;
  post: (value: ApiFetchModel) => void;
  put: (value: ApiFetchModel) => void;
  delete: (value: ApiFetchModel) => void;
};
