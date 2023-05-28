/* eslint-disable no-unused-vars */
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../LayOuts/Main";
import Home from "../Pages/Home/Home";
import AllToys from "../Pages/AllToys/AllToys";
import Blog from "../Pages/Blog/Blog";
import AddToy from "../Pages/AddToy/AddToy";
import MyToys from "../Pages/MyToys/MyToys";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CategoryDetails from "../Pages/CategoryDetails/CategoryDetails";
import PrivateRoute from "./PrivateRoute";
import UpdateMyToy from "../Pages/UpdateMyToy/UpdateMyToy";
import AllToysDetails from "../Pages/AllToysDetails/AllToysDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'allToys',
          element:<AllToys></AllToys>

        },
        {
          path:'allToys/:id',
          element:<PrivateRoute>
            <AllToysDetails></AllToysDetails>
          </PrivateRoute>
        },
        {
          path:'blog',
          element:<Blog></Blog>
        },
        {
          path:'addToy',
          element:<PrivateRoute>
            <AddToy></AddToy>
            </PrivateRoute>,
        },
        {
          path:'myToys',
          element:<PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'register',
          element:<Register></Register>
        },
        {
          path:'details/:id',
          element:<PrivateRoute>
            <CategoryDetails></CategoryDetails>
            </PrivateRoute>
        },
        {
          path:'updateToy/:id',
          element:<UpdateMyToy></UpdateMyToy>
        }
      ]
    },
  ]);

  export default router;