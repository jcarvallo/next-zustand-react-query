import { FC } from "@/models";
import { Container } from "@mui/material";

const Layout = ({ children }: FC) => {
  return <Container>{children}</Container>;
};

export default Layout;
