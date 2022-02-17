import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const StyledBox = styled(Box)(() => ({
  margin: "0 20% 0 20%",
  justifyContent: "center",
}));

const BodyBox = ({ children }) => {
  return <StyledBox>{children}</StyledBox>;
};

export default BodyBox;
