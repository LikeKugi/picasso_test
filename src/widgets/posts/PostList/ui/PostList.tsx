import { JSX } from 'react';
import { useAppSelector } from '@/app/store';
import { selectPosts } from '@/app/store/slices/postsSlice';
import { PostItem } from '@/widgets/posts/PostItem';
import { Container } from '@/shared/ui/Container/Container';
import styles from './PostList.module.scss'

const PostList = (): JSX.Element => {

  const data = useAppSelector(selectPosts);

  return (
    <Container className={styles.PostList}>
      {data.map(post => (<PostItem post={post} key={post.id} />))}
    </Container>
  );
};
export { PostList };
