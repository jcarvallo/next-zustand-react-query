import { Loading } from "@/components";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import withHome, { IHomeProps } from "./withHome";

function Home({ isLoading, data, columns }: IHomeProps) {
  if (isLoading) return <Loading />;

  return (
    <>
      <Box sx={{ height: 400, width: "100%", marginTop: "40px" }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          loading={isLoading}
        />
      </Box>
    </>
  );
}

export default withHome(Home);
