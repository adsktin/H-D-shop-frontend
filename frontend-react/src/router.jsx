import {createBrowserRouter} from "react-router-dom";
import App from "./App";


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
