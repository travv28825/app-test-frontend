import { Routes, Route } from "react-router-dom";

// GATEWAY
import { AddG, ListG, UpdateG } from '../Gateway'
// DEVICE
import AddDevice from "../Device/Add";
import ListDevice from "../Device/List";
import UpdateDevice from "../Device/Update";
// PAGES
import Home from "../Home";

export default () => (
  <Routes>
    <Route path="/" element={<Home />} />
    {/* gateway route */}
    <Route path="/gateway/list" element={<ListG />} />
    <Route path="/gateway/add" element={<AddG />} />
    <Route path="/gateway/update/:serial" element={<UpdateG />} />
    {/* devices route */}
    <Route path="/device/list" element={<ListDevice />} />
    <Route path="/device/add" element={<AddDevice />} />
    <Route path="/device/update/:uid" element={<UpdateDevice />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

const NotFound = () => (
  <h2>
    Not Found 404-
    <a style={{ color: "blue" }} href="/">
      Go back to home
    </a>
  </h2>
);
