import "./css/index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import BookingPage from "./pages/booking-page";
import CheckoutPage from "./pages/checkout-page";
import MainPage from "./pages/main-page";
import MentionPage from "./pages/mention-page";
import PhotoPage from "./pages/photo-page";
import React from "react";
import ReactDOM from "react-dom/client";
import SeriesPage from "./pages/series-page";
import { backend } from "./helper/backend";
import { sortByPop } from "./helper/sortByPop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    loader: async () => {
      const res = await backend
        .get("/photos")
        .catch((error) => console.log(error));

      if (res) {
        return res.data.sort(sortByPop);
      }
    },
  },
  {
    path: "info",
    element: <MentionPage />,
  },
  {
    path: "bookings",
    element: <BookingPage />,
  },
  {
    path: "/photo/:photoId",
    element: <PhotoPage />,
  },
  {
    path: "/shop",
    element: <SeriesPage />,
  },

  {
    path: "/checkout/:frameId",
    element: <CheckoutPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
