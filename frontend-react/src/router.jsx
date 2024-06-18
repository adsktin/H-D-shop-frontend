import {createBrowserRouter} from "react-router-dom";
import Layout from "./layout/Layout";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      {
            // path: 'user',
            // element: <UserLayout />,
            path: 'login',
            element: <Login/>,
      },
      {
            // path: 'products',
            // element: <ProductsFilter />,
            path: 'signup',
            element: <Signup/>,
      },
    ]
  },  
 
])

export default router;
