import type {
  UseQueryOptions,
  UseMutationOptions,
} from "@tanstack/react-query";

type QueryOptions = {
  enabled?: boolean;
  refetchOnWindowFocus?: boolean | "always";
  staleTime?: number | "Infinity";
  cacheTime?: number | "Infinity";
};
type MutationOptions = {};

type PostId = {
  id?: number;
};

type PostsTitle = {
  title?: string;
};

type Params = PostId | PostsTitle;

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
