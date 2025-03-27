import { createBrowserRouter } from "react-router";
import routes from './routes'

let router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        Component: routes.AboutMeConfig,
      },
    ],
  },
]);