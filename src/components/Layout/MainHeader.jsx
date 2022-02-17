import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import WorkIcon from "@mui/icons-material/Work";
import { Box } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import BodyBox from "../UI/Box/BodyBox";
import SearchBar from "../UI/SearchBar";

const MainHeader = () => {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "2rem", borderBottom: "" }}>
      <AppBar position="static">
        <BodyBox>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
            >
              in
            </IconButton>
            <SearchBar placeholder="Search" />
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton size="large" aria-label="show mails" color="inherit">
                <Badge badgeContent={"•"} color="error">
                  <HomeIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show network"
                color="inherit"
              >
                <Badge badgeContent={"•"} color="error" invisible={true}>
                  <PeopleAltIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show network"
                color="inherit"
              >
                <Badge badgeContent={"•"} color="error" invisible={true}>
                  <WorkIcon />
                </Badge>
              </IconButton>
            </Box>
          </Toolbar>
        </BodyBox>
        <Toolbar sx={{ borderTop: "1px solid #ccc" }}></Toolbar>
      </AppBar>
    </Box>
  );
};

export default MainHeader;
