import { useGateway } from '../../../providers/Gateway';

import ItemGateway from '../ItemGateway';
import './ListGateway.style.css';

function ListGateway() {
  const { state } = useGateway();
  const hasGateways = state?.gateways?.length > 0;

  return (
    <div className="list-gateway">
      <div className="list-gateway-header">
        <h4>All gateways</h4>
      </div>
      <div className="list-gateway-body">
        <ul className="list-items">
          {hasGateways
            ? state.gateways.map((itemGateway) => (
                <ItemGateway key={itemGateway.serial} gateway={itemGateway} />
              ))
            : ''}
        </ul>
      </div>
    </div>
  );
}

export default ListGateway;
