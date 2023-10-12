import { useState } from 'react';
import { connect } from 'react-redux';

function Home({ toDos }) {
  const [text, setText] = useState('');
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setText('');
  };
  return (
    <div>
      <h1>To Dos</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </div>
  );
}

function mapStateToProps(state) {
  return { toDos: state };
}

export default connect(mapStateToProps)(Home);
