import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";

const StyledMain = styled("main")(() => ({
  display: "block",
  flex: "1 1 0%",
  paddingTop: "1rem",
}));

const Main = ({ children }) => {
  return (
    <StyledMain>
      <Container maxWidth="lg">{children}</Container>
    </StyledMain>
  );
};

export default Main;
