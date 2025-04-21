import {
  createBrowserRouter,
} from "react-router";
import Routes from './routes'

const router = createBrowserRouter([
  {
    path: "/",
    Component: Routes.Root,
    children: [
        {
            path: '/',
            Component: Routes.Template,
        },
        {
          path: '/contact',
          Component: Routes.ContactPage,
        }
    ]
  },
]);

export default router;