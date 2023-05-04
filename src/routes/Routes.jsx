import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home/Home';
import Blog from '../pages/Blog/Blog';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import ChefDetails from '../pages/Home/Chef/ChefDetails';

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
                element: <ChefDetails />,
                loader: ({params}) => fetch(`http://localhost:5000/chefs/${params.id}`)
            }
        ]
    }
])

export default router;