import { JSX } from 'react';
import { Container } from '@/shared/ui/Container/Container';
import styles from './Footer.module.scss';

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.Footer}>
      <Container>
        <a href="https://github.com/LikeKugi" rel={'nofollow'} target={'_blank'}>GitHub @LikeKugi</a>
      </Container>
    </footer>
  );
};
export { Footer };
