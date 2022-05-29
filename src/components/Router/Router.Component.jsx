import { Routes, Route, Link } from 'react-router-dom';

import Home from '../Home';
import Gateway from '../Gateway';
import Device from '../Device';

function RouterApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gateway" element={<Gateway />} />
      <Route path="/device" element={<Device />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

const NotFound = () => (
  <h2>
    Not Found 404-
    <Link style={{ color: 'blue' }} to="/">
      Go back to home
    </Link>
  </h2>
);

export default RouterApp;
