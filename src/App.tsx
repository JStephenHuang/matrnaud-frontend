import { Route, Routes } from "react-router-dom";

import BookingPage from "./pages/booking-page";
import CheckoutPage from "./pages/checkout-page";
import MainPage from "./pages/main-page";
import MentionPage from "./pages/mention-page";
import PhotoPage from "./pages/photo-page";
import SeriesPage from "./pages/series-page";

// * Components

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/photo/:photoId" element={<PhotoPage />} />
      <Route path="/shop" element={<SeriesPage />} />
      <Route path="/bookings" element={<BookingPage />} />
      <Route path="/checkout/:frameId" element={<CheckoutPage />} />
      <Route path="/infos" element={<MentionPage />} />
    </Routes>
  );
};

export default App;
