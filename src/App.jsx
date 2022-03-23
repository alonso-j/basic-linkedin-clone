import { Routes, Route } from "react-router-dom";
import { styled } from "@mui/material/styles";

import Header from "./components/Layout/Header";
import Main from "./components/Layout/Main";
import Home from "./components/Pages/Home/Home";

const StyledDiv = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
}));

const App = () => {
  return (
    <StyledDiv>
      <Header />
      <Main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </Main>
    </StyledDiv>
  );
};

export default App;
