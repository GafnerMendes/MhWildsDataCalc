import { createBrowserRouter } from "react-router-dom";
import MainPage from "../../View/Components/Charts/Charts";
// import MainGrid from "../../View/Components/MainGrid/MainGrid";
import { NotFound } from "../../View/Pages/not-found/NotFound";
import { Home } from "../../View/Pages/Home/Home";
import Bullshit from "../../View/Pages/bullshit/bullshit";
import Armory from "../../View/Pages/Armory";
import Monsters from "../../View/Pages/MonstersPage/Monsters";
import Layout from "../../View/Layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "/home", element: <Home /> },
      { path: "/monsters", element: <Monsters /> },
      { path: "/dashboard", element: <MainPage /> },
      { path: "/bullshit", element: <Bullshit /> },
      { path: "/armory", element: <Armory /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
