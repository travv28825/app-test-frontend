import { NavLink } from "react-router-dom";
import { DeviceLinks } from "./DeviceLinks";
import { GatewayLinks } from "./GatewayLinks";
import './style.css'

export default () => (
  <header>
    <nav className="navigation">
    <GatewayLinks />
    <DeviceLinks />
    </nav>
  </header>
);
