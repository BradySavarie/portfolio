import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeContextProvider } from './theme/ThemeContextProvider';
import App from './App';
import NotFound from './components/NotFound';
const router = createBrowserRouter([
    {
        path: '/',
        element: _jsx(App, {}),
        errorElement: _jsx(NotFound, {}),
    },
]);
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(React.StrictMode, { children: _jsx(ThemeContextProvider, { children: _jsx(RouterProvider, { router: router }) }) }));
