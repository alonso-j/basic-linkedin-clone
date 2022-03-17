import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import WorkIcon from "@mui/icons-material/Work";
import { Avatar } from "@mui/material";
import AppBar from "@mui/material/AppBar";

import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import SearchBar from "../UI/SearchBar";
import HorizontalBox from "../UI/HorizontalBox";
import MyNavIconButton from "../UI/MyNavIconButton";

const StyledAppBar = styled(AppBar)(() => ({
  position: "static",
  width: "100vw",
  height: "53px",
  backgroundColor: "#fff",
  color: "#5F6163",
  boxShadow: "none",
  borderBottom: "1px solid rgba(0,0,0,0.08)",
}));

const StyledToolbar = styled(Toolbar)(() => ({
  maxWidth: "1200px",
  minHeight: "52px !important",
  width: "inherit",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "0 auto",
}));

const MainHeader = () => {
  return (
    <StyledAppBar>
      <StyledToolbar>
        <HorizontalBox>
          <Avatar
            alt="linkedin logo"
            src="/linkedin-logo.png"
            variant="rounded"
            sx={{ width: "34px", height: "34px", ml: 1, cursor: "pointer" }}
          />
          <SearchBar placeholder="Search" />
        </HorizontalBox>
        <HorizontalBox>
          <MyNavIconButton
            toggleInvisible={false}
            ariaLabel="show mails"
            text="Home"
            active="true"
          >
            <HomeIcon />
          </MyNavIconButton>
          <MyNavIconButton
            toggleInvisible={false}
            ariaLabel="show network"
            text="My Network"
          >
            <PeopleAltIcon />
          </MyNavIconButton>
          <MyNavIconButton
            toggleInvisible={true}
            ariaLabel="show jobs"
            text="Jobs"
          >
            <WorkIcon />
          </MyNavIconButton>
        </HorizontalBox>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default MainHeader;
