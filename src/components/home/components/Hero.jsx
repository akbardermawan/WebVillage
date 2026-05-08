import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[550px] relative overflow-hidden">
      {/* Video background */}
      <video
        src="/video/village.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-140 z-0"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-10">
        <h1 className="text-white text-3xl font-bold font-poppins">
          We are Resilient Village
        </h1>
        <p className="font-poppins bg-gray-400/20 p-2 rounded-xl text-center font-bold text-white">
          Find out about the work of the Mayor, the Resilient Village Staff and
          the Greater Resilient Village Authority.
        </p>
      </div>
    </div>
  );
};

export default Hero;
