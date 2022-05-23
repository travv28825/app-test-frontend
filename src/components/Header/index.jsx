import { NavLink } from "react-router-dom";
import { DeviceLinks } from "./DeviceLinks";
import { GatewayLinks } from "./GatewayLinks";

export default () => (
  <header>
    <div className="title-h">
      <NavLink to="/gateway/list">
        <h3 className="test">Home</h3>
      </NavLink>
    </div>
    <GatewayLinks />
    <DeviceLinks />
  </header>
);
