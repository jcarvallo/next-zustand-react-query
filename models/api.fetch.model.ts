import type {
  UseQueryOptions,
  UseMutationOptions,
} from "@tanstack/react-query";


type ApiFetchModel = {
  key: Array<string>;
  queryOptions?: UseQueryOptions;
  mutationOptions?: UseMutationOptions;
  url: string;
  method: "get" | "post" | "put" | "delete";
  data?: any;
  params?: any;
  auth?: any;
  headers?: any;
};

export default ApiFetchModel;
