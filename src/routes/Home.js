import { useState } from 'react';
import { connect } from 'react-redux';
import { addToDoAction } from '../store';
import ToDo from '../components/ToDo';

function Home({ toDos, addToDo }) {
  const [text, setText] = useState('');
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setText('');
    addToDo(text);
  };
  return (
    <div>
      <h1>To Dos</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(addToDoAction(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
