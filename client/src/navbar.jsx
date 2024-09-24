import React from "react";
import { Typography, AppBar, Toolbar, Button } from "@mui/material";
import AirlinesIcon from "@mui/icons-material/Airlines";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import PublicIcon from "@mui/icons-material/Public";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#001e3c" }}>
      <Toolbar>
        <AirlinesIcon sx={{ fontSize: 35, marginRight: 1 }} />
        <Typography variant="h6" sx={{ fontSize: 30, flexGrow: 1 }}>
          AirIndia
        </Typography>
        <FavoriteIcon sx={{ marginLeft: 2 }} />
        <PublicIcon sx={{ marginLeft: 2 }} />
        <Button color="inherit" sx={{ marginLeft: 2 }}>
          Log in
        </Button>
        <AccountCircleIcon sx={{ marginLeft: 2 }} />
        <MenuIcon sx={{ marginLeft: 2 }} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
