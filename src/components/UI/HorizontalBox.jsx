import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const StyledBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
}));

const HorizontalBox = ({ children }) => {
  return <StyledBox>{children}</StyledBox>;
};

export default HorizontalBox;
