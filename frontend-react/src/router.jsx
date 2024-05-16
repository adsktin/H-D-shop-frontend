import {createBrowserRouter} from "react-router-dom";
import Layout from "./layout/Layout";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    // children:[
    //   {
    //         path: 'user',
    //         element: <UserLayout />,
    //   },
    //   {
    //         path: 'products',
    //         element: <ProductsFilter />,
    //   },
    // ]
  },  
 
])

export default router;
