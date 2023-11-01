import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home.page";
import QuizPage from "./pages/Quiz.page";
import LoginPage from "./pages/Login.page";
import RootLayout from "./layouts/Root.layout";
import Navbar from "./components/Navbar";

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
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

const Router: React.FC = () => <RouterProvider router={router} />;

export default Router;
