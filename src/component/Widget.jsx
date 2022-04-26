import { KeyboardArrowUpOutlined, PersonOutline } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  widget: {
    minWidth: "200px",
    maxWidth: "300px",
    height: "145px",
    borderRadius: "12px",
    boxShadow: "3px 3px 6px -2px rgba(0,0,0,0.51)",
    backgroundColor: "#fff",
    padding: theme.spacing(2),
    marginBottom: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));

function Widge() {
  const c = useStyles();

  return (
    <Box sx={{ mx: 2 }} className={c.widget}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          component="h3"
          xs={{
            color: "gray",
            fontSize: "20px",
            fontWeight: "medium",
            textTransform: "uppercase",
          }}
        >
          User
        </Typography>
        <Typography component="p" color="success.main">
          <KeyboardArrowUpOutlined />
          +5%
        </Typography>
      </Box>
      <Typography
        component="h2"
        variant="h1"
        sx={{ fontSize: "32px", fontWeight: "medium" }}
      >
        930
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          componont="p"
          sx={{ textDecoration: "underline", cursor: "pointer" }}
        >
          View all users
        </Typography>
        <Typography
          component="span"
          p="3px"
          borderRadius="3px"
          backgroundColor="success.main"
        >
          <PersonOutline />
        </Typography>
      </Box>
    </Box>
  );
}

export default Widge;
