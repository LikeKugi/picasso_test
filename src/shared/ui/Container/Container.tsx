import { FC, JSX } from 'react';
import { clsx } from 'clsx';
import styles from './Container.module.scss'

export type IContainerProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const Container: FC<IContainerProps> = ({className, children, ...other}): JSX.Element => {
  return (
    <div {...other} className={clsx(styles.Container, className)}>
      {children}
    </div>
  );
};
export { Container };
