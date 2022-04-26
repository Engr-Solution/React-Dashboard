import { Box, Container, Grid } from "@mui/material";
import Chart from "../component/Chart";
import Navbar from "../component/Navbar";
import Progressbar from "../component/Progressbar";
import Sidebar from "../component/Sidebar";
import Widget from "../component/Widget";

function Home() {
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
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10} sx={{ py: 3, px: "auto" }}>
          {/* Widgets */}
          <Box>
            <Grid container sx={{ mx: "auto" }}>
              <Grid item xs={12} sm={6} lg={3}>
                <Widget />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <Widget />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <Widget />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <Widget />
              </Grid>
            </Grid>
          </Box>
          {/* Chart & Progressbar */}
          <Box>
            <Grid container>
              <Grid item xs={12} md={4}>
                <Progressbar />
              </Grid>
              <Grid item xs={12} md={8}>
                <Chart />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
