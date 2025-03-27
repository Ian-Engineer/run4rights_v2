import {
  createBrowserRouter,
} from "react-router";
import Template from "../../main/template";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Template,
  },
]);

export default router;