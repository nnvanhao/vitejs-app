import { createBrowserRouter } from "react-router-dom";

import Contact from "@pages/contact";
import ErrorPage from "@pages/error-page";
import Profile from "@pages/profile";
import Root from "@pages/root";

const router = createBrowserRouter([
  {
    path: "/profile",
    element: <Profile />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
