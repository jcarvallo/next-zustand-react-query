import type {
  UseQueryOptions,
  UseMutationOptions,
} from "@tanstack/react-query";

type PostId = {
  id?: number;
  PostId?: number;
};

type Params = PostId;

type ApiFetchModel = {
  key: string;
  queryOptions?: UseQueryOptions;
  mutationOptions?: UseMutationOptions;
  url: string;
  method: "get" | "post" | "put" | "delete";
  data?: any;
  params?: Params;
  auth?: any;
};

export default ApiFetchModel;
