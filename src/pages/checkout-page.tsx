import { Link, useParams } from "react-router-dom";

import { IoCaretBack } from "react-icons/io5";
import LoadingPage from "../components/loading-page";
import { useCheckout } from "../hooks/useCheckout";
import { useFrame } from "../hooks/useFrame";

const CheckoutPage = () => {
  const params = useParams();

  if (params.frameId === undefined) return <div>Something went wrong!</div>;

  const { frame } = useFrame(params.frameId);

  const { form, checkout, error, onChange } = useCheckout(params.frameId);

  if (frame === undefined) return <LoadingPage />;

  return (
    <div className="h-screen md:flex">
      <div className="md:w-1/2 md:h-full px-[10%] py-[8%]">
        <Link
          className="inline-flex items-center bold text-[12px] group"
          to="/shop"
        >
          <IoCaretBack className="group-hover:scale-0 transition-all" />
          <p className="group-hover:-translate-x-2 transition-all">BACK</p>
        </Link>
        <div className="w-full">
          <p className="bold text-[24px]">{frame.title}</p>
          <p className="text-[32px] regular">CAD$ {frame.price}</p>
          <div className="px-10 py-20 bg-white border-8 border-black">
            <img className="shadow-md" src={frame.url} alt="" />
          </div>
        </div>
      </div>
      <div className="md:w-1/2 h-full shadow-lg px-[5%] py-[8%] flex flex-col items-center">
        <p className="text-[30px]">
          Submit your email and Matrnaud himself will arrange the payement.
        </p>
        {error === "Form not filled" && (
          <p className="text-center text-red-500">Form not filled</p>
        )}

        {error === "Email not sent." && (
          <p className="text-center text-red-500">Email not sent</p>
        )}
        {error === "Email not valid." && (
          <p className="text-center text-red-500">Email's format not valid</p>
        )}
        {error === "Email sent." && (
          <p className="text-center text-green-500">Email sent</p>
        )}
        <div className="w-full h-full flex flex-col">
          <input
            className="w-full py-2 my-2 outline-none border-b focus:border-black transition-all"
            type="text"
            value={form.name}
            onChange={onChange.name}
            placeholder="Name"
          />
          <input
            className="w-full py-2 my-2 outline-none border-b focus:border-black transition-all"
            type="text"
            value={form.email}
            onChange={onChange.email}
            placeholder="Email"
          />
          <textarea
            className="border-b py-2 my-2 h-[8rem] focus:border-black outline-none resize-none mb-5 transition-all"
            value={form.message}
            onChange={onChange.message}
            placeholder="I'm interested in buying this print!"
          ></textarea>
          <button
            onClick={checkout}
            className="bg-black text-white py-[1%] hover:opacity-70 transition-all"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
export default CheckoutPage;
