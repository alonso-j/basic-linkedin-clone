import * as React from "react";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const StyledCard = styled(Card)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  borderRadius: "7px",
  marginBottom: "8px",
}));

const StyledDiv = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  padding: "15px 12px 4px 16px",
}));

const Title = ({ text }) => (
  <StyledDiv>
    <Typography variant="h6" component="h2">
      {text}
    </Typography>
  </StyledDiv>
);

const MyCard = ({ children, title }) => {
  return (
    <StyledCard variant="outlined">
      {!!title ? <Title text={title} /> : ""}
      {children}
    </StyledCard>
  );
};

export default MyCard;
