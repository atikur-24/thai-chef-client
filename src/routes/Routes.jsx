import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home/Home';
import Blog from '../pages/Blog/Blog';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import ChefDetails from '../pages/Home/Chef/ChefDetails';
import Login from '../pages/Login/Login';
import Register from '../pages/Login/Register';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'blog',
                element: <Blog />
            },
            {
                path: ':id',
                element: <PrivateRoute> <ChefDetails /> </PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/chefs/${params.id}`)
                // loader: ({params}) => fetch(`https://thai-kitchen-chronicles-server-atikur-24.vercel.app/chefs/${params.id}`)
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signUp',
                element: <Register />
            }
        ]
    }
])

export default router;