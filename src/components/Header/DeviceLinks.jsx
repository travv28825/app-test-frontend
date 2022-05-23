import { NavLink } from "react-router-dom"

export const DeviceLinks = () => {
    return (
        <div className="actions-device">
            <p>Devices</p>
            <ul>
                <li>
                    <NavLink to="/device/list">List devices</NavLink>
                </li>
                <li>
                    <NavLink to="/device/add">Add device</NavLink>
                </li>
            </ul>
        </div>
    )
}
