import { JSX } from 'react';
import { createHashRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { RouterConstants } from '@/shared/constants/router.constants';
import { RootPage } from '@/pages/RootPage/RootPage';
import { MainPage } from '@/pages/MainPage/MainPage';
import { PostPage } from '@/pages/PostPage/PostPage';

const router = createHashRouter(createRoutesFromElements(
  <Route path={RouterConstants.INDEX.path}
         element={<RootPage/>}>
    <Route index
           element={<MainPage/>}/>
    <Route path={RouterConstants.POST.path}
           element={<PostPage/>}/>
  </Route>
));

const AppRouter = (): JSX.Element => {
  return (
    <RouterProvider router={router}/>
  );
};
export { AppRouter };
