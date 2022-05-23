import { Link } from "react-router-dom";

export const Actions = ({ path, onDelete, id }) => <div className="actions">
    <Link
        className="btn update"
        to={`${path}${id}`}
    >
        Update
    </Link>
    <Link
        className="btn delete"
        onClick={() => onDelete(id)}
        to=""
    >
        Delete
    </Link>
</div>
