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
          path: "/privacy-policy",
          Component: Routes.PrivacyPolicy,
        },
        {
          path: "/terms",
          Component: Routes.TermsOfService,
        },
        {
          path: "/admin",
          Component: Routes.AdminLogin,
        },
        {
          element: <Routes.AdminRoute />,
          children: [
            {
              path: "/admin/dashboard",
              Component: Routes.AdminDashboard,
            },
            {
              path: "/admin/modify-event",
              Component: Routes.ModifyEventSection,
            },
            {
              path: "/admin/modify-event/:id",
              Component: Routes.ModifyEvent,
            },
            {
              path: "/admin/update-runners",
              Component: Routes.UpdateRunners,
            },
            {
              path: "/admin/update-active-event",
              Component: Routes.ModifyActiveEvent,
            }
          ]
        },
        {
          path: "*",
          Component: Routes.ErrorPage,
        }
    ]
  },
]);

export default router;