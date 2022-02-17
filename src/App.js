import { useContext } from "react";
import AccountsContext from "./store/AccountsContext";

import "./App.css";

import Layout from "./components/Layout/Layout";
import List from "./components/List/List";
import BodyBox from "./components/UI/Box/BodyBox";

const App = () => {
  const ctxAccounts = useContext(AccountsContext);

  return (
    <Layout>
      <BodyBox>
        <List results={ctxAccounts.accounts} />
      </BodyBox>
    </Layout>
  );
};

export default App;
