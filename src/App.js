import data from "./data.json";

import "./App.css";

import Layout from "./components/Layout/Layout";
import List from "./components/List/List";

const App = () => {
  return (
    <Layout>
      <List results={data} />
    </Layout>
  );
};

export default App;
