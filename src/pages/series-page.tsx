import { IoArrowDownCircle, IoCart } from "react-icons/io5";

import { IFrame } from "../types/series";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import { dropIn } from "../doc/dropIn";
import { motion } from "framer-motion";
import { useSeries } from "../hooks/useSeries";

const MainFrames = ({ url, rotate }: { url: string; rotate: string }) => {
  return (
    <div className="w-1/3 md:w-1/5">
      <img className={`shadow-md ${rotate} transition-all`} src={url} alt="" />
    </div>
  );
};

const Frame = ({
  frame,
}: {
  frame: IFrame;
  // checkout: (frame: IFrame) => Promise<void>;
}) => {
  return (
    <div className="inline-flex flex-col items-center">
      <div className="aspect-square flex items-center justify-center">
        <img className="max-w-full max-h-full" src={frame.url} alt="" />
      </div>
      <p className="bold mt-2">{frame.title}</p>
      <p>{frame.price}$</p>
      <Link
        className="text-[12px] md:text-[16px] px-4 py-1 bg-black text-white flex items-center hover:bg-white hover:text-black transition-all border border-black"
        to={`/checkout/${frame.id}`}
      >
        Buy <IoCart className="ml-2" />
      </Link>
    </div>
  );
};

const SeriesPage = () => {
  const { series, frames } = useSeries();
  // const { checkout } = useCheckout();

  if (
    series === "No matching documents." ||
    typeof series === "string" ||
    series === undefined ||
    frames.length < 3
  )
    return (
      <div className="w-screen h-screen">
        <header className="h-[9.5%]">
          <Navbar />
        </header>
        <div className="flex flex-col w-full items-center">
          <p className="mt-5 text-[24px]">Series for sale coming soon...</p>
        </div>
      </div>
    );

  return (
    <div className="w-full h-screen flex flex-col items-center overflow-y-auto pt-[20%] sm:pt-[13%] lg:pt-[6%]">
      <Navbar />
      <motion.div
        variants={dropIn}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center"
      >
        <p className="md:text-[24px] bold leading-6">MATRNAUD'S SHOP</p>
        <div className="flex items-center my-3">
          <hr className="w-[3rem] md:w-[10rem] border-black" />
          <p className="mx-2 md:mx-5 text-[10px] md:text-[14px]">
            LIMITED EDITION
          </p>
          <hr className="w-[3rem] md:w-[10rem] border-black" />
        </div>
      </motion.div>
      <motion.div
        variants={dropIn}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center py-1 px-[4%] border border-black"
      >
        <p className="bold md:text-[24px]">{series.title}</p>
        <p className="text-[12px] md:text-[16px]">
          {series.startDate} - {series.endDate}
        </p>
      </motion.div>

      <motion.div
        variants={dropIn}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center mt-20"
      >
        <a
          className="inline-flex flex-wrap group justify-center items-center"
          href="#frames"
        >
          <MainFrames
            url={frames[0].url}
            rotate={
              "group-hover:-rotate-12 group-hover:translate-x-[60%] translate-x-full"
            }
          />
          <MainFrames
            url={frames[1].url}
            rotate={"group-hover:-translate-y-5"}
          />
          <MainFrames
            url={frames[2].url}
            rotate={
              "group-hover:rotate-12 group-hover:-translate-x-[60%] -translate-x-full "
            }
          />
        </a>
        <p className="text-center text-[14px] mt-2">{series.title}</p>
        <a href="#frames">
          <IoArrowDownCircle className="animate-bounce mt-2" size={24} />
        </a>
      </motion.div>
      <motion.div
        variants={dropIn}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center py-1 px-[4%] my-10 text-center md:text-[16px] text-[12px]"
      >
        {series.description}
      </motion.div>
      <section id="frames" className="p-5 mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {frames.map((frame, key) => (
            <Frame
              key={key}
              frame={frame}
              //  checkout={checkout}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
export default SeriesPage;
