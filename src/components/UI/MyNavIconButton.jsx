import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Badge } from "@mui/material";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";

const StyledBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  marginLeft: "1rem",
  marginRight: "1rem",
  fontSize: ".8rem",
  cursor: "pointer",
  "&:hover": {
    color: "#000",
  },
}));

const StyledIconButton = styled(ButtonUnstyled)(() => ({
  padding: "0",
  color: "inherit",
  background: "none",
  border: "none",
}));

const MyNavIconButton = ({ toggleInvisible, ariaLabel, text, children }) => {
  return (
    <StyledBox>
      <StyledIconButton aria-label={ariaLabel}>
        <Badge variant="dot" color="error" invisible={toggleInvisible}>
          {children}
        </Badge>
      </StyledIconButton>
      <span>{text}</span>
    </StyledBox>
  );
};

export default MyNavIconButton;
