import { connect } from 'react-redux';
import { deleteToDoAction } from '../store';

function Todo({ text, deleteToDo }) {
  return (
    <li>
      {text}
      <button onClick={deleteToDo}>DEL</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  console.log(ownProps)
  return {
    deleteToDo: () => dispatch(deleteToDoAction(ownProps.id)),
  };
}
export default connect(null, mapDispatchToProps)(Todo);
