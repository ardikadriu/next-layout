import { FaFacebook, FaPhoneAlt, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div className="py-20 w-full">
      <h1 className=" text-center text-2xl font-bold">Contact Us</h1>

      <div className="flex justify-around w-full items-center my-3">
        <div>
          {" "}
          <div className="flex items-center gap-5 ">
            {" "}
            <FaPhoneAlt size={25} />
            <p>#44 444 444</p>
          </div>
          <div className="flex items-center gap-5 my-5">
            <FaMapLocationDot size={25} />
            <div>
              {" "}
              <p className="text-center ">Rruga B</p>
              <h4>Prishtin / Kosova</h4>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <SiGmail size={25} />
            <p>lalalala@gmail.com</p>
          </div>
        </div>
        <div className="flex gap-2 flex-col">
          <FaFacebook size={30} />
          <FaInstagram className="my-5" size={30} />
          <FaTwitter size={30} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
