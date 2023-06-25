import { useRoutes } from "react-router-dom";
import Home from "./Pages/Home";
import LandingPage from "./Pages/LandingPage";
import Menu from "./Pages/Menu";
import Blog from "./Pages/Blog";
import Shop from "./Pages/Shop";

export const Routes = () => {
  return useRoutes([
    { path: "/", element: <LandingPage /> },
    { path: "/home", element: <Home /> },
    { path: "/menu", element: <Menu /> },
    { path: "/blog", element: <Blog /> },
    { path: "/shop", element: <Shop /> },
  ]);
};
