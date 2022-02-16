import { useContext } from "react";
import AccountsContext from "./store/AccountsContext";

import "./App.css";

import Layout from "./components/Layout/Layout";
import List from "./components/List/List";

const App = () => {
  const ctxAccounts = useContext(AccountsContext);

  return (
    <Layout>
      <List results={ctxAccounts.accounts} />
    </Layout>
  );
};

export default App;
