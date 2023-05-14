import type { ApiFetchModel } from "@/models";
import { HttpClient } from "@/config";

function useFetch<T>(req: ApiFetchModel) {
  const fetch = async (body?: any): Promise<T> => {
    try {
      let { method } = req;
      req.data = ["post", "put"].includes(method) ? body : {};
      const { data, error }: { data: T; error: Error } = await HttpClient[
        method
      ](req);

      if (error) throw error;

      return data;
    } catch (error: any) {
      return error;
    }
  };
  return fetch;
}

export default useFetch;
