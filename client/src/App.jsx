import FeatureCard from "./components/FeatureCard";
import ProcessCard from "./components/ProcessCard";
import TestimonialCard from "./components/TestimonialCard";

function App() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      {/* Header */}
      <header className="flex justify-center">
        <div className="max-w-[1440px] w-full flex justify-center pr-[101px]">
          <div className="w-full max-w-[1238px] pl-[114px] pr-[10px] py-[15px] flex items-center justify-between">
            <span className="text-[13px]/[1.0] text-black font-bold">
              Therapia
            </span>
            <nav>
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
            <div className="flex gap-x-[19px]">
              <button className="rounded-[6px] bg-[#031A0A] text-white min-w-[121px] h-[30px] flex items-center justify-center text-[12px]/[18px] font-semibold">
                Create Account
              </button>
              <button className="rounded-[6px] bg-[#031A0A] text-white min-w-[121px] h-[30px] flex items-center justify-center text-[12px]/[18px] font-semibold">
                Login
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="flex justify-center">
          <div className="max-w-[1440px] w-full flex justify-center pr-[97px]">
            <div className="w-full max-w-[1246px] pl-[120px] py-[23px] flex items-center justify-between">
              <div className="flex flex-col gap-y-[18px]">
                <h2 className="max-w-[372px] text-[38px]/[45px] font-bold text-[#031A0A]">
                  Your Mind Matters. We're Here to Help.
                </h2>
                <p className="max-w-[337px] text-[13px]/[21px] text-[#4B5563]">
                  Therapia connects you with licensed therapists and
                  personalized mental wellness tools anytime, anywhere.
                </p>
                <div className="mt-[6px] flex gap-x-[12px]">
                  <button className="rounded-[4px] bg-[#031A0A] text-white min-w-[95px] h-[33px] flex items-center justify-center text-[12px]/[18px] font-semibold">
                    Get Started
                  </button>
                  <button className="rounded-[4px] bg-[#EDE9FE] text-[#031A0A] px-[13px] h-[33px] flex items-center text-[12px]/[18px] font-medium">
                    Explore Features
                  </button>
                </div>
              </div>
              <div className="bg-[url(/images/hero-image-landing-page.png)] bg-contain w-[483px] h-[322px] bg-no-repeat relative">
                <svg
                  width={126}
                  height={86}
                  viewBox="0 0 126 86"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[-23px] left-[-35px] z-[-1]"
                >
                  <path
                    opacity={0.5}
                    d="M126 23C126 57.7939 97.7939 86 63 86C28.2061 86 0 57.7939 0 23C0 -11.7939 28.2061 -40 63 -40C97.7939 -40 126 -11.7939 126 23ZM20.8872 23C20.8872 46.2583 39.7417 65.1128 63 65.1128C86.2583 65.1128 105.113 46.2583 105.113 23C105.113 -0.258274 86.2583 -19.1128 63 -19.1128C39.7417 -19.1128 20.8872 -0.258274 20.8872 23Z"
                    fill="#8FAA0D"
                  />
                </svg>
                <svg
                  width={89}
                  height={39}
                  viewBox="0 0 89 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute bottom-[-23px] right-[-64px] z-[-1]"
                >
                  <path
                    opacity={0.5}
                    d="M89 44.5C89 69.0767 69.0767 89 44.5 89C19.9233 89 0 69.0767 0 44.5C0 19.9233 19.9233 0 44.5 0C69.0767 0 89 19.9233 89 44.5ZM18.6317 44.5C18.6317 58.7867 30.2133 70.3683 44.5 70.3683C58.7867 70.3683 70.3683 58.7867 70.3683 44.5C70.3683 30.2133 58.7867 18.6317 44.5 18.6317C30.2133 18.6317 18.6317 30.2133 18.6317 44.5Z"
                    fill="#8FAA0D"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Features Designed for Your Well-being Section */}
        <section className="flex justify-center">
          <div className="max-w-[1700px] w-full flex justify-center relative">
            <div className="max-w-[1440px] w-full flex flex-col">
              <svg
                width={156}
                height={135}
                viewBox="0 0 156 135"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-[0px] left-[0px] z-[-1]"
              >
                <path
                  opacity={0.5}
                  d="M156 31.0001C156 88.4377 109.438 135 52 135C-5.43766 135 -52 88.4377 -52 31.0001C-52 -26.4376 -5.43766 -72.9999 52 -72.9999C109.438 -72.9999 156 -26.4376 156 31.0001ZM-17.5196 31.0001C-17.5196 69.3947 13.6053 100.52 52 100.52C90.3946 100.52 121.52 69.3947 121.52 31.0001C121.52 -7.39455 90.3946 -38.5195 52 -38.5195C13.6053 -38.5195 -17.5196 -7.39455 -17.5196 31.0001Z"
                  fill="#8FAA0D"
                />
              </svg>
              <svg
                width={202}
                height={118}
                viewBox="0 0 202 118"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-[0px] right-[0px] z-[-1]"
              >
                <path
                  opacity={0.5}
                  d="M208 104.92C208 162.358 161.438 208.92 104 208.92C46.5624 208.92 0 162.358 0 104.92C0 47.4826 46.5624 0.920166 104 0.920166C161.438 0.920166 208 47.4826 208 104.92ZM34.4804 104.92C34.4804 143.315 65.6054 174.44 104 174.44C142.395 174.44 173.52 143.315 173.52 104.92C173.52 66.5256 142.395 35.4006 104 35.4006C65.6054 35.4006 34.4804 66.5256 34.4804 104.92Z"
                  fill="#8FAA0D"
                />
              </svg>
              <div className="flex flex-col items-center gap-y-[12px]">
                <h4 className="text-[22px]/[30px] font-bold text-[#031A0A]">
                  Features Designed for Your Well-being
                </h4>
                <p className="text-[12px]/[21px] max-w-[453px] text-center text-[#4B5563]">
                  Therapia offers comprehensive tools to support your mental
                  health journey, wherever you are.
                </p>
              </div>
              <div className="py-[24px] gap-[38px] grid grid-cols-[313px_313px_313px] justify-center">
                {/* Feature Card Components */}
                <FeatureCard
                  title="Virtual Therapy Sessions"
                  text="Connect with licensed therapists through secure video calls from the comfort of your home."
                  svgCode={1}
                />
                <FeatureCard
                  title="Daily Mood Tracking"
                  text="Monitor your emotional well-being with our intuitive mood tracking tools and visualization."
                  svgCode={2}
                />
                <FeatureCard
                  title="Personalized Coping Tools"
                  text="Access customized exercises and techniques based on your specific needs and challenges."
                  svgCode={3}
                />
                <FeatureCard
                  title="Safe Community Forum"
                  text="Share experiences and find support in our moderated community of understanding peers."
                  svgCode={4}
                />
                <FeatureCard
                  title="Curated Resource Library"
                  text="Explore our extensive collection of articles, videos, and exercises on mental wellness."
                  svgCode={5}
                />
                <FeatureCard
                  title="Flexible Rescheduling"
                  text="Choose appointment times that work best for your schedule and prioritize your mental health."
                  svgCode={6}
                />
              </div>
            </div>
          </div>
        </section>

        {/* How Therapia works Section*/}
        <section className="flex justify-center">
          <div className="max-w-[1440px] w-full pt-[22px] flex flex-col gap-y-[44px]">
            <div className="flex flex-col items-center">
              <h4 className="text-[22px]/[30px] font-bold text-[#031A0A]">
                How Therapia works
              </h4>
              <p className="text-[13px]/[21px] font-[Inter] text-[#4B5563]">
                Your journey to better mental wellness is just a few steps away.
              </p>
            </div>
            <div className="grid grid-cols-[178px_178px_178px_178px_178px] justify-center gap-[24px]">
              {/* Process Card Components */}
              <ProcessCard
                title="Sign up"
                text="Create your secure account and complete a brief assessment."
                svgCode={1}
              />
              <ProcessCard
                title="Track your mood"
                text="Log your daily emotions to identify patterns and triggers."
                svgCode={2}
              />
              <ProcessCard
                title="Book a therapist"
                text="Browse profiles and schedule sessions with licensed professionals."
                svgCode={3}
              />
              <ProcessCard
                title="Join the community"
                text="Connect with others on similar mental wellness journeys."
                svgCode={4}
              />
              <ProcessCard
                title="Stay supported"
                text="Access resources and tools for continuous growth and healing."
                svgCode={5}
              />
            </div>
          </div>
        </section>

        {/* Stories from Our Community Section */}
        <section className="flex justify-center">
          <div className="max-w-[1440px] w-full pt-[22px] pb-[28px] flex flex-col gap-y-[24px]">
            <div className="flex flex-col items-center">
              <h4 className="text-[22px]/[30px] font-bold text-[#031A0A]">
                Stories from Our Community
              </h4>
              <p className="text-[13px]/[21px] font-[Inter] text-[#4B5563]">
                Hear from people whose lives have been transformed through
                Therapia.
              </p>
            </div>

            <div className="grid grid-cols-[229px_229px_229px_229px] justify-center gap-[24px]">
              {/* Testimonial Card Components */}
              <TestimonialCard
                name="Sarah L."
                title="Teacher"
                text="“Therapia changed how I manage stress daily. The mood tracking feature helped me before.”"
              />
              <TestimonialCard
                name="Michael R."
                title="Software Engineer"
                text="“Finding a therapist was always intimidating for me. Therapia made the process comfortable and I've been with my therapist for 6 months now.”"
              />
              <TestimonialCard
                name="Jamie T."
                title="Healthcare Worker"
                text="“The community forums helped me realize I wasn't alone in my struggles. It's been a crucial part of my recovery journey.”"
              />
              <TestimonialCard
                name="David K."
                title="Business Analyst"
                text="As someone with a busy schedule, having therapy sessions from home has been life-changing. Therapia's platform is seamless."
              />
            </div>
          </div>
        </section>

        {/* Are You a Licensed Mental Health Professional? Section */}
        <section className="flex justify-center">
          <div className="max-w-[1440px] w-full pt-[22px] flex justify-center">
            <div className="max-w-[988px] w-full pt-[22px] flex flex-col gap-y-[12px] py-[35px] font-[Inter]">
              <h4 className="text-[22px]/[30px] text-[#031A0A] font-bold max-w-[361px]">
                Are You a Licensed Mental Health Professional?
              </h4>
              <p className="text-[13px]/[21px] text-[#4B5563] max-w-[347px]">
                Join our network of therapists and counselors making mental
                healthcare accessible to those who need it most.
              </p>
              <div className="mt-[6px] text-[11px]/[18px] text-[#1F2937] flex flex-col gap-y-[6px]">
                <div className="flex items-center gap-x-[6px]">
                  <svg
                    width={18}
                    height={19}
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 9.51917C0 4.55723 4.02244 0.53479 8.98438 0.53479C13.9463 0.53479 17.9688 4.55723 17.9688 9.51917C17.9688 14.4811 13.9463 18.5035 8.98438 18.5035C4.02244 18.5035 0 14.4811 0 9.51917Z"
                      fill="#8FAA0D"
                    />
                    <path
                      d="M5.4854 10.019L7.48482 12.0185L12.4834 7.0199"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>Flexible scheduling that works around your availability</p>
                </div>
                <div className="flex items-center gap-x-[6px]">
                  <svg
                    width={18}
                    height={19}
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 9.51917C0 4.55723 4.02244 0.53479 8.98438 0.53479C13.9463 0.53479 17.9688 4.55723 17.9688 9.51917C17.9688 14.4811 13.9463 18.5035 8.98438 18.5035C4.02244 18.5035 0 14.4811 0 9.51917Z"
                      fill="#8FAA0D"
                    />
                    <path
                      d="M5.4854 10.019L7.48482 12.0185L12.4834 7.0199"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>
                    Secure telehealth platform designed for mental healthcare
                  </p>
                </div>
                <div className="flex items-center gap-x-[6px]">
                  <svg
                    width={18}
                    height={19}
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 9.51917C0 4.55723 4.02244 0.53479 8.98438 0.53479C13.9463 0.53479 17.9688 4.55723 17.9688 9.51917C17.9688 14.4811 13.9463 18.5035 8.98438 18.5035C4.02244 18.5035 0 14.4811 0 9.51917Z"
                      fill="#8FAA0D"
                    />
                    <path
                      d="M5.4854 10.019L7.48482 12.0185L12.4834 7.0199"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>Expand your practice and help more clients</p>
                </div>
              </div>
              <button className="mt-[12px] rounded-[4px] bg-[#031A0A] text-white max-w-[158px] w-full h-[36px] flex items-center justify-center text-[12px]/[21px] font-semibold">
                Join as a Therapist
              </button>
            </div>
          </div>
        </section>

        {/* Get Mental Wellness Tips Straight to Your Inbox Section */}
        <section className="flex justify-center bg-[#8FAA0D]">
          <div className="max-w-[1440px] w-full py-[48px] flex justify-center">
            <div className="flex flex-col items-center gap-y-[12px]">
              <h4 className="text-[22px]/[30px] font-bold text-white">
                Get Mental Wellness Tips Straight to Your Inbox
              </h4>
              <p className="text-[13px]/[21px] max-w-[483px] text-center text-[#F5F3FF]">
                Join our newsletter for expert advice, coping strategies, and
                the latest in mental health research.
              </p>
              <form
                action=""
                className="mt-[10px] flex gap-x-[12px]"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Your Email Address"
                  className="text-[12px]/[18px] text-[#031A0A] font-normal font-[Inter] placeholder-[#CCCCCC] bg-white rounded-[4px] min-w-[221px] px-[12px] outline-0"
                />
                <button className="rounded-[4px] bg-[#031A0A] text-white min-w-[103px] w-full h-[36px] flex items-center justify-center text-[12px]/[21px] font-semibold">
                  Subscribe
                </button>
              </form>
              <span className="text-[10px]/[15px] text-[#F5F3FF] mt-[1px]">
                We respect your privacy. Unsubscribe at any time.
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex justify-center bg-[#031A0A]">
        <div className="max-w-[1440px] w-full py-[97px] flex justify-center">
          <div className="max-w-[988px] w-full flex flex-col font-[Inter] gap-y-[24px]">
            <div className="grid grid-cols-[229px_229px_229px_229px] justify-center gap-[24px]">
              <div className="flex flex-col gap-y-[12px]">
                <h6 className="text-[13px]/[21px] font-bold text-white">
                  Therapia
                </h6>
                <p className="text-[11px]/[18px] text-[#9CA3AF] max-w-[214px]">
                  Your mental wellness companion, available whenever and
                  wherever you need support.
                </p>
              </div>
              <div className="flex flex-col gap-y-[12px]">
                <h6 className="text-[13px]/[18px] font-semibold text-white">
                  Company
                </h6>
                <div className="text-[11px]/[18px] text-[#9CA3AF] flex flex-col gap-y-[6px]">
                  <a href="">About Us</a>
                  <a href="">Careers</a>
                  <a href="">Blog</a>
                  <a href="">Press</a>
                </div>
              </div>
              <div className="flex flex-col gap-y-[12px]">
                <h6 className="text-[13px]/[18px] font-semibold text-white">
                  Resources
                </h6>
                <div className="text-[11px]/[18px] text-[#9CA3AF] flex flex-col gap-y-[6px]">
                  <a href="">Mental Health 101</a>
                  <a href="">Crisis Support</a>
                  <a href="">For Therapists</a>
                  <a href="">FAQ</a>
                </div>
              </div>
              <div className="flex flex-col gap-y-[12px]">
                <h6 className="text-[13px]/[18px] font-semibold text-white">
                  Legal
                </h6>
                <div className="text-[11px]/[18px] text-[#9CA3AF] flex flex-col gap-y-[6px]">
                  <a href="">Terms of Service</a>
                  <a href="">Privacy Policy</a>
                  <a href="">Cookie Policy</a>
                  <a href="">Contact Us</a>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between border-t-[1px] border-[#1F2937] pt-[25px]">
              <span className="text-[11px]/[18px] text-[#9CA3AF]">
                © {currentYear} Therapia. All rights reserved.
              </span>
              <div className="flex items-center gap-x-[12px]">
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_41_414)">
                    <path
                      d="M11.3274 1.80078H9.45454C8.6267 1.80078 7.83276 2.12964 7.24739 2.71501C6.66202 3.30039 6.33316 4.09432 6.33316 4.92216V6.79499H4.46033V9.2921H6.33316V14.2863H8.83026V9.2921H10.7031L11.3274 6.79499H8.83026V4.92216C8.83026 4.7566 8.89604 4.59781 9.01311 4.48073C9.13018 4.36366 9.28897 4.29789 9.45454 4.29789H11.3274V1.80078Z"
                      stroke="#9CA3AF"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_41_414">
                      <rect
                        width={14.9826}
                        height={14.9826}
                        fill="white"
                        transform="translate(0.090332 0.552246)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_41_417)">
                    <path
                      d="M13.8035 3.04932C13.8035 3.04932 13.3665 4.36031 12.555 5.17187C13.5538 11.4146 6.68677 15.9719 1.31799 12.4135C2.6914 12.4759 4.06481 12.0389 5.06365 11.1649C1.94227 10.2285 0.381578 6.54527 1.94227 3.6736C3.31568 5.29672 5.43822 6.23314 7.56076 6.17071C6.99891 3.54875 10.0579 2.05048 11.9307 3.79846C12.6174 3.79846 13.8035 3.04932 13.8035 3.04932Z"
                      stroke="#9CA3AF"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_41_417">
                      <rect
                        width={14.9826}
                        height={14.9826}
                        fill="white"
                        transform="translate(0.069458 0.552246)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_41_420)">
                    <path
                      d="M10.6614 1.80078H4.41862C2.69473 1.80078 1.29724 3.19827 1.29724 4.92216V11.1649C1.29724 12.8888 2.69473 14.2863 4.41862 14.2863H10.6614C12.3853 14.2863 13.7828 12.8888 13.7828 11.1649V4.92216C13.7828 3.19827 12.3853 1.80078 10.6614 1.80078Z"
                      stroke="#9CA3AF"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.0372 7.65036C10.1142 8.16991 10.0255 8.70052 9.78355 9.16673C9.54164 9.63294 9.15889 10.011 8.68973 10.2471C8.22057 10.4833 7.6889 10.5655 7.17034 10.482C6.65178 10.3986 6.17273 10.1538 5.80133 9.78236C5.42994 9.41097 5.18511 8.93192 5.10166 8.41336C5.01822 7.89479 5.10041 7.36312 5.33655 6.89397C5.57269 6.42481 5.95075 6.04206 6.41696 5.80015C6.88317 5.55824 7.41379 5.4695 7.93334 5.54654C8.4633 5.62513 8.95394 5.87208 9.33278 6.25092C9.71161 6.62976 9.95857 7.12039 10.0372 7.65036Z"
                      stroke="#9CA3AF"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.9735 4.61011H10.9798"
                      stroke="#9CA3AF"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_41_420">
                      <rect
                        width={14.9826}
                        height={14.9826}
                        fill="white"
                        transform="translate(0.0487061 0.552246)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_41_425)">
                    <path
                      d="M10.0163 5.54639C11.0097 5.54639 11.9624 5.94102 12.6649 6.64347C13.3673 7.34591 13.7619 8.29864 13.7619 9.29205V13.662H11.2648V9.29205C11.2648 8.96091 11.1333 8.64334 10.8991 8.40919C10.665 8.17504 10.3474 8.04349 10.0163 8.04349C9.68515 8.04349 9.36758 8.17504 9.13343 8.40919C8.89928 8.64334 8.76774 8.96091 8.76774 9.29205V13.662H6.27063V9.29205C6.27063 8.29864 6.66526 7.34591 7.36771 6.64347C8.07016 5.94102 9.02288 5.54639 10.0163 5.54639Z"
                      stroke="#9CA3AF"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.77347 6.17065H1.27637V13.662H3.77347V6.17065Z"
                      stroke="#9CA3AF"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.52492 4.29789C3.21448 4.29789 3.77347 3.73889 3.77347 3.04933C3.77347 2.35978 3.21448 1.80078 2.52492 1.80078C1.83536 1.80078 1.27637 2.35978 1.27637 3.04933C1.27637 3.73889 1.83536 4.29789 2.52492 4.29789Z"
                      stroke="#9CA3AF"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_41_425">
                      <rect
                        width={14.9826}
                        height={14.9826}
                        fill="white"
                        transform="translate(0.027832 0.552246)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
