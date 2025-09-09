import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Home from './Home';
import Products from './Products';
import Login from './Login';
import ProductDetails from './ProductDetails';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './Routes/ProtectedRoute';
import Dashboard from './DashBoard';
import Register from './Rejister';

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
  {path:"/login",element:<Login/>},
  { path: "register", element: <Register /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);
