import { FC, JSX, PropsWithChildren } from 'react';
import styles from './Layout.module.scss'
import { Header } from '@/entities/Header';
import { Footer } from '@/entities/Footer';

const Layout: FC<PropsWithChildren> = ({children}): JSX.Element => {
  return (
    <div className={styles.Layout}>
      <Header />
      <main className={styles.Layout__content}>
        {children}
      </main>
      <Footer />
    </div>
  );
};
export { Layout };
