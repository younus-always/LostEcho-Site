import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import MyItems from "../pages/MyItems";
import AllRecovered from "../pages/AllRecovered";
import AddLostNFound from "../pages/AddLostNFound";
import LostNFound from "../pages/LostNFound";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../layout/MainLayout";
import Private from "./Private";
import UpdateItem from "../pages/UpdateItem";
import Details from "../pages/Details";

const router = createBrowserRouter([
      {
            path: '/',
            errorElement: <ErrorPage />,
            element: <MainLayout />,
            children: [
                  {
                        path: '/',
                        element: <Home />,
                        loader: () => fetch("https://lost-echo-server.vercel.app/latestItems")
                  },
                  {
                        path: '/lost&found',
                        element: <LostNFound />,
                        loader: () => fetch(`https://lost-echo-server.vercel.app/allItems`)
                  },
                  {
                        path: '/addLost&Found',
                        element: <Private><AddLostNFound /></Private>
                  },
                  {
                        path: '/allRecoveredItems',
                        element: <Private><AllRecovered /></Private>,
                        loader: () => fetch(`https://lost-echo-server.vercel.app/allRecovered`, {
                              method: "GET",
                              credentials: "include"
                        })
                  },
                  {
                        path: '/manageMyItems',
                        element: <Private><MyItems /></Private>,
                        loader: () => fetch("https://lost-echo-server.vercel.app/allItems")
                  },
                  {
                        path: '/updateItem/:id',
                        element: <Private><UpdateItem /></Private>,
                        loader: ({ params }) => fetch(`https://lost-echo-server.vercel.app/allItems/${params.id}`)
                  },
                  {
                        path: '/items/:id',
                        element: <Private><Details /></Private>,
                        loader: ({ params }) => fetch(`https://lost-echo-server.vercel.app/allItems/${params.id}`)
                  },
                  {
                        path: '/signin',
                        element: <SignIn />
                  },
                  {
                        path: '/signup',
                        element: <SignUp />
                  }
            ]
      }
])
export default router