import { SiInstagram, SiTiktok } from "react-icons/si";

const Footer = () => {
  return (
    <div className="w-full md:flex p-10 bg-black text-white hidden mt-auto">
      <div className="flex flex-col regular mx-4">
        <p className="bold text-[20px] mb-2">Contact</p>
        <p>matiasrenaud04@gmail.com</p>
      </div>
      <div className="flex flex-col regular mx-4 ">
        <p className="bold text-[20px] mb-2">Social</p>
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
  );
};

export default Footer;
