import { SiGmail, SiInstagram, SiTiktok } from "react-icons/si";

import { IoCaretForward } from "react-icons/io5";
import Navbar from "../components/navbar";
import { mentions } from "../doc/mentions";
import { motion } from "framer-motion";
import { useInfo } from "../hooks/useInfo";

const Mentions = ({
  mention,
}: {
  mention: { title: string; date: string; link: string };
}) => {
  return (
    <div className="mb-3">
      <a
        href={mention.link}
        className={`regular ${
          mention.link === "" ? "" : "hover:text-blue-500"
        }`}
      >
        {mention.title}
      </a>
      <p className="semibold">{mention.date}</p>
    </div>
  );
};

const MentionPage = () => {
  const { bio } = useInfo();
  return (
    <div className="h-screen">
      <header className="h-[9.5%]">
        <Navbar />
      </header>
      <div className="w-full flex flex-col pb-10">
        <section className="w-full md:flex">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            transition={{ delay: 0.2 }}
            className="md:w-1/2 h-auto px-3"
            src="https://firebasestorage.googleapis.com/v0/b/matrnaud.appspot.com/o/photo%20de%20moi.jpg?alt=media&token=4b8d9c6a-cb31-4121-b2f3-65248525669a&_gl=1*1gvvtr4*_ga*MTc0MzY2NDU2OS4xNjc3MzcyNzU1*_ga_CW55HF8NVT*MTY4NTU5MTQ2OS42Ni4xLjE2ODU1OTE1OTQuMC4wLjA."
            alt=""
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            transition={{ delay: 0.4 }}
            className="md:w-1/2 px-3"
          >
            <p className="text-[28px] md:text-[40px] bold mt-2">
              MATIAS RENAUD
            </p>
            <p className="regular whitespace-pre-wrap">{bio?.content}</p>
            <a
              href="#mentions"
              className="inline-flex items-center semibold group"
            >
              <p className="transition-all mt-5">VOIR MES MENTIONS</p>
              <IoCaretForward className="scale-0 group-hover:scale-100 transition-all" />
            </a>
          </motion.div>
        </section>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          transition={{ delay: 0.6 }}
          id="mentions"
          className="w-full md:flex"
        >
          <div className="md:w-1/2 px-3">
            <p className="text-[28px] md:text-[40px] bold mt-2">MENTIONS</p>
            {mentions.map((mention, key) => (
              <Mentions key={key} mention={mention} />
            ))}
          </div>
          <div className="md:w-1/2 px-3">
            <p className="text-[28px] md:text-[40px] bold mt-2">CONTACT</p>
            <div className="inline-flex flex-col regular">
              <div className="flex items-center">
                <SiGmail />
                <p className="ml-2">matiasrenaud04@gmail.com</p>
              </div>
              {/* <div className="flex items-center">
                <SlPhone />
                <p className="ml-2">514-234-8900</p>
              </div> */}
              <a
                href="https://www.instagram.com/matrnaud"
                className="flex items-center hover:opacity-70 my-2"
              >
                <SiInstagram />
                <p className="ml-2">@matrnaud</p>
              </a>
              <a
                href="https://www.tiktok.com/@matiasrnaud"
                className="flex items-center hover:opacity-70"
              >
                <SiTiktok />

                <p className="ml-2">@matrnaudtiktok</p>
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};
export default MentionPage;
