import { FC, JSX, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/app/store';

const Providers: FC<PropsWithChildren> = ({children}): JSX.Element => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
export { Providers };
