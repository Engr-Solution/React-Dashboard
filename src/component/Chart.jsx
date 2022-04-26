import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  chart: {
    display: "flex",
    flexDirection: "column",
    boxShadow: "3px 3px 6px -2px rgba(0,0,0,0.51)",
  },
}));

function Chart() {
  const c = useStyles();
  return <Box className={c.chart}>chart</Box>;
}

export default Chart;
