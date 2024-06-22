import {createBrowserRouter} from "react-router-dom";
import Layout from "./layout/Layout";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Home from "./pages/User/HomePage/Home";
import About from "./pages/User/About/About";
import Blog from "./pages/User/Blog/Blog";
import BlogDetail from "./pages/User/Blog/BlogDetail";
import ShoppingCard from "./pages/User/ShoppingCart/ShoppingCard";
import ProductDetail from "./components/ProductDetail/ProductDetail";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      {
            path: 'login',
            element: <Login/>,
      },
      {
            path: 'signup',
            element: <Signup/>,
      },
      {
            path: 'home',
            element: <Home/>,
      },
      {
            path: 'about',
            element: <About/>,
      },
      {
            path: 'blog',
            element: <Blog/>,
            // children:[
              
            //  ]
      },
      {
            path: 'blogdetail',
            element: <BlogDetail/>,
      },
      {
            path: 'shoppingcard',
            element: <ShoppingCard/>,
      },
      {
            path: 'productdetail',
            element: <ProductDetail/>,
      },
    ]
  },  
 
])

export default router;
