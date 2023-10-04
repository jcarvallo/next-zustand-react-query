
import { useQuery } from "@tanstack/react-query";
import { useFetch } from "@/hooks";
import { ApiFetchModel } from "@/models/api.fetch.model";

function useApiQuery<T>(req: ApiFetchModel) {
  return useQuery({
    queryKey: req.key,
    queryFn: useFetch<T>(req),
    ...req.queryOptions,
  });
}

export default useApiQuery;
