import { Routes, Route } from "react-router-dom";
// GATEWAY
import AddGateway from "../Gateway/Add";
import DeleteGateway from "../Gateway/Delete";
import ListGateway from "../Gateway/List";
import UpdateGateway from "../Gateway/Update";
// DEVICE
import AddDevice from "../Device/Add";
import DeleteDevice from "../Device/Delete";
import ListDevice from "../Device/List";
import UpdateDevice from "../Device/Update";


import Home from "../Home";

import Layout from "../layouts/Layout";
import GatewayLayout from "../layouts/Gateway"
import DeviceLayout from "../layouts/Device"

export default () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/gateway" element={<GatewayLayout />}>
      <Route path="list" element={<ListGateway />} />
      <Route path="add" element={<AddGateway />} />
      <Route path="update" element={<UpdateGateway />} />
      <Route path="delete" element={<DeleteGateway />} />
    </Route>
    <Route path="/device" element={<DeviceLayout />}>
      <Route path="list" element={<ListDevice />} />
      <Route path="add" element={<AddDevice />} />
      <Route path="update" element={<UpdateDevice />} />
      <Route path="delete" element={<DeleteDevice />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
);

const NotFound = () => (
  <h2>
    Not Found 404 -----{" "}
    <a style={{ color: "blue" }} href="/">
      {" "}
      Go back to home
    </a>{" "}
  </h2>
);
