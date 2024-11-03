import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/home/Home';
import SignUp from '../pages/auth/register/SignUp';
import Login from '../pages/auth/login/Login';
import Cart from '../pages/cart/Cart';
import Catalog from '../pages/products/catalog/Catalog';
import Historic from '../pages/products/historic/Historic';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/products',
    children: [
      {
        path: 'catalog',
        element: <Catalog />,
      },
      {
        path: 'historic',
        element: <Historic />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
