import Navbar from "../components/navbar";
import { motion } from "framer-motion";
import { useEmail } from "../hooks/useEmail";
import { useInfo } from "../hooks/useInfo";

const BookingPage = () => {
  const { sendEmail, form, onChange, error } = useEmail();

  const { bookingDescription } = useInfo();

  return (
    <div className="px-8">
      <Navbar />
      <header className="h-[4rem]"></header>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
        transition={{ delay: 0.2 }}
        className="w-full flex flex-col md:flex-row gap-8"
      >
        <div className="px-10 md:w-1/2 my-5 flex flex-col regular">
          <p className="md:text-[28px] text-[18px] semibold">
            Réservez votre séance
          </p>
          <p className="mb-5 text-[12px] md:text-[16px]">
            {bookingDescription?.content}
          </p>
          {error === "Form not filled" && (
            <p className="text-center text-red-500">Manque d'information.</p>
          )}

          {error === "Email not sent." && (
            <p className="text-center text-red-500">
              Erreur, email pas envoyer.
            </p>
          )}
          {error === "Email not valid." && (
            <p className="text-center text-red-500">
              Format du email n'est pas valid.
            </p>
          )}
          {error === "Email sent." && (
            <p className="text-center text-green-500">Email envoyé.</p>
          )}
          <input
            className="py-2 border-b focus:border-black outline-none mb-5 transition-all"
            type="text"
            value={form.email}
            onChange={onChange.email}
            placeholder="Email"
          />
          <input
            className="py-2 border-b focus:border-black outline-none mb-5 transition-all"
            type="text"
            value={form.name}
            onChange={onChange.name}
            placeholder="Nom"
          />

          <textarea
            className="py-2 border-b h-[8rem] focus:border-black outline-none resize-none mb-5 transition-all"
            value={form.message}
            onChange={onChange.message}
            placeholder="Message..."
          ></textarea>

          <button
            onClick={sendEmail}
            className="bg-black medium text-white px-5 py-2 hover:opacity-50 transition-all"
          >
            Submit
          </button>
        </div>
        <div className="px-10 md:px-0 md:w-1/2">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            transition={{ delay: 0.4 }}
            className="w-full h-auto pb-10"
            src="https://monde.ccdmd.qc.ca/media/image1024/136372.jpg"
            alt=""
          />
        </div>
      </motion.div>
    </div>
  );
};

export default BookingPage;
