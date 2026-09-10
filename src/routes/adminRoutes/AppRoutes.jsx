import {createBrowserRouter, RouterProvider} from 'react-router';
import AuthLayout from '../../app/layout/AuthLayout';
import MainAdminLayout from '../../app/layout/MainAdminLayout';
import Products from '../../features/admin/products/ui/pages/Products';
import SingleProduct
  from '../../features/admin/products/ui/pages/SingleProduct';
import AddProduct from '../../features/admin/products/ui/pages/AddProduct';

const AppRoutes = () => {
  let router = createBrowserRouter ([
    {
      path: '/',
      element: <AuthLayout />,
    },
    {
      path: 'main',
      element: <MainAdminLayout />,
      children: [
        {
          path: '',
          element: <Products />,
        },
        {
          path: 'details/:id',
          element: <SingleProduct />,
        },
        {
          path: 'add',
          element: <AddProduct />,
        },
        {
          path: 'update/:id',
          element: <AddProduct />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
