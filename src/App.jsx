import { Routes, Route } from "react-router-dom";

import Header from "./components/Pages/Header";
import Main from "./components/Pages/Main";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/home" element={<Main />} />
      </Routes>
    </>
  );
};

export default App;
