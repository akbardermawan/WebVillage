import React from "react";
import { NAVBAR } from "../../common/constants";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const navContainerRef = useRef(null);
  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <nav>
      {/* PC */}
      <div
        ref={navContainerRef}
        className="hidden md:flex md:justify-between md:items-center fixed inset-x-0 top-0 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6 bg-white/30 hover:bg-white/70 px-3 rounded-2xl max-w-7xl mx-auto"
      >
        <div className="ml-5">
          <img src="./image/logo.png" alt="logo" className="w-15" />
        </div>
        <div>
          <ul className="flex space-x-6 mr-2 ">
            {NAVBAR.map((item) => (
              <li key={item.id} className="relative group">
                <a
                  href={item.url}
                  className="hover:text-blue-500  font-semibold"
                >
                  {item.name}
                </a>

                {/* Dropdown */}
                {item.children && (
                  <ul
                    className="
                  absolute left-0 mt-5 w-48  shadow-lg 
                  opacity-0 invisible 
                  group-hover:opacity-100 group-hover:visible 
                  transition-all duration-300 bg-white/70 rounded-b-xl
                "
                  >
                    {item.children.map((child) => (
                      <li key={child.id} className="">
                        <a href={child.url} className="block px-4 py-2  ">
                          {child.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* HP */}
      <div></div>
    </nav>
  );
};

export default Navbar;
