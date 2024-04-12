import { JSX } from 'react';
import { Container } from '@/shared/ui/Container/Container';
import styles from './Header.module.scss';

const Header = (): JSX.Element => {
  return (
    <header className={styles.Header}>
      <Container>
        <p className={styles.Header__title}>
          Picasso test task
        </p>
      </Container>
    </header>
  );
};
export { Header };
