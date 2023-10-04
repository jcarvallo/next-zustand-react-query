import type {
  UseQueryOptions,
  UseMutationOptions,
} from "@tanstack/react-query";
export interface ApiFetchModel {
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

