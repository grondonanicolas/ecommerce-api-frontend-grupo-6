import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/home/Home';
import SignUpPage from '../pages/auth/register/SignUpPage';
import LoginPage from '../pages/auth/login/LoginPage';
import CartPage from '../pages/cart/CartPage';
import Catalog from '../pages/products/catalog/Catalog';
import Historic from '../pages/user/historic/Historic';
import Product from '../pages/products/product/Product';
import Profile from '../pages/user/profile/Profile';
import ProductAdminBoard from '../pages/admin/products/ProductAdminBoard';
import ProductCreate from '../pages/admin/products/ProductCreate';
import ProductAdmin from '../pages/admin/products/ProductAdmin';
import ProtectedRoute from './ProtectedRoute';
import NotFound from '../pages/not-found/NotFound';
import AuthWrapper from './AuthWrapper';
import UserAdmin from '../pages/admin/users/UserAdmin';
import EcommerceContainer from '../components/EcommerceContainer';
import AdminContainer from '../components/AdminContainer';
import CategoriesAdmin from '../pages/admin/categories/CategoriesAdmin';
import Favourites from '../pages/user/favourites/Favourites';

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
    element: <AuthWrapper />,
    children: [
      {
        path: '*',
        element: <NotFound />,
      },
      {
        path: '/signup',
        element: <SignUpPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/admin',
        element: <ProtectedRoute requiredRole="ADMIN" />,
        children: [
          {
            element: <AdminContainer />,
            children: [
              { path: 'products', element: <ProductAdminBoard /> },
              { path: 'products/create', element: <ProductCreate /> },
              { path: 'products/:productId', element: <ProductAdmin /> },
              { path: 'categories', element: <CategoriesAdmin /> },
              { path: 'users', element: <UserAdmin /> },
            ],
          },
        ],
      },
      {
        element: <EcommerceContainer />,
        children: [
          {
            path: '/',
            element: <Home />,
          },
          {
            path: '/products',
            children: [
              {
                path: 'catalog',
                element: <Catalog />,
              },
              {
                path: ':productId',
                element: <Product />,
              },
            ],
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
                element: <ProtectedRoute requiredRole="USER" />,
                children: [
                  {
                    path: 'historic',
                    element: <Historic />,
                  },
                  {
                    path: 'favourites',
                    element: <Favourites />,
                  },
                ],
              },
            ],
          },
          {
            element: <ProtectedRoute requiredRole="USER" />,
            children: [
              {
                path: '/cart',
                element: <CartPage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
