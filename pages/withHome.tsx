import { useApiQuery } from "@/hooks";
import { USerModel } from "@/models";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
    editable: false,
  },
  {
    field: "username",
    headerName: "User name",
    width: 150,
    editable: false,
  },
  {
    field: "email",
    headerName: "Email",
    width: 350,
    editable: false,
  },
  {
    field: "phone",
    headerName: "Phone",
    sortable: false,
    width: 160,
  },
];

export interface IHomeProps {
  data?: any;
  isLoading?: boolean;
  columns?: any;
}

const withHome = (Component: React.FC<any>) => (props: any) => {
  const { data = [], isLoading } = useApiQuery<USerModel[]>({
    key: "users",
    url: "/users",
    method: "get",
    queryOptions: {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    },
  });
  const actions = {
    data,
    isLoading,
    columns,
  };

  return <Component {...actions} {...props} />;
};

export default withHome;
