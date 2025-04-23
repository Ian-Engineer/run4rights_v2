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
          path: '/software',
          Component: Routes.SoftwarePage,
        },
        {
          path: '/woodworking',
          Component: Routes.WoodworkingPage,
        },
        {
          path: '/ceramics',
          Component: Routes.CeramicsPage,
        },
        {
          path: '/3d_printing',
          Component: Routes.ThreeDPrintingPage,
        },
        {
          path: '/textiles',
          Component: Routes.TextilesPage
        },
        {
          path: '/adventures',
          Component: Routes.AdventuresPage,
        }
    ]
  },
]);

export default router;