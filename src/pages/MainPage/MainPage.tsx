import { JSX } from 'react';
import { PostList } from '@/widgets/posts';
import { useScroller } from '@/features/useScroller/Scroller';

const MainPage = (): JSX.Element => {

  useScroller();

  return (
    <>
      <PostList />
    </>
  );
};
export { MainPage };
