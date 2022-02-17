import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { alpha, styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import CircleTwoToneIcon from "@mui/icons-material/CircleTwoTone";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const StyledConnectButton = styled(Button)(() => ({
  textTransform: "none",
  fontWeight: "bold",
  size: "medium",
  borderRadius: "1.6rem",
  border: "0.1rem solid",
  "&:hover": {
    border: "0.2rem solid",
    backgroundColor: alpha("#0A66C2", 0.2),
  },
}));

const StyledItemTitle = styled(Typography)(() => ({
  "&:hover": {
    textDecoration: "underline",
    cursor: "pointer",
  },
}));

function ListItem({ result }) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Grid container sx={{ padding: "1rem 0 1rem 1rem" }}>
        <Grid
          item
          xs={1}
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <CircleTwoToneIcon
            color="primary"
            sx={{ width: "80%", height: "80%" }}
          />
        </Grid>
        <Grid
          item
          xs={9}
          sx={{ borderBottom: "1px solid #ccc", paddingBottom: "1rem" }}
        >
          <Box sx={{ flexDirection: "row" }}>
            <StyledItemTitle variant="h5" component="span">
              {result.name} {bull}
            </StyledItemTitle>
            <Typography color="text.secondary" component="span">
              {" "}
              2nd
            </Typography>
          </Box>
          <Typography typography={{ fontWeight: "medium" }}>
            {result.job_title}
          </Typography>
          <Typography color="text.secondary">{result.country}</Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, obcaecati?
          </Typography>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{
            display: "grid",
            borderBottom: "1px solid #ccc",
            alignItems: "flex-start",
            justifyContent: "flex-end",
            paddingRight: "1.5rem",
          }}
        >
          <StyledConnectButton
            variant="outlined"
            size="medium"
            sx={{ borderRadius: "1.6rem" }}
          >
            Connect
          </StyledConnectButton>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ListItem;
