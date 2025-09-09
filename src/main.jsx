import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Home from './Home';
import Products from './Products';
import Login from './Login';
import ProductDetails from './ProductDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "products",   
        element: <Products />
      },
      {
        path:"products/:id",
        element:<ProductDetails/>
      },
      { 
        path: "dashboard", 
        element: (
          <ProtectedRoute requiredRole="admin">
            <Dashboard />
          </ProtectedRoute>
        )
      },
    ]
  },
  {path:"/login",element:<Login/>}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
