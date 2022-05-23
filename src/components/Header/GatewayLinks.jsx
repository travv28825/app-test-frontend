import { NavLink } from "react-router-dom"

export const GatewayLinks = () => {
    return (
        <div className="actions-gateway">
            <p>Gateways</p>
            <ul>
                <li>
                    <NavLink to="/gateway/list">List gateways</NavLink>
                </li>
                <li>
                    <NavLink to="/gateway/add">Add gateway</NavLink>
                </li>
            </ul>
        </div>
    )
}
