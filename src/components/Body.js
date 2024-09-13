import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";


const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);


  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default Body;
