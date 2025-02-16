import { RouteObject } from "react-router-dom";
import DefaultLayout from "../components/layout/default-layout";
import routes2 from "../pages/project/routes";
import ErrorPage from "../pages/error-page";
import PageNotFound from "../pages/404";
import Profile from "../pages/profile";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      ...routes2,
      {
        path: '/profile',
        element: <Profile />
      },
      { path: "*", element: <PageNotFound /> },
    ],
  },
];

export default routes
