import { Routes, Route } from "react-router-dom";
import Add from "./Gateway/Add";
import Delete from "./Gateway/Delete";
import List from "./Gateway/List";
import Update from "./Gateway/Update";
import Layout from "./layouts/Layout";

export default () => (
  <Routes>
    <Route path="/" element={<Layout />}></Route>
    {/* <Route path="/gateway/" element={<Layout />}> */}
      <Route path="/gateway/list" element={<List />} />
      <Route path="/gateway/add" element={<Add />} />
      <Route path="/gateway/update" element={<Update />} />
      <Route path="/gateway/delete" element={<Delete />} />
    {/* </Route>
    <Route path="/device/" element={<Layout />}> */}
      <Route path="list" element={<List />} />
      <Route path="add" element={<Add />} />
      <Route path="update" element={<Update />} />
      <Route path="delete" element={<Delete />} />
    {/* </Route> */}
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
