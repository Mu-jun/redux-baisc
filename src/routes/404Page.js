import { useNavigate } from 'react-router-dom';

function Error404() {
  const navigate = useNavigate();
  const onClick = (e) => {
    e.preventDefault();
    navigate('/');
  };
  return (
    <>
      <h1>404 Not Found</h1>
      <button onClick={onClick}>Go to Home</button>
    </>
  );
}

export default Error404;
