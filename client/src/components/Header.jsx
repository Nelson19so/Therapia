import { useEffect, useState } from "react";
import clsx from "clsx";

export default function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

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
    <header className="flex justify-center fixed w-full top-[0px] z-1 bg-linear-to-b from-[#ffffffe6] to-[#ffffffcc] backdrop-blur-2xl">
      <div className="relative max-w-[1440px] w-full flex justify-center xl:pr-[101px] pr-[0px]">
        <div className="w-full xl:max-w-[1238px] lg:max-w-[994px] md:max-w-[768px] max-w-[640px] xl:pl-[114px] lg:pl-[25px] md:pl-[43px] pl-[19px] lg:pr-[10px] md:pr-[30px] sm:pr-[15px] pr-[20px] py-[15px] flex items-center justify-between min-h-[60px]">
          <span className="text-[13px]/[1.0] text-black font-bold z-2">
            Therapia
          </span>
          <nav className="md:block hidden">
            <ul className="flex gap-x-[50px] text-[13px]/[1.0] text-black font-semibold">
              <li>About us</li>
              <li>Features</li>
              <li className="flex gap-x-[8px] items-center">
                Services{" "}
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
                    fill="#031A0A"
                  />
                </svg>
              </li>
            </ul>
          </nav>
          <div className="md:flex gap-x-[19px] hidden">
            <button className="rounded-[6px] bg-[#031A0A] text-white min-w-[121px] h-[30px] flex items-center justify-center text-[12px]/[18px] font-semibold">
              Create Account
            </button>
            <button className="rounded-[6px] bg-[#031A0A] text-white min-w-[121px] h-[30px] flex items-center justify-center text-[12px]/[18px] font-semibold">
              Login
            </button>
          </div>
          <div
            className="md:hidden w-[20px] h-[13px] flex flex-col justify-between z-2"
            onClick={() => setOpenMobileMenu(!openMobileMenu)}
          >
            <span
              className={clsx(
                "w-[20px] h-[2px] bg-black rounded-[6px] transition-transform duration-[300ms] ease-in",
                { "rotate-[-45deg] translate-y-[6px]": openMobileMenu }
              )}
            ></span>
            <span
              className={clsx(
                "w-[20px] h-[2px] bg-black rounded-[6px] transition-opacity duration-[300ms] ease-in",
                { "opacity-0": openMobileMenu }
              )}
            ></span>
            <span
              className={clsx(
                "w-[20px] h-[2px] bg-black rounded-[6px] transition-transform duration-[300ms] ease-in",
                { "rotate-[45deg] translate-y-[-5px]": openMobileMenu }
              )}
            ></span>
          </div>
          <nav
            className={clsx(
              "md:hidden block absolute top-[0px] left-[0px] transition-[max-height] duration-[300ms] ease-in bg-white w-full overflow-hidden z-1",
              { "max-h-[0px]": !openMobileMenu },
              { "max-h-[100vh]": openMobileMenu }
            )}
          >
            <div className="flex justify-center">
              <ul className="flex flex-col gap-y-[50px] text-[13px]/[1.0] text-black font-semibold pt-[86px] pb-[50px] h-[100vh] max-w-[640px] w-full px-[19px]">
                <li>About us</li>
                <li>Features</li>
                <li className="flex gap-x-[8px] items-center">
                  Services{" "}
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
                      fill="#031A0A"
                    />
                  </svg>
                </li>
                <li>Create Account</li>
                <li>Login</li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
