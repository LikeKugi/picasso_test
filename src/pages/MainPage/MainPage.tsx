import { JSX } from 'react';
import { useFetchPostsQuery } from '@/shared/api/post';
import { useAppSelector } from '@/app/store';
import { selectPosts, selectPostsLimit, selectPostsStart } from '@/app/store/slices/postsSlice';
import { Link } from 'react-router-dom';

const MainPage = (): JSX.Element => {

  const start = useAppSelector(selectPostsStart);
  const limit = useAppSelector(selectPostsLimit);
  const data = useAppSelector(selectPosts);

  const { isLoading } = useFetchPostsQuery({ start, limit });

  return (
    <>
      {isLoading && (<p>Loading...</p>)}
      {data.map(post => (<div key={post.id}>
        <p>{post.title}</p>
        <p>{post.body}</p>
        <Link to={`${post.id}`}>About</Link>
      </div>))}
    </>
  );
};
export { MainPage };
