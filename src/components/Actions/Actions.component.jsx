import { Link } from 'react-router-dom';

import './Actions.style.css';

function Actions({ actionDelete, actionUpdate }) {
  return (
    <div className="actions">
      <Link className="btn btn-update" to="" onClick={actionUpdate}>
        Update
      </Link>
      <Link className="btn btn-delete" to="" onClick={actionDelete}>
        Delete
      </Link>
    </div>
  );
}

export default Actions;
