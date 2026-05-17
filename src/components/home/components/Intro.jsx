import React, { useState, useRef } from "react";

const Intro = () => {
  const [transformStyle, setTransformStyle] = useState("");
  const cardRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;

    const { left, top, width, height } =
      cardRef.current.getBoundingClientRect();
    const x = (event.clientX - left) / width;
    const y = (event.clientY - top) / height;

    const rotateX = (y - 0.5) * 10;
    const rotateY = (x - 0.5) * -10;

    setTransformStyle(
      `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(0.97, 0.97, 0.97)`,
    );
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center  -mt-5 md:mt-0 md:pt-5 px-5 bg-gray-100">
      <div className="w-full flex flex-col justify-center items-center ">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: transformStyle,
            transition: "transform 0.2s ease",
          }}
          className="relative w-[35%] lg:w-[25%] h-[200px] md:h-[180px] lg:h-[200px] flex items-center justify-center overflow-hidden rounded-2xl shadow-lg"
        >
          {/* Background Video */}
          <img
            src="./image/akbar.JPG"
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover object-top z-0"
          />
        </div>
        <div className="mx-auto px-2 ">
          <h1 className="font-poppins text-xl mt-4 text-center md:text-xl lg:text-2xl">
            Akbar Dermawan Mahbubillah
          </h1>

          <p className="text-justify font-poppins mt-3">
            Welcome to the official website of Resilient Village. This website
            is presented as a reflection of the village government's commitment
            to providing transparent, efficient, and easily accessible services
            for all residents and the wider public. Through this platform, we
            hope the community can access information about village activities,
            regional potential, development programs, administrative services,
            and various other important updates.
          </p>
        </div>
      </div>
      <div className="hidden md:flex md:flex-col bg-gray-500 md:bg-gray-100 w-full p-2 md:p-5">
        <h1 className="text-center text-3xl text-white md:text-black font-poppins">
          Population Statistics of Resilient Village
        </h1>
        <div className="flex justify-around items-center mt-5">
          <div className="flex flex-col items-center justify-center">
            <img src="./image/man.png" alt="man" className="w-10" />
            <span className="font-poppins text-xl font-bold text-white md:text-black">
              4363
            </span>
            <p className="font-poppins text-xl  text-white md:text-black">
              Man
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="./image/woman.png" alt="man" className="w-10" />
            <span className="font-poppins text-xl font-bold text-white md:text-black">
              6522
            </span>
            <p className="font-poppins text-xl  text-white md:text-black">
              Women
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="./image/family.png" alt="man" className="w-10" />
            <span className="font-poppins text-xl font-bold text-white md:text-black">
              10885
            </span>
            <p className="font-poppins text-xl  text-white md:text-black">
              population
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
