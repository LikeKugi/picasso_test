import { JSX } from 'react';
import { useFetchPostsQuery } from '@/shared/api/post';
import { useAppSelector } from '@/app/store';
import { selectPostsLimit, selectPostsStart } from '@/app/store/slices/postsSlice';
import { PostList } from '@/widgets/posts';

const MainPage = (): JSX.Element => {

  const start = useAppSelector(selectPostsStart);
  const limit = useAppSelector(selectPostsLimit);

  const { isLoading } = useFetchPostsQuery({ start, limit });

  return (
    <>
      {isLoading ? (<p>Loading...</p>) : <PostList />}

    </>
  );
};
export { MainPage };
