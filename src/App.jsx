import "./App.css";
import React from "react";
import {
  Navbar,
  Carousel,
  Restaurants,
  About,
  Footer,
  Error,
  RestaurantsMenu,
  Cart,
} from "./components/index";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

const AppLayout = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Outlet />
      <Footer />
    </Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Carousel />
            <About />
          </>
        ),
      },
      {
        path: "/restaurants",
        element: <Restaurants />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantsMenu />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
