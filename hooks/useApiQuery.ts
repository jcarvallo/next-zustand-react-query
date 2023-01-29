import type { ApiFetchModel } from "@/models";
import { useQuery } from "@tanstack/react-query";
import { useFetch } from "@/hooks";

function useApiQuery<T>(req: ApiFetchModel) {
  let fetch = useFetch<T>(req);

  return useQuery({
    queryKey: [req.key],
    queryFn: fetch,
    ...req.queryOptions,
  });
}

export default useApiQuery;
