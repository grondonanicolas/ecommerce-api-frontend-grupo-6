import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/home/Home';
import SignUp from '../pages/auth/register/SignUp';
import Login from '../pages/auth/login/Login';
import Cart from '../pages/cart/Cart';
import Catalog from '../pages/products/catalog/Catalog';
import Historic from '../pages/user/historic/Historic';
import Product from '../pages/products/product/Product';
import Profile from '../pages/user/profile/Profile';

const deliveredExampleData = {
  date: '04 de Marzo',
  status: 'Entregado',
  items: [
    {
      name: 'Skinny Fit Jeans',
      imageUrl: 'https://via.placeholder.com/300',
      quantity: 1,
    },
    {
      name: 'T-shirt with Tape Details',
      imageUrl: 'https://via.placeholder.com/300',
      quantity: 2,
    },
  ],
};

const inTransitExampleData = {
  date: '10 de Abril',
  status: 'En camino',
  items: [
    {
      name: 'Vintage Jacket',
      imageUrl: 'https://via.placeholder.com/300',
      quantity: 1,
    },
    {
      name: 'Casual Shoes',
      imageUrl: 'https://via.placeholder.com/300',
      quantity: 1,
    },
    {
      name: 'Sunglasses',
      imageUrl: 'https://via.placeholder.com/300',
      quantity: 1,
    },
  ],
};

const canceledExampleData = {
  date: '15 de Mayo',
  status: 'Cancelado',
  items: [
    {
      name: 'Formal Shirt',
      imageUrl: 'https://via.placeholder.com/300',
      quantity: 1,
    },
  ],
};

const purchasedItemListExampleData = [
  deliveredExampleData,
  inTransitExampleData,
  canceledExampleData,
];

const userData = {
  name: 'Jane Smith',
  avatarUrl: 'https://via.placeholder.com/64?text=JS',
  email: 'jane.smith@example.com',
};

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
    path: '/user',
    children: [
      {
        path: 'profile',
        element: (
          <Profile
            purchasedItemsHistory={purchasedItemListExampleData}
            user={userData}
          />
        ),
      },
      {
        path: 'historic',
        element: <Historic />,
      },
    ],
  },
  {
    path: '/products',
    children: [
      {
        path: 'catalog',
        element: <Catalog />,
      },
      {
        path: ':producId',
        element: <Product />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
