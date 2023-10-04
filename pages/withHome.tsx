import { useApiQuery } from "@/hooks";
import { useStore } from "@/store";
import { UserModel } from "@/models/user.model";
export interface IHomeProps {
  isLoading?: boolean;
}

const withHome = (Component: React.FC<IHomeProps>) => (props: any) => {
  const { setUser } = useStore();
  const { isLoading } = useApiQuery<UserModel[]>({
    key: ["users"],
    url: "/users",
    method: "get",
    queryOptions: {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      onSuccess: (data) => setUser(data),
    },
  });

  const actions = {
    isLoading,
  };

  return <Component {...actions} {...props} />;
};

export default withHome;
