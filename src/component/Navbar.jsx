import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled, alpha } from "@mui/system";
import {
  Cancel,
  DarkMode,
  Language,
  Message,
  Notifications,
  Search as SearchIcon,
} from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";

const Search = styled("div")(({ theme }) => ({
  width: "350px",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  transition: theme.transitions.create("width"),
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  [theme.breakpoints.up("sm")]: {
    "&:focus": {
      width: "500px",
    },
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: "90%",
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1),
  },
}));

const useStyles = makeStyles((theme) => ({
  search: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.openSearch ? "flex" : "none"),
    },
  },
  icons: {
    display: "flex",
    alignItems: "center",
    marginLeft: theme.spacing(4),
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.openSearch ? "none" : "flex"),
      marginLeft: 0,
    },
    "& .MuiIconButton-root": {
      color: "#fff",
    },
  },
  toggleSearch: {
    [theme.breakpoints.up("sm")]: {
      display: "none !important",
    },
  },
}));

function Navbar() {
  const [openSearch, setOpenSearch] = useState(false);
  const c = useStyles({ openSearch });

  return (
    <AppBar className="position-sticky">
      <Toolbar className="d-flex justify-content-between">
        <Typography variant="h5" sx={{ mr: { xs: 4, md: 0 } }}>
          SoluTion
        </Typography>

        <Search sx={{ px: 2 }} className={c.search}>
          <SearchIcon />
          <StyledInputBase placeholder="Search…" />
          <Cancel
            className={c.toggleSearch}
            onClick={() => setOpenSearch(false)}
          />
        </Search>

        <Box className={c.icons}>
          <IconButton
            onClick={() => setOpenSearch(true)}
            className={c.toggleSearch}
          >
            <SearchIcon />
          </IconButton>
          <IconButton>
            <Language />
          </IconButton>
          <Typography
            fontSize="small"
            sx={{ display: { xs: "none", md: "block" } }}
          >
            English
          </Typography>
          <IconButton>
            <DarkMode />
          </IconButton>
          <IconButton>
            <Badge badgeContent={4} color="error">
              <Message />
            </Badge>
          </IconButton>
          <IconButton>
            <Badge badgeContent={105} color="error">
              <Notifications />
            </Badge>
          </IconButton>
          <IconButton>
            <Avatar />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
