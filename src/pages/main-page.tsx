import { Link, ScrollRestoration, useLoaderData } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import Footer from "../components/footer";
import { IPhoto } from "../types/photo";
import LoadingPage from "../components/loading-page";
import Masonry from "@mui/lab/Masonry";
import Navbar from "../components/navbar";
import { usePhotos } from "../hooks/usePhotos";

const Photo = ({ photo }: { photo: IPhoto }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

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
      <Link to={`/photo/${photo.id}`}>
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

  return (
    <motion.div>
      <Masonry className="pl-2" columns={{ xs: 2, sm: 4 }} spacing={1}>
        {data.map((photo, key) => (
          <Photo key={key} photo={photo} />
        ))}
      </Masonry>

      <Footer />
    </motion.div>
  );
};

const MainPage = () => {
  return (
    <div className="h-screen">
      <ScrollRestoration />

      <header className="h-[9%]">
        <Navbar />
      </header>
      <Gallery />
    </div>
  );
};

export default MainPage;
