import { BrowserRouter as Router } from 'react-router-dom';

import Layout from './components/layouts/Layout';
import RouterApp from './components/Router/Router.Component';
import GatewayProvider from './providers/Gateway/Gateway.provider';

function App() {
  return (
    <GatewayProvider>
      <Router>
        <Layout>
          <RouterApp />
        </Layout>
      </Router>
    </GatewayProvider>
  );
}

export default App;
