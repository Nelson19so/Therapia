import LoginForm from "../components/LoginForm";
import "../assets/styles/css/pages/login/style.css";


export default function Login() {
  return (
    <section id="login-page" className="flex justify-center">
      <div className="max-w-[1920px] w-full">
        <div className="lg:grid grid-cols-[43.2%_56.8%] flex flex-col layout-grid-container min-h-screen pt-[23px] lg:pb-[71px] pb-[141px] pl-[98px] xl:pr-[28px] pr-[20px]">
          <div className="flex flex-col">
            <div className="lg:mt-[24px] mb-[13px] lg:text-start text-center">
              <a href="/">
                <span className="sm:text-[17px]/[35px] text-[13px]/[35px] text-[var(--text-dark)] font-medium">
                  Therapia
                </span>
              </a>
            </div>
            <div className="lg:block hidden w-full pl-[39px] grow grid-background-column">
              <div className="relative bg-cover bg-no-repeat bg-center bg-[url(/images/background-login-page.webp)] w-full h-full rounded-[30px]">
                <svg
                  width={196}
                  height={170}
                  viewBox="0 0 196 170"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute bottom-[-13px] left-[-18px] z-[-1] triangle-svg"
                >
                  <path d="M0 0L196 170H3.98085e-05L0 0Z" fill="#8FAA0D" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center ml-[40px] lg:mt-[70px] grid-form-column lg:grow-0 grow">
            <div className="max-w-[426px] w-full">
              <div className="text-center flex flex-col gap-y-[3px]">
                <h2 className="sm:text-[40px]/[45px] text-[30px]/[34px] text-[var(--secondary)] font-bold">
                  Login
                </h2>
                <span className="sm:text-[16px]/[35px] text-[13px]/[35px] text-[var(--text-dark)] font-medium">
                  Welcome back! Sign in
                </span>
              </div>
              <div className="mt-[16px]">
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
