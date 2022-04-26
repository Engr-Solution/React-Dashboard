import {
  SettingsOutlined,
  Dashboard,
  DeliveryDiningOutlined,
  DisplaySettings,
  PaymentOutlined,
  PersonOutline,
  ProductionQuantityLimits,
  SettingsApplications,
  AccountBox,
  LogoutOutlined,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  box: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    boxShadow: "5px -1px 4px -4px rgba(0,0,0,0.45)",
    [theme.breakpoints.down("sm")]: {
      backgroundColor: theme.palette.primary.main,
      padding: theme.spacing(2),
      "& svg": {
        color: "#fff",
      },
    },
  },
  wrapper: {
    width: "100%",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3),
    },
  },
  SubHead: {
    width: 1,
    color: "gray",
    paddingLeft: theme.spacing(1.25),
    textTransform: "uppercase",
    fontSize: "14px",
    fontWeight: "tiny",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menu: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(2),
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(0),
    },
    cursor: "pointer",
    "& svg": {
      marginRight: theme.spacing(1),
      transition: theme.transitions.create("margin"),
      [theme.breakpoints.down("sm")]: {
        marginBottom: theme.spacing(2),
        marginRight: theme.spacing(0),
      },
    },
    "&:hover": {
      "& svg": {
        marginRight: theme.spacing(1.5),
      },
    },
    "& p": {
      textTransform: "capitalize",
      fontSize: "14px",
      fontWeight: "medium",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  },
}));

function Sidebar() {
  const c = useStyles();

  return (
    <Box className={c.box}>
      <Box className={c.wrapper} sx={{ pt: 1.25 }}>
        <Typography component="body2" className={c.SubHead}>
          main
        </Typography>
        <Box className={c.menu}>
          <Dashboard />
          <Typography component="p">dashboard</Typography>
        </Box>
      </Box>

      <Box className={c.wrapper} sx={{ pt: 1.25 }}>
        <Typography component="body2" className={c.SubHead}>
          lists
        </Typography>
        <Box className={c.menu}>
          <PersonOutline />
          <Typography component="p">users</Typography>
        </Box>
        <Box className={c.menu}>
          <ProductionQuantityLimits />
          <Typography component="p">products</Typography>
        </Box>
        <Box className={c.menu}>
          <PaymentOutlined />
          <Typography component="p">orders</Typography>
        </Box>
        <Box className={c.menu}>
          <DeliveryDiningOutlined />
          <Typography component="p">delivery</Typography>
        </Box>
      </Box>

      <Box className={c.wrapper} sx={{ pt: 1.25 }}>
        <Typography component="body2" className={c.SubHead}>
          services
        </Typography>
        <Box className={c.menu}>
          <SettingsApplications />
          <Typography component="p">system health</Typography>
        </Box>
        <Box className={c.menu}>
          <DisplaySettings />
          <Typography component="p">logs</Typography>
        </Box>
        <Box className={c.menu}>
          <SettingsOutlined />
          <Typography component="p">settings</Typography>
        </Box>
      </Box>

      <Box className={c.wrapper} sx={{ pt: 1.25 }}>
        <Typography component="body2" className={c.SubHead}>
          user
        </Typography>
        <Box className={c.menu}>
          <AccountBox />
          <Typography component="p">profile</Typography>
        </Box>
        <Box className={c.menu}>
          <LogoutOutlined />
          <Typography component="p">logout</Typography>
        </Box>
      </Box>

      <Typography component="body2" className={c.SubHead}>
        theme
      </Typography>
      <Box sx={{ display: { xs: "none", sm: "flex" } }} className={c.menu}>
        <Box
          component="span"
          sx={{
            backgroundColor: "#fff",
            width: 20,
            height: 20,
            borderRadius: "3px",
            border: 1,
            mr: 1,
          }}
        />
        <Box
          component="span"
          sx={{
            backgroundColor: "#000",
            width: 20,
            height: 20,
            borderRadius: "3px",
            border: 1,
            mr: 1,
          }}
        />
      </Box>
    </Box>
  );
}

export default Sidebar;
