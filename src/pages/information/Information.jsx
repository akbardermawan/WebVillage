import React from "react";
import { Link } from "react-router-dom";
import { NAVBAR } from "../../common/constants";
import Footer from "../../components/footer/Footer";

const Information = () => {
  const information = NAVBAR.find((item) => item.name === "INFORMATION");
  return (
    <div className="pt-10 ">
      <h1 className="text-center text-4xl md:text-6xl text-gray-800 font-bold m-5 md:m-8 xl:m-12">
        Information
      </h1>

      <div className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 px-5">
        {information?.children?.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Image */}
            <div className="relative w-[60%] md:w-full h-30 md:h-60 overflow-hidden flex items-center justify-center mx-auto">
              <img
                src={item.img || "/image/default.jpg"}
                alt={item.name}
                className="h-[40%] md:h-[45%] w-[20%] md:w-[40%] object-cover object-top transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Card Content */}
            <div className="p-2 md:p-4">
              <h2 className="mb-2 text-xl font-bold text-gray-800">
                {item.name}
              </h2>

              <p className="mb-5 text-sm leading-6 text-gray-500">
                Information about {item.name}.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="pt-5">
        <Footer />
      </div>
    </div>
  );
};

export default Information;
