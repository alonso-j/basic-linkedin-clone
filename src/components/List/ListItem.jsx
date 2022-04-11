import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const StyledButton = styled(Button)(() => ({
  borderRadius: "1.6rem",
  textTransform: "none",
  marginTop: "12px",
  marginBottom: "12px",
  fontWeight: "900",
}));

const getInitials = (str) => {
  return str
    .split(" ")
    .map((word) => word[0])
    .join("");
};

function ListItem({ result }) {
  return (
    <>
      <Grid container sx={{ width: "100%" }}>
        <Grid
          item
          xs={1}
          sx={{ margin: "16px 12px 12px 16px", pt: "0 !important" }}
        >
          <Avatar>{getInitials(result.name)}</Avatar>
        </Grid>
        <Grid
          item
          xs={8}
          sx={{
            pt: "12px",
            pb: "12px",
            borderBottom: "1px solid #e0e0e0",
            letterSpacing: "0.2px",
          }}
        >
          <Box style={{ display: "flex", flexDirection: "row" }}>
            <Link
              style={{ fontWeight: "600", color: "inherit" }}
              href="#"
              underline="hover"
            >
              {result.name}
              {bull}
            </Link>
            <p
              style={{ fontWeight: "400", fontSize: "14px", color: "#666666" }}
            >
              2nd
            </p>
          </Box>
          <p style={{ fontWeight: "400", fontSize: "14px" }}>
            {result.job_title} at {result.company}
          </p>
          <p style={{ fontWeight: "300", fontSize: "14px", color: "#666666" }}>
            {result.country}
          </p>
          <Box style={{ display: "flex", flexDirection: "row" }}>
            <SupervisorAccountIcon
              sx={{ color: "rgba(63, 63, 63, 0.822)", marginRight: "3px" }}
            />
            <p
              style={{
                fontWeight: "400",
                fontSize: "12px",
                color: "rgba(63, 63, 63, 0.822)",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              distinctio.
            </p>
          </Box>
        </Grid>
        <Grid item xs={2} sx={{ borderBottom: "1px solid #e0e0e0" }}>
          <StyledButton variant="outlined">
            <Typography variant="body2">Connect</Typography>
          </StyledButton>
        </Grid>
      </Grid>
    </>
  );
}

export default ListItem;
