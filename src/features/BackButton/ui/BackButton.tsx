import { JSX } from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)}>
      Back
    </button>
  );
};
export { BackButton };
