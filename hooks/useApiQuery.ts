import type { ApiFetchModel } from "@/models";
import { useQuery } from "@tanstack/react-query";
import { useFetch } from "@/hooks";

function useApiQuery<T>(req: ApiFetchModel) {
  return useQuery({
    queryKey: req.key,
    queryFn: useFetch<T>(req),
    ...req.queryOptions,
  });
}

export default useApiQuery;
