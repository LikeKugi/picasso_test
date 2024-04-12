import { JSX, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useLazyFetchPostByIdQuery } from '@/shared/api/post';
import { SinglePost } from '@/widgets/SinglePost';

const PostPage = (): JSX.Element => {
  const {postId} = useParams();
  const navigate = useNavigate();

  const [fetchPost, {data, isLoading}] = useLazyFetchPostByIdQuery();

  useEffect(() => {
    if (!postId) {
      navigate(-1);
    } else {
      fetchPost({ postId });
    }

  }, [postId, fetchPost, navigate])

  return (
    <>
      {isLoading ? (<p>Loading...</p>) : data && <SinglePost post={data} />}
    </>
  );
};
export { PostPage };
