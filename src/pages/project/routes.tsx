import { RouteObject } from "react-router-dom";
import NoProjects from "./components/no-projects";
import Main from "../../components/Main";
import ListProjects from "./components/list-projects";
import { routes } from "../../routes/route";

const isEmpty = true;

const routes2: RouteObject[] = [
  {
    path: routes.PROJECTS,
    element: <Main />,
    children: [
      { index: true, element: isEmpty ? <NoProjects /> : <ListProjects /> },
      {
        // path: "/courses",
        // element: <Courses />,
        children: [
          // { index: true, element: <CoursesIndex /> },
          // { path: "/courses/:id", element: <Course /> },
        ],
      },
      // { path: "*", element: <NoMatch /> },
    ],
  },
];

export default routes2
