import { Box, Typography } from "@mui/material";
import {
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
  MoreVertOutlined,
} from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const useStyles = makeStyles((theme) => ({
  progressbar: {
    display: "flex",
    flexDirection: "column",
    boxShadow: "3px 3px 6px -2px rgba(0,0,0,0.51)",
    padding: theme.spacing(0.5),
    [theme.breakpoints.up("sm")]: {
      marginRight: theme.spacing(3),
    },
  },
  progress: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing(1.5),
    padding: theme.spacing(2.5),
  },
  bar: {
    width: "100px",
    height: "100px",
  },
}));

function Progressbar() {
  const c = useStyles();
  return (
    <Box className={c.progressbar}>
      <Typography
        component="h6"
        className="d-flex justify-content-between align-items-center fw-normal p-2"
      >
        Total Revenues
        <MoreVertOutlined />
      </Typography>
      <Box className={c.progress}>
        <Box className={c.bar} component="div">
          <CircularProgressbar value={55} text={"55%"} strokeWidth="5" />
        </Box>
        <Typography component="p">Total sales made today</Typography>
        <Typography component="p" className="fs-4 fw-bold">
          $790
        </Typography>
        <Typography component="p" className="text-center">
          The amounnt above is only for today. Previous ones are not included.
        </Typography>
        <Box className="d-flex justify-content-between w-100">
          <Box className="d-flex flex-column align-items-center">
            <Typography component="h6" mb="2">
              Target
            </Typography>
            <Typography component="span" fontSize="small" color="success.main">
              <KeyboardArrowUpOutlined />
              $12.45k
            </Typography>
          </Box>
          <Box className="d-flex flex-column align-items-center">
            <Typography component="h6" mb="2">
              Last Week
            </Typography>
            <Typography component="span" fontSize="small" color="error.main">
              <KeyboardArrowDownOutlined />
              $4.25k
            </Typography>
          </Box>
          <Box className="d-flex flex-column align-items-center">
            <Typography component="h6" mb="2">
              Last Month
            </Typography>
            <Typography component="span" fontSize="small" color="success.main">
              <KeyboardArrowUpOutlined />
              $11.90k
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Progressbar;
