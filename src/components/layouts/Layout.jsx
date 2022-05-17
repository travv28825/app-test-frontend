import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom"

import Header from "../Header";

function Layout({ children }) {
  const [listGateway, setListGateway] = useState([]);
  const [listDevice, setListDevice] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getData() {
    const gateways = await (
      await fetch("http://localhost:5200/api/gateway")
    ).json();
    const devices = await (
      await fetch("http://localhost:5200/api/gateway")
    ).json();
    if (gateways.success && devices.success) {
      setListGateway(gateways.data);
      setListDevice(devices.data);
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="app">
      <Header />
      <div className="container">
        {!loading ? (
          <div className="info-data">
            <p>Total gateways: {listGateway ? listGateway.length : ""}</p>
            <p>Total devices: {listDevice ? listDevice.length : ""}</p>
          </div>
        ) : (
          <p className="info-data">Pidiendo datos...</p>
        )}
        <div className="content">
            {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
