import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import Error404 from '../routes/404Page';

function Detail({ toDos }) {
  const id = +useParams().id;
  const toDo = toDos.find((toDo) => toDo.id === id);
  if (!toDo) return <Error404 />;
  return (
    <div>
      <h1>{toDo?.text}</h1>
      <p>
        Create At:{' '}
        {new Intl.DateTimeFormat('ko-KR', {
          dateStyle: 'full',
          timeStyle: 'long',
        }).format(toDo?.id)}
      </p>
    </div>
  );
}

function mapStateToProps(state) {
  const toDos = state;
  return { toDos };
}

export default connect(mapStateToProps)(Detail);
