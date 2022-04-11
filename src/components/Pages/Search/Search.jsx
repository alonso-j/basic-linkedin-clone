import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import MyCard from "../../UI/MyCard";
import CardLink from "../../Cards/CardLink";
import CardSocial from "../../Cards/CardSocial";
import results from "../../../data.json";
import ListItem from "../../List/ListItem";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Search = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={5.5}>
          <MyCard title="People">
            {results.map((result) => (
              <ListItem key={result.id} result={result} />
            ))}
            <CardLink text="See all people results" url="#" />
          </MyCard>
          <MyCard title="Posts">
            <CardSocial />
          </MyCard>
        </Grid>
        <Grid item xs={3.5}>
          <Item>Promo</Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Search;
