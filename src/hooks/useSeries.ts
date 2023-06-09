import { IFrame, ISeries } from "../types/series";
import { useEffect, useState } from "react";

import { backend } from "../helper/backend";

export const useSeries = () => {
  const [series, setSeries] = useState<ISeries | string>();
  const [frames, setFrames] = useState<IFrame[]>([]);

  useEffect(() => {
    (async () => {
      const res = await backend
        .get(`/series/active`)
        .catch((error) => console.log(error));

      if (res) {
        setSeries(res.data.series);
        setFrames(res.data.frames);
      }
    })();
  }, []);

  return { series, frames };
};
