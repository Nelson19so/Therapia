import SignupForm from "../components/SignupForm";
import "../assets/styles/css/pages/signup/style.css";

export default function Signup() {
  return (
    <section id="signup-page" className="flex justify-center">
      <div className="max-w-[1920px] w-full">
        <div className="grid grid-cols-[52.5%_47.5%] min-h-screen pt-[23px] pb-[30px] pl-[98px] xl:pr-[28px] pr-[20px] layout-grid-container">
          <div className="flex flex-col">
            <div className="lg:mt-[24px] mb-[14px] lg:text-start text-center">
              <a href="/">
                <span className="sm:text-[17px]/[35px] text-[13px]/[35px] text-[var(--text-dark)] font-medium">
                  Therapia
                </span>
              </a>
            </div>
            <div className="flex grow items-center pl-[116px] grid-form-column">
              <div className="max-w-[426px] w-full">
                <div className="flex flex-col items-center gap-y-[3px] text-center">
                  <h2 className="sm:text-[40px]/[45px] text-[30px]/[34px] text-[var(--secondary)] font-bold">
                    Create account
                  </h2>
                  <span className="sm:text-[16px]/[35px] text-[13px]/[35px] text-[var(--text-dark)] font-medium">
                    Welcome back! Please enter your details
                  </span>
                  <button className="flex gap-x-[6px] items-center justify-center sm:text-[17px]/[35px] text-[14px]/[35px] text-[var(--primary)] font-bold bg-[var(--secondary)] rounded-[10px] px-[19px] py-[10px] max-w-[418px] w-full">
                    <svg
                      width={25}
                      height={25}
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.06 12.75C23.06 11.97 22.99 11.22 22.86 10.5H12.5V14.755H18.42C18.165 16.13 17.39 17.295 16.225 18.075V20.835H19.78C21.86 18.92 23.06 16.1 23.06 12.75Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12.5 23.5C15.47 23.5 17.96 22.515 19.78 20.835L16.225 18.075C15.24 18.735 13.98 19.125 12.5 19.125C9.63504 19.125 7.21004 17.19 6.34504 14.59H2.67004V17.44C4.48004 21.035 8.20004 23.5 12.5 23.5Z"
                        fill="#34A853"
                      />
                      <path
                        d="M6.345 14.59C6.125 13.93 6 13.225 6 12.5C6 11.775 6.125 11.07 6.345 10.41V7.56H2.67C1.9 9.09286 1.49932 10.7846 1.5 12.5C1.5 14.275 1.925 15.955 2.67 17.44L6.345 14.59Z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12.5 5.875C14.115 5.875 15.565 6.43 16.705 7.52L19.86 4.365C17.955 2.59 15.465 1.5 12.5 1.5C8.20004 1.5 4.48004 3.965 2.67004 7.56L6.34504 10.41C7.21004 7.81 9.63504 5.875 12.5 5.875Z"
                        fill="#EA4335"
                      />
                    </svg>
                    Sign up with Google
                  </button>
                  <span className="sm:text-[16px]/[35px] text-[13px]/[35px] text-[var(--text-dark)] font-semibold">
                    OR
                  </span>
                </div>
                <div className="mt-[16px]">
                  <SignupForm />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:block hidden relative bg-cover bg-no-repeat bg-center bg-[url(/images/background-signup-page.webp)] h-full w-full rounded-[30px] overflow-y-clip">
            <svg
              width={465}
              height={465}
              viewBox="0 0 465 465"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-[25.2%] left-[-102px] z-[-1] circle-svg"
            >
              <path
                d="M465 232.5C465 360.906 360.906 465 232.5 465C104.094 465 0 360.906 0 232.5C0 104.094 104.094 0 232.5 0C360.906 0 465 104.094 465 232.5ZM79.4357 232.5C79.4357 317.035 147.965 385.564 232.5 385.564C317.035 385.564 385.564 317.035 385.564 232.5C385.564 147.965 317.035 79.4357 232.5 79.4357C147.965 79.4357 79.4357 147.965 79.4357 232.5Z"
                fill="var(--primary)"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
