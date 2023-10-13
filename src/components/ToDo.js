import { connect } from 'react-redux';
import { deleteToDoAction } from '../store';
import { Link } from 'react-router-dom';

function Todo({ text, id, deleteToDo }) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={deleteToDo}>DEL</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    deleteToDo: () => dispatch(deleteToDoAction(ownProps.id)),
  };
}
export default connect(null, mapDispatchToProps)(Todo);
