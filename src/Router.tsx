import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home.page";
import QuizPage from "./pages/Quiz.page";
import RootLayout from "./layouts/Root.layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/quiz",
        element: <QuizPage />,
      },
    ],
  },
]);

const Router: React.FC = () => <RouterProvider router={router} />;

export default Router;
