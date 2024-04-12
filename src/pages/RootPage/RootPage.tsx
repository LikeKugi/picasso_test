import { JSX } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from '@/app/Layout/Layout';

const RootPage = (): JSX.Element => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
export { RootPage };
