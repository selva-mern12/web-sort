import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import footerBg from "../assests/bg-images/footer-bg.png";
import appLogo from "../assests/app-logo.png";

const Footer = () => {
  return (
    <footer
      className="bg-cover bg-[center_top] text-white animate-fadeUp"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-6 md:px-16 py-10 space-y-6 md:space-y-0">
        {/* Left Content */}
        <div className="space-y-4">
          <img
            src={appLogo}
            alt="WebSort Logo"
            className="h-[50px] brightness-0 invert hue-rotate-180 animate-fadeDown"
          />
          <p className="text-sm md:text-base leading-relaxed">
            Web Development | App Development | UI/UX Design | Digital Marketing
          </p>
          <p className="text-sm">
            Based in Bangalore | ✉️ contact@websort.com | 📞 +91-XXXXXXXXXX
          </p>
        </div>

        {/* Right Icons */}
        <div className="flex space-x-4 text-3xl animate-zoom">
          <FcGoogle className="cursor-pointer transition-transform duration-300 hover:scale-110" />
          <FaInstagram className="text-pink-500 cursor-pointer transition-transform duration-300 hover:scale-110" />
          <FaFacebookSquare className="text-blue-400 bg-white rounded cursor-pointer transition-transform duration-300 hover:scale-110" />
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center bg-[#cbd5e1] text-black py-2 text-sm">
        © 2025 Websort. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
