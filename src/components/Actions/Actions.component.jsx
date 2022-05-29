import { Link } from 'react-router-dom';

import './Actions.style.css';

function Actions({ onDelete, id, actionUpdate }) {
  return (
    <div className="actions">
      <Link className="btn btn-update" to="" onClick={actionUpdate}>
        Update
      </Link>
      <Link className="btn btn-delete" onClick={() => onDelete(id)} to="">
        Delete
      </Link>
    </div>
  );
}

export default Actions;
