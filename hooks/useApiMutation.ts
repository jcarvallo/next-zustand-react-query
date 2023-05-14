import type { ApiFetchModel } from "@/models";
import { useMutation } from "@tanstack/react-query";
import { useFetch } from "@/hooks";

function useApiMutation<T>(req: ApiFetchModel) {
  let fetch = useFetch<T>(req);
  return useMutation({
    mutationKey: req.key,
    mutationFn: fetch,
    ...req.mutationOptions,
  });
}

export default useApiMutation;
