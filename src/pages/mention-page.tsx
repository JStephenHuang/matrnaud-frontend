import { SiGmail, SiInstagram, SiTiktok } from "react-icons/si";

import { IoCaretForward } from "react-icons/io5";
import Navbar from "../components/navbar";
import { SlPhone } from "react-icons/sl";
import { mentions } from "../doc/mentions";
import { motion } from "framer-motion";

const Mentions = ({
  mention,
}: {
  mention: { title: string; date: string; link: string };
}) => {
  return (
    <div className="mb-3">
      <a
        href={mention.link}
        className={`md:text-[20px] regular ${
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
  return (
    <div className="h-screen">
      <header className="h-[9.5%]">
        <Navbar />
      </header>
      <div className="w-full flex flex-col">
        <section className="w-full md:flex">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            transition={{ delay: 0.2 }}
            className="md:w-1/2 h-auto px-3"
            src="https://media.licdn.com/dms/image/C4E03AQG9VDoz95JwDg/profile-displayphoto-shrink_800_800/0/1652224651279?e=2147483647&v=beta&t=bh3sZLr9cGMSJ_MzoO1vZvD1GjeidjlZSqj4TW6xQsQ"
            alt=""
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            transition={{ delay: 0.4 }}
            className="md:w-1/2 px-3"
          >
            <p className="text-[32px] md:text-[50px] bold mt-2">
              MATIAS RENAUD
            </p>
            <p className="regular md:text-[20px]">
              J'ai toujours prêté une attention particulière à la beauté de mon
              entourage. Très vite, je découvre une réelle passion pour la
              photographie mettant en valeurs le contact humain en allant
              photographier les rues de ma ville. Il y a un an, je me suis lancé
              dans la photographie de portrait et j'ai eu la chance de
              collaborer avec plusieurs magnifiques personnes qui se sont
              prêtées à mon art.
            </p>
            <p className="regular md:text-[20px] my-5">
              Je suis présentement étudiant en médias numériques et je continue
              à faire beaucoup de photo dans mes temps libres. Je tiens à
              continuer de développer mon intérêt pour la photographie à travers
              l'art du portrait pour peut-être un jour, en faire une carrière.
            </p>
            <a
              href="#mentions"
              className="inline-flex items-center semibold group md:text-[20px]"
            >
              <p className="transition-all">VOIR MES MENTIONS</p>
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
            <p className="text-[32px] md:text-[50px] bold mt-2">MENTIONS</p>
            {mentions.map((mention, key) => (
              <Mentions key={key} mention={mention} />
            ))}
          </div>
          <div className="md:w-1/2 px-3">
            <p className="text-[32px] md:text-[50px] bold mt-2">CONTACT</p>
            <div className="inline-flex flex-col regular md:text-[20px]">
              <div className="flex items-center">
                <SiGmail />
                <p className="ml-2">matrnaudphoto@gmail.com</p>
              </div>
              <div className="flex items-center">
                <SlPhone />
                <p className="ml-2">514-234-8900</p>
              </div>

              <a
                href="https://www.instagram.com/matrnaud"
                className="flex items-center hover:opacity-70"
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
