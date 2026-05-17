import React, { useState } from "react";
import { LuMapPin } from "react-icons/lu";
import { FaAngleRight } from "react-icons/fa";

const BodyHome = () => {
  const [detailOpen, setDetailOpen] = useState(false);

  return (
    <div className="w-full">
      {/* part 1 */}
      <div className="w-full flex flex-col md:flex-row gap-5 p-5 ">
        {/* LEFT SIDE */}
        <div className="w-full md:w-[50%] bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
          {/* HEADER */}
          <div className="bg-gray-400 flex justify-center items-center py-4">
            <LuMapPin className="w-5 h-5" />
            <h6 className="text-xl font-bold ml-2 font-poppins">Location</h6>
          </div>

          {/* MAP */}
          <div className="w-full h-[400px] p-3">
            <iframe
              title="Google Maps"
              width="100%"
              height="100%"
              className="rounded-xl"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3948.2661870587526!2d113.42926476057436!3d-8.27628370260592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMTYnMzQuNCJTIDExM8KwMjUnNDkuMCJF!5e0!3m2!1sen!2sid!4v1730977026730!5m2!1sen!2sid"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-3 px-4 pb-5">
            <a
              href="https://maps.app.goo.gl/h5ac12VHgSEaMX5w7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="font-poppins bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
                Open Location
              </button>
            </a>

            <button
              onClick={() => setDetailOpen(!detailOpen)}
              className="md:hidden bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition"
            >
              {detailOpen ? "Close Detail" : "Detail"}
            </button>
          </div>

          {/* DETAIL IMAGE */}
          {detailOpen && (
            <div className="px-4 pb-5">
              <img
                src="/image/townhall.jpg"
                alt="townhall"
                className="rounded-xl w-full object-cover"
              />
              <div className="mt-4">
                <div>
                  <ul>
                    <li className="font-poppins">
                      <span className="font-poppins">Address :</span> Jl. PB.
                      Sudirman No. 01
                    </li>

                    <li className="font-poppins">
                      <span>Village :</span> Resilent Village
                    </li>

                    <li className="font-poppins">
                      <span>District :</span> Gumukmas District
                    </li>

                    <li className="font-poppins">
                      <span>Regency :</span> Jember Regency
                    </li>

                    <li className="font-poppins">
                      <span>Postal Code :</span> 68165
                    </li>

                    <li className="font-poppins">
                      <span>Phone :</span> 082337528525
                    </li>

                    <li className="font-poppins">
                      <span>Email :</span> akbardermawan27@gmail.com
                    </li>
                  </ul>
                </div>
                <div className="mt-2">
                  <h2 className="text-xl font-bold font-poppins">
                    Office Hours
                  </h2>
                  <div className="space-y-2">
                    <p className="font-poppins">
                      Monday - Friday : 08:00 - 16:00
                    </p>
                    <p className="font-poppins">Saturday : 08:00 - 12:00</p>
                    <p className="font-poppins">Sunday : Closed</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col md:w-1/2 bg-gray-100 rounded-3xl p-6 shadow-xl gap-4 ">
          {/* CARD */}
          <div className="bg-white p-4 rounded-2xl hover:shadow-md transition-all duration-300 cursor-pointer group">
            <a href="">
              <div className="flex items-center justify-between mb-2">
                <h6 className="text-xl font-semibold text-gray-800 font-poppins">
                  VISIT
                </h6>

                <FaAngleRight className="w-5 h-5 text-gray-500 group-hover:text-sky-500 group-hover:translate-x-1 transition-all duration-300" />
              </div>
              <p className="text-gray-600 leading-relaxed font-poppins">
                Explore Resilient Village destinations and activities, and plan
                the trip of a lifetime.
              </p>
            </a>
          </div>

          {/* CARD */}
          <div className="bg-white p-4 rounded-2xl hover:shadow-md transition-all duration-300 cursor-pointer group">
            <a href="">
              <div className="flex items-center justify-between mb-2">
                <h6 className="text-xl font-semibold text-gray-800 font-poppins">
                  LIVE AND WORK
                </h6>

                <FaAngleRight className="w-5 h-5 text-gray-500 group-hover:text-sky-500 group-hover:translate-x-1 transition-all duration-300" />
              </div>
              <p className="text-gray-600 leading-relaxed font-poppins">
                Discover what you need to know about living, working, and moving
                to Resilient Village.
              </p>
            </a>
          </div>

          {/* CARD */}
          <div className="bg-white p-4 rounded-2xl hover:shadow-md transition-all duration-300 cursor-pointer group">
            <a href="">
              <div className="flex items-center justify-between mb-2">
                <h6 className="text-xl font-semibold text-gray-800 font-poppins">
                  STUDY
                </h6>

                <FaAngleRight className="w-5 h-5 text-gray-500 group-hover:text-sky-500 group-hover:translate-x-1 transition-all duration-300" />
              </div>
              <p className="text-gray-600 leading-relaxed font-poppins">
                Looking to study or currently studying in Resilient Village.
              </p>
            </a>
          </div>

          {/* CARD */}
          <div className="bg-white p-4 rounded-2xl hover:shadow-md transition-all duration-300 cursor-pointer group">
            <a href="">
              <div className="flex items-center justify-between mb-2">
                <h6 className="text-xl font-semibold text-gray-800 font-poppins">
                  BUSINESS
                </h6>

                <FaAngleRight className="w-5 h-5 text-gray-500 group-hover:text-sky-500 group-hover:translate-x-1 transition-all duration-300" />
              </div>

              <p className="text-gray-600 leading-relaxed font-poppins">
                Investment opportunities in Resilient Village.
              </p>
            </a>
          </div>
        </div>
      </div>

      {/* part 2 */}
      <div className="w-full px-6 py-10 bg-gray-200">
        <div className="max-w-6xl ">
          <h5 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 font-poppins ">
            Who We Are
          </h5>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="hidden md:flex md:flex-col bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <img
                src="/image/akbar-2.JPG"
                alt="Mayor"
                className="w-full h-72 object-cover"
              />

              <div className="p-6">
                <h6 className="text-xl font-semibold text-gray-800 mb-3 font-poppins">
                  What the Mayor Does
                </h6>

                <p className="text-gray-600 leading-relaxed font-poppins">
                  Akbar Dermawan Mahbubillah is the current Mayor. He leads the
                  village and creates policies to improve the Resilient Village
                  for everyone.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <img
                src="/image/staf.jpeg"
                alt="Assembly"
                className="w-full h-72 object-cover"
              />

              <div className="p-6">
                <h6 className="text-xl font-semibold text-gray-800 mb-3 font-poppins">
                  What the Resilient Village Assembly Does
                </h6>

                <p className="text-gray-600 leading-relaxed font-poppins">
                  The Assembly holds the Mayor and mayoral advisers accountable
                  by examining their work and ensuring promises to residents are
                  delivered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* part 3 */}
      <div className="w-full px-6 py-10 bg-gray-50">
        <div className="max-w-6xl ">
          <h5 className="text-3xl md:text-4xl font-bold text-gray-800  font-poppins ">
            Priorities for Risilient Village
          </h5>
          <span>Read about the things tahnt matter most right now.</span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Card 1 */}
            <div className="hidden md:flex md: flex-col bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <img
                src="/image/logo.jpg"
                alt="Mayor"
                className="w-full h-72 object-cover"
              />

              <div className="p-6">
                <h6 className="text-xl font-semibold text-gray-800 mb-3 font-poppins">
                  Resilient Village Growth Plan
                </h6>

                <p className="text-gray-600 leading-relaxed font-poppins">
                  Our 10-yer ambition for Resilients growth, and the action we
                  will take to meke it happen.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <img
                src="/image/resilient.webp"
                alt="Assembly"
                className="w-full h-72 object-cover"
              />

              <div className="p-6">
                <h6 className="text-xl font-semibold text-gray-800 mb-3 font-poppins">
                  Supporting Regional Tourism
                </h6>

                <p className="text-gray-600 leading-relaxed font-poppins">
                  We are on a mission to introduce local tourism to foreign
                  countries so that it can help boost the local economy
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <img
                src="/image/resilient-2.jpg"
                alt="Assembly"
                className="w-full h-72 object-cover"
              />

              <div className="p-6">
                <h6 className="text-xl font-semibold text-gray-800 mb-3 font-poppins">
                  Help with the cost of living
                </h6>

                <p className="text-gray-600 leading-relaxed font-poppins">
                  Find out what support is available to help you manage the cost
                  of living in Resilient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* part 4 */}
      <div className="w-full px-6 py-10 bg-gray-200 hidden md:flex">
        <div className="max-w-6xl ">
          <h5 className="text-3xl md:text-4xl font-bold text-gray-800  font-poppins ">
            Upcoming events
          </h5>
          <span>Discover teh exciting events happening in Resilient.</span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Card 1 */}
            <div className=" bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <img
                src="/image/resilient-3.jpg"
                alt="Mayor"
                className="w-full h-72 object-cover"
              />

              <div className="p-6">
                <h6 className="text-xl font-semibold text-gray-800 mb-3 font-poppins">
                  Planting Mangrove Trees
                </h6>

                <p className="text-gray-600 leading-relaxed font-poppins">
                  We are committed to protecting coastal ecosystems by planting
                  mangrove trees, helping prevent erosion, supporting marine
                  life, and creating a greener environment for future
                  generations.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <img
                src="/image/resilient-4.jpeg"
                alt="Assembly"
                className="w-full h-72 object-cover"
              />

              <div className="p-6">
                <h6 className="text-xl font-semibold text-gray-800 mb-3 font-poppins">
                  Regional Dance Festival Competition
                </h6>

                <p className="text-gray-600 leading-relaxed font-poppins">
                  The Regional Dance Festival Competition showcases traditional
                  culture and local talent while attracting tourists and helping
                  promote regional tourism to a wider audience.
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <img
                src="/image/resilient-5.jpg"
                alt="Assembly"
                className="w-full h-72 object-cover"
              />

              <div className="p-6">
                <h6 className="text-xl font-semibold text-gray-800 mb-3 font-poppins">
                  Culinary UMKM market
                </h6>

                <p className="text-gray-600 leading-relaxed font-poppins">
                  Enjoy a variety of local foods, traditional snacks, and
                  cultural experiences while supporting small businesses and
                  promoting regional tourism.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyHome;
