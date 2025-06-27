import { useEffect, useState } from "react";
// import {NavLink as Link} from "react-router-dom"
import { Link } from "react-router-dom";

import clsx from "clsx";

export default function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [dropDown, setdropDown] = useState(false);

  useEffect(() => {
    if (openMobileMenu) {
      // Disable scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling
      document.body.style.overflow = "auto";
    }

    // Cleanup on unmount or state change
    return () => {
      document.body.style.overflow = "auto"; // Ensure scrolling is re-enabled if the component is unmounted
    };
  }, [openMobileMenu]);

  return (
    <>
      <header className="flex justify-center fixed w-full top-[0px] z-1 bg-linear-to-b from-[var(--semi-nav-90)] to-[var(--semi-nav-80)] backdrop-blur-2xl">
        <div className="relative max-w-[1440px] w-full flex justify-center xl:pr-[101px] pr-[0px]">
          <div className="w-full xl:max-w-[1238px] lg:max-w-[994px] md:max-w-[768px] max-w-[640px] xl:pl-[114px] lg:pl-[25px] md:pl-[43px] pl-[19px] lg:pr-[10px] md:pr-[30px] sm:pr-[15px] pr-[20px] py-[15px] flex items-center justify-between min-h-[60px]">
            <Link
              to="/"
              className="z-2 cursor-pointer"
              onClick={() => setdropDown(true)}
            >
              {/* <a href="/" className="z-2"> */}
              <span className="text-[13px]/[1.0] text-[var(--text-dark)] font-bold">
                Therapia
              </span>
              {/* </a> */}
            </Link>
            <nav className="md:block hidden">
              <ul className="flex gap-x-[50px] text-[13px]/[1.0] text-[var(--text-dark)] font-semibold">
<<<<<<< feature/Goodluck/Routing
                <Link to="/about">
                  {" "}
                  <li
                    className="cursor-pointer"
                    onClick={() => setdropDown(true)}
                  >
                    About us
                  </li>{" "}
                </Link>
                <Link to="/feature">
                  {" "}
                  <li
                    className="cursor-pointer"
                    onClick={() => setdropDown(true)}
                  >
                    Features
                  </li>{" "}
                </Link>
                {/* <Link to="/schedule-session"> */}
                <li
                  className=" relative cursor-pointer"
                  onClick={() => setdropDown(!dropDown)}
                >
                  <div className="flex gap-x-[8px] items-center">
                    Services
=======
                <li>About us</li>
                <a href="/resources-library-page" >  Features</a>
                <a href="/schedule-session">
                  <li className="flex gap-x-[8px] items-center">
                    Services{" "}
>>>>>>> main
                    <svg
                      width={10}
                      height={6}
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.25 0L5 3.6L8.75 0L10 1.2L5 6L0 1.2L1.25 0Z"
                        fill="var(--secondary)"
                      />
                    </svg>
                  </div>
                  {!dropDown && (
                    <div>
                      <div
                        className={`absolute  z-10 mt-2 w-40 origin-top-right 
                        transition-all duration-300 ease-in-out transform  
                        bg-white shadow-2xl`}
                      >
                        <div>
                          <ul>
                            <li>
                              <Link
                                to="/schedule-session"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                Schedule Session
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/resource-library"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                Resource Library
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
                {/* </Link> */}
              </ul>
            </nav>
            <div className="md:flex gap-x-[19px] hidden">
              <Link to="/signup">
                <button className="rounded-[6px] bg-[var(--secondary)] text-[var(--text-light)] min-w-[121px] h-[30px] flex items-center justify-center text-[12px]/[18px] font-semibold cursor-pointer">
                  Create Account
                </button>
              </Link>
              <Link to="/login">
                <button className="rounded-[6px] bg-[var(--secondary)] text-[var(--text-light)] min-w-[121px] h-[30px] flex items-center justify-center text-[12px]/[18px] font-semibold cursor-pointer">
                  Login
                </button>
              </Link>
            </div>
            <div
              className="md:hidden w-[20px] h-[13px] flex flex-col justify-between z-2"
              onClick={() => setOpenMobileMenu(!openMobileMenu)}
            >
              <span
                className={clsx(
                  "w-[20px] h-[2px] bg-[var(--text-dark)] rounded-[6px] transition-transform duration-[300ms] ease-in",
                  { "rotate-[-45deg] translate-y-[6px]": openMobileMenu }
                )}
              ></span>
              <span
                className={clsx(
                  "w-[20px] h-[2px] bg-[var(--text-dark)] rounded-[6px] transition-opacity duration-[300ms] ease-in",
                  { "opacity-0": openMobileMenu }
                )}
              ></span>
              <span
                className={clsx(
                  "w-[20px] h-[2px] bg-[var(--text-dark)] rounded-[6px] transition-transform duration-[300ms] ease-in",
                  { "rotate-[45deg] translate-y-[-5px]": openMobileMenu }
                )}
              ></span>
            </div>
            <nav
              className={clsx(
                "md:hidden block absolute top-[0px] left-[0px] transition-[max-height] duration-[300ms] ease-in bg-[var(--background-base)] w-full overflow-hidden z-1",
                { "max-h-[0px]": !openMobileMenu },
                { "max-h-[100vh]": openMobileMenu }
              )}
            >
              <div className="flex justify-center">
                <ul className="flex flex-col gap-y-[50px] text-[13px]/[1.0] text-[var(--text-dark)] font-semibold pt-[86px] pb-[50px] h-[100vh] max-w-[640px] w-full px-[19px]">
               <Link to="/about">  <li className="cursor-pointer" onClick={() => setOpenMobileMenu(false)}>About us</li> </Link> 
               <Link to="/feature">     <li className="cursor-pointer" onClick={() => setOpenMobileMenu(false)}>Features</li> </Link> 
                  <Link to="schedule-session">
                    <li className="flex gap-x-[8px] items-center cursor-pointer" onClick={() => setOpenMobileMenu(false)}>
                      Services
                      <svg
                        width={10}
                        height={6}
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="rotate-270"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.25 0L5 3.6L8.75 0L10 1.2L5 6L0 1.2L1.25 0Z"
                          fill="var(--secondary)"
                        />
                      </svg>
                    </li>
                  </Link>
                  <Link to="/signup">
                    <li className="cursor-pointer" onClick={() => setOpenMobileMenu(false)}>Create Account</li>
                  </Link>
                  <Link to="/login">
                    <li className="cursor-pointer" onClick={() => setOpenMobileMenu(false)}>Login</li>
                  </Link>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <div className="h-[60px] bg-[var(--background-base)]"></div>
    </>
  );
}
