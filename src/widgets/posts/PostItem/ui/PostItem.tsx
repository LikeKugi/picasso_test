import { FC, JSX } from 'react';
import { IPost } from '@/shared/types';
import { cropString } from '@/shared/utils/cropString';
import { Link } from 'react-router-dom';
import styles from './PostItem.module.scss'

interface IPostItemProps {
  post: IPost;
}

const PostItem: FC<IPostItemProps> = ({post}): JSX.Element => {
  return (
    <div className={styles.PostItem}>
      <span className={styles.PostItem__number}>{post.id}</span>
      <span className={styles.PostItem__title}>{cropString(post.title)}</span>
      <span className={styles.PostItem__body}>{cropString(post.body, 60)}</span>
      <Link className={styles.PostItem__link} to={`${post.id}`}>More</Link>
    </div>
  );
};
export { PostItem };
