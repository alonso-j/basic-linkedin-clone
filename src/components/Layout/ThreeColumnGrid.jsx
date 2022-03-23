import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ProfileCard from "../Cards/ProfileCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const StyledBox = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
}));

const ThreeColumnGrid = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={2.5}>
          <StyledBox>
            <ProfileCard />
          </StyledBox>
        </Grid>
        <Grid item xs={6}>
          <Item>Posts</Item>
        </Grid>
        <Grid item xs={3.5}>
          <Item>Recommendations</Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ThreeColumnGrid;
