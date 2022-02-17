import { createContext, useEffect, useState } from "react";
import data from "../data";

const AccountsContext = createContext({
  accounts: [],
  queryText: "",
  queryAccounts: (query) => {},
});

export const AccountsContextProvider = ({ children }) => {
  const [accounts, setAccounts] = useState([]);
  const [queryText, setQueryText] = useState("");

  useEffect(() => {
    setAccounts(data);
  }, []);

  const queryAccounts = (query) => {
    setQueryText(query);
  };

  let filteredAccounts = accounts;

  filteredAccounts = filteredAccounts.filter((item) => {
    return item["name"].toLowerCase().includes(queryText.toLocaleLowerCase());
  });

  return (
    <AccountsContext.Provider
      value={{ accounts: filteredAccounts, queryText, queryAccounts }}
    >
      {children}
    </AccountsContext.Provider>
  );
};

export default AccountsContext;
