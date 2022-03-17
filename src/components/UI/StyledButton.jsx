import { Button } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

const StyledButton = styled(Button)(() => ({
  textTransform: "none",
  fontWeight: "bold",
  size: "medium",
  borderRadius: "1.6rem",
  border: "0.1rem solid",
  "&:hover": {
    border: "0.2rem solid",
    backgroundColor: alpha("#F3F2EF", 0.2),
  },
}));

const styledButton = (props, { text }) => {
  return <StyledButton {...props}>{text}</StyledButton>;
};

export default styledButton;
