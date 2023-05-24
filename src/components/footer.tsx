import { SiInstagram, SiTiktok, SiYoutube } from "react-icons/si";

const Footer = () => {
  return (
    <div className="w-full md:flex p-10 bg-black text-white hidden mt-auto">
      <div className="flex flex-col justify-between regular mx-4">
        <p className="bold text-[20px] mb-2">Contact</p>
        <p>matrnaudphoto@gmail.com</p>
        <p>514-234-8900</p>
        <a
          href="https://issuu.com/matrnaud/docs/portfolio_matias_lr_copie"
          className="px-5 py-2 w-1/2 mt-2 border border-white bg-black hover:bg-white hover:text-black transition-all"
        >
          porfolio
        </a>
      </div>
      <div className="flex flex-col regular mx-4 ">
        <p className="bold text-[20px] mb-2">Socials</p>
        <a
          href="https://www.instagram.com/matrnaud"
          className="flex items-center hover:opacity-70"
        >
          <SiInstagram />
          <p className="ml-2">@matrnaud</p>
        </a>
        <div className="flex items-center">
          <SiTiktok />
          <p className="ml-2">@matrnaudyt</p>
        </div>
        <div className="flex items-center">
          <SiYoutube />
          <p className="ml-2">@matrnaudtiktok</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
