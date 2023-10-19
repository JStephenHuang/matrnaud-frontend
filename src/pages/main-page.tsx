import { Link, ScrollRestoration, useLoaderData } from "react-router-dom";
import { delayFooterAppearance, timeout } from "../helper/delay";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import Footer from "../components/footer";
import { IPhoto } from "../types/photo";
import Masonry from "@mui/lab/Masonry";
import Navbar from "../components/navbar";

const Photo = ({ photo }: { photo: IPhoto }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  useEffect(() => {
    const scrollPosition = sessionStorage.getItem("scrollPosition");
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition));
      sessionStorage.removeItem("scrollPosition");
    }
  }, []);

  const handleClick = () => {
    sessionStorage.setItem("scrollPosition", window.scrollY.toString());
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.75, delay: 0.25 }}
      id="gallery-items"
      ref={ref}
    >
      <Link to={`/photo/${photo.id}`} onClick={handleClick}>
        <img
          className="hover:opacity-90 transition-all w-full h-auto"
          src={photo.mainPhoto}
        />
      </Link>
    </motion.div>
  );
};

const Gallery = () => {
  const data = useLoaderData() as IPhoto[];
  const [showFooter, setShowFooter] = useState<boolean>(false);

  delayFooterAppearance(setShowFooter);

  return (
    <div>
      <Masonry className="pl-2" columns={{ xs: 2, sm: 4 }} spacing={1}>
        {data.map((photo, key) => (
          <Photo key={key} photo={photo} />
        ))}
      </Masonry>

      {showFooter ? <Footer /> : <div>hello</div>}
    </div>
  );
};

const MainPage = () => {
  return (
    <div className="h-screen">
      <header className="h-[9%]">
        <Navbar />
      </header>

      {/* <div className="h-[100rem]">
        <div className="h-1/2 bg-red-500"></div>
      </div> */}

      <Gallery />
    </div>
  );
};

export default MainPage;
