import {createBrowserRouter} from "react-router-dom";
import Layout from "./layout/Layout";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Home from "./pages/user/HomePage/Home";
import About from "./pages/user/About/About";
import Blog from "./pages/user/Blog/Blog";
import BlogDetail from "./pages/user/Blog/BlogDetail";
import ShoppingCard from "./pages/user/ShoppingCart/ShoppingCard";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import AdminLayout from "./pages/admin/AdminLayout";
import AccountLayout from "./pages/user/Account/AccountLayout";
import AccountDashboard from "./pages/user/Account/AccountDashboard";
import AccountProfile from "./pages/user/Account/AccountProfile";
import AccountFavourite from "./pages/user/Account/AccountFavourite";
import AccountComment from "./pages/user/Account/AccountComment";
import AccountOrder from "./pages/user/Account/AccountOrder";
import AdminAccount from "./pages/admin/AdminAccount";
import AdminProduct from "./pages/admin/AdminProduct";
import AdminProductColor from "./pages/admin/AdminProductColor";
import SlideShow from "./pages/admin/AdminSlideShow";
import OrderAdd from "./pages/admin/AdminOrderAdd";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      {
            path: '/',
            element: <Home/>,
      },
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
      {
            path: 'account',
            element: <AccountLayout/>,
            children:[
                  {
                        path: '/account',
                        element: <AccountDashboard/>,
                  },
                  {
                        path: 'accountdashboard',
                        element: <AccountDashboard/>,
                  },
                  {
                        path: 'accountprofile',
                        element: <AccountProfile/>,
                  },
                  {
                        path: 'accountfavourite',
                        element: <AccountFavourite/>,
                  },
                  {
                        path: 'accountcomment',
                        element: <AccountComment/>,
                  },
                  {
                        path: 'accountorder',
                        element: <AccountOrder/>,
                  },
            ]
      },
    ],
  },  
      // admin
      {
            path: 'admin',
            element: <AdminLayout/>,
            children:[
                  {
                        path: 'adminaccount',
                        element: <AdminAccount/>,
                  },
                  {
                        path: 'adminproduct',
                        element: <AdminProduct/>,
                  },
                  {
                        path: 'productcolor',
                        element: <AdminProductColor/>,
                  },
                  {
                        path: 'slideshow',
                        element: <SlideShow/>,
                  },
                  {
                        path: 'order',
                        element: <OrderAdd/>,
                  },
            ]
      },
])

export default router;
