import { Grid } from "@mui/material";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";

function Users() {
  return (
    <>
      <Navbar />
      <Grid
        container
        sx={{
          width: "100%",
          minHeight: "100vh",
        }}
      >
        <Grid item xs={2} sm={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={10} sm={9}>
          Users
        </Grid>
      </Grid>
    </>
  );
}

export default Users;
