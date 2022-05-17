import { BrowserRouter as Router } from "react-router-dom";

import RouterApp from "../src/components/Router";
import Layout from "./components/layouts/Layout";

const App = () => (
  <Router>
    <Layout>
      <RouterApp />
    </Layout>
  </Router>
);

export default App;
