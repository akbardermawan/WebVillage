import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-300 px-5 pt-8">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-[50%]">
          <div className="flex  items-center">
            <div className="mr-3 rounded-full overflow-hidden">
              <img src="./image/logo.jpg" alt="logo" className="w-15" />
            </div>
            <h3 className="font-poppins text-4xl font-semibold text-gray-800">
              Resilient Village
            </h3>
          </div>
          <div className="mt-5">
            <p>Official Website of Resilient Village Government</p>
            <p className="font-poppin">Let's Connect</p>
            <ul className="flex">
              <li className="m-1 md:m-2 rounded-full w-10 md:w-13 h-10 md:h-13 border-solid border flex items-center justify-center cursor-pointer hover:bg-gray-700 hover:text-white">
                <a
                  href="https://mail.google.com/mail/u/0/#search/akbardermawan27%40gmail.com"
                  target="_blank"
                >
                  <MdOutlineEmail className="w-6 md:w-8 h-6 md:h-8 " />
                </a>
              </li>
              <li className="m-1 md:m-2 rounded-full w-10 md:w-13 h-10 md:h-13 border-solid border flex items-center justify-center cursor-pointer hover:bg-gray-700 hover:text-white">
                <a href="https://www.youtube.com/@ADM.code1" target="_blank">
                  <FaYoutube className="w-6 md:w-8 h-6 md:h-8 " />
                </a>
              </li>
              <li className="m-1 md:m-2 rounded-full w-10 md:w-13 h-10 md:h-13 border-solid border flex items-center justify-center cursor-pointer hover:bg-gray-700 hover:text-white">
                <a href="https://www.youtube.com/@ADM.code1" target="_blank">
                  <FaFacebookF className="w-6 md:w-8 h-6 md:h-8 " />
                </a>
              </li>
              <li className="m-1 md:m-2 rounded-full w-10 md:w-13 h-10 md:h-13 border-solid border flex items-center justify-center cursor-pointer hover:bg-gray-700 hover:text-white">
                <a href="">
                  <FaWhatsapp className="w-6 md:w-8 h-6 md:h-8 " />
                </a>
              </li>
              <li className="m-1 md:m-2 rounded-full w-10 md:w-13 h-10 md:h-13 border-solid border flex items-center justify-center cursor-pointer hover:bg-gray-700 hover:text-white">
                <a href="">
                  <FaTelegramPlane className="w-6 md:w-8 h-6 md:h-8 " />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-[50%] mt-4 md:mt-0">
          <div className="w-60 rounded-sm overflow-hidden">
            <img
              src="./image/townhall.jpg"
              alt="Town Hall"
              className="  w-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer  "
            />
          </div>
          <p className="font-poppins text-justify mt-2">
            Jl. PB. Sudirman No. 01, Resilient Village, Gumukmas District,
            Jember Regency, East Java Province, Indonesia, 68165.
          </p>
          <div className="flex items-center">
            <FaPhoneAlt className="mr-2 " />
            <span className="font-poppins">No. HP: 082337528525</span>
          </div>
          <div className="flex items-center">
            <MdOutlineEmail className="mr-2 " />
            <span className="font-poppins">
              Email: akbardermawan27@gmail.com
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-dashed border-gray-40 mt-5 p-5 flex items-center justify-center">
        © Copyright Greater Resilient Village Authority 2026
      </div>
    </div>
  );
};

export default Footer;
