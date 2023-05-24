import { useEffect, useState } from "react";

import { IFrame } from "../types/series";
import { backend } from "../helper/backend";

export const useFrame = (frameId: string) => {
  const [frame, setFrame] = useState<IFrame>();

  useEffect(() => {
    (async () => {
      const res = await backend
        .get(`/frames/${frameId}`)
        .catch((error) => console.log(error));

      if (res) setFrame(res.data);
    })();
  }, []);

  return { frame };
};
