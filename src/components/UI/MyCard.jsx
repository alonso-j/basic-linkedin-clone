import * as React from "react";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)(() => ({
  width: "100%",
  borderRadius: "7px",
}));

const MyCard = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};

export default MyCard;
