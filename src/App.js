import "./App.css";
import Home from "./Components/Home";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import MovieInfo from "./Components/MovieInfo";

function App() {
  const AppLayout = () => {
    return (
      <div>
        <Outlet />
      </div>
    );
  };
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/:id",
          element: <MovieInfo />,
        },
      ],
    },
  ]);
  return (
    <div>
      {/**
       * Header
       * Body
          MainContainer
            MovieContainer
              MovieCards
                Title
                Rating
                Description
          MovieInfo(Routing)
       **/}
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default App;
