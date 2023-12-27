import { useEffect, useState } from "react";

import { backend } from "../helper/backend";

export const useInfo = () => {
  const [bio, setBio] = useState<{ content: string }>();
  const [bookingDescription, setBookingDescription] = useState<{
    content: string;
  }>();

  useEffect(() => {
    (async () => {
      const res = await backend
        .get("/info")
        .catch((error) => console.log(error));
      if (res) {
        setBio(res.data.bio);
        setBookingDescription(res.data.bookingDescription);
      }
    })();
  }, []);

  return { bio, bookingDescription };
};
