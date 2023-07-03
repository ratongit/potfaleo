import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import Project from "../Pages/Project.jsx/Project";

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/services',
            element:<Services></Services>
        },
        {
            path:'/project',
            element:<Project></Project>,
        }
      ]
    },
  ]);
  
export default router;