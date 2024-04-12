import { FC, JSX } from 'react';
import { IPost } from '@/shared/types';
import { BackButton } from '@/features/BackButton';
import { Container } from '@/shared/ui/Container/Container';
import styles from './SinglePost.module.scss'

interface ISinglePostProps {
  post: IPost;
}

const SinglePost: FC<ISinglePostProps> = ({post}): JSX.Element => {

  return (
    <div className={styles.SinglePost}>
      <Container>
        <h1 className={styles.SinglePost__title}>{post.title}</h1>
        <p className={styles.SinglePost__body}>{post.body}</p>
        <div className={styles.SinglePost__actions}>
          <BackButton />
        </div>
      </Container>
    </div>
  );
};
export { SinglePost };
