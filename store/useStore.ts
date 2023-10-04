
import { UserModel } from "@/models/user.model";
import { create } from "zustand";

type Columns = {
  field?: string
  headerName?: string
  width?: number
  editable?: boolean
  sortable?: boolean
}

type State = {
  users: UserModel[];
  setUser(value: any): void;
  columns: any[]
};

const initialState = {
  users: [],
  columns: [
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
  ]
};

export const useStore = create<State>((set) => ({
  ...initialState,
  setUser: (value) => set((state) => ({ ...state, users: value })),
}));
