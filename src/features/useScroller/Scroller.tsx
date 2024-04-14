import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/store';
import { checkScreenPosition } from '@/shared/utils/checkScreenPosition';
import { selectPostsLimit, selectPostsStart, setStartPosts } from '@/app/store/slices/postsSlice';
import { useFetchPostsQuery } from '@/shared/api/post';
import { throttle } from 'throttle-typescript';

const useScroller = () => {

  const dispatch = useAppDispatch();

  const start = useAppSelector(selectPostsStart);
  const limit = useAppSelector(selectPostsLimit);

  const {isFetching} = useFetchPostsQuery({ start, limit });

  const scrollHandler = throttle(() => {
    if (isFetching) return;
    if (checkScreenPosition()) {
      dispatch(setStartPosts(start + limit));
    }
  }, 100)

  useEffect(() => {
    scrollHandler();
    document.addEventListener('scroll', scrollHandler);
    document.addEventListener('resize', scrollHandler);
    return () => {
      document.removeEventListener('scroll', scrollHandler);
      document.removeEventListener('resize', scrollHandler);
    }
  },[scrollHandler])

};
export { useScroller };
