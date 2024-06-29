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
import AccountLayout from "./pages/User/Account/AccountLayout";
import AccountDashboard from "./pages/User/Account/AccountDashboard";
import AccountProfile from "./pages/User/Account/AccountProfile";
import AccountFavourite from "./pages/User/Account/AccountFavourite";
import AccountComment from "./pages/User/Account/AccountComment";
import AccountOrder from "./pages/User/Account/AccountOrder";
import AdminLayout from "./pages/Admin/AdminLayout";
import AdminAccount from "./pages/Admin/AdminAccount";
import AdminProduct from "./pages/Admin/AdminProduct";
import AdminProductColor from "./pages/Admin/AdminProductColor";
import SlideShow from "./pages/Admin/AdminSlideShow";
import AdminOrder from "./pages/Admin/AdminOrder";
import AdminPaymentMethods from "./pages/Admin/AdminPaymentMethods";
import AdminSupplier from "./pages/Admin/AdminSupplier";
import EvaluateComment from "./pages/Admin/AdminEvaluateComment";
import ImportBill from "./pages/Admin/AdminImportBill";


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
                        element: <AdminOrder/>,
                  },
                  {
                        path: 'supplier',
                        element: <AdminSupplier/>,
                  },
                  {
                        path: 'payment',
                        element: <AdminPaymentMethods/>,
                  },
                  {
                        path: 'evaluatecomment',
                        element: <EvaluateComment/>,
                  },
                  {
                        path: 'importbill',
                        element: <ImportBill/>,
                  },        
            ]
      },
])

export default router;
