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
          Component: Routes.HomePage,
        },
        {
          path: '/contact',
          Component: Routes.ContactPage,
        },
        {
          path: '/events',
          Component: Routes.EventsPage,
        },
        {
          path: '/event/:id',
          Component: Routes.EventPage
        },
        {
          path: "*",
          Component: Routes.ErrorPage,
        }
    ]
  },
]);

export default router;