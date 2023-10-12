import { useParams } from 'react-router-dom';

function Detail() {
  const id = useParams().id;
  return (
    <div>
      <h1>Detail {id}</h1>
    </div>
  );
}

export default Detail;
