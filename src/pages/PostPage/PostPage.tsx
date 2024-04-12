import { JSX } from 'react';
import { useParams } from 'react-router-dom';

const PostPage = (): JSX.Element => {
  const {postId} = useParams();
  return (
    <>
      {postId}
    </>
  );
};
export { PostPage };
