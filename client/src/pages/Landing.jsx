import FeatureCard from "../components/FeatureCard";
import ProcessCard from "../components/ProcessCard";
import TestimonialCard from "../components/TestimonialCard";

export default function Landing() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="flex justify-center overflow-hidden">
          <div className="max-w-[1440px] w-full flex justify-center xl:pr-[97px] lg:pr-[22px] md:pr-[25px] pr-[10px]">
            <div className="w-full xl:max-w-[1246px] lg:max-w-[1002px] md:max-w-[743px] max-w-[630px] xl:pl-[120px] md:pl-[45px] sm:pl-[20px] pl-[10px] lg:py-[23px] py-[0px] sm:pt-[0px] pt-[70px] flex items-center justify-between sm:flex-row flex-col">
              <div className="flex flex-col gap-y-[18px] sm:items-start items-center">
                <h2 className="sm:max-w-[372px] max-w-[262px] lg:text-[38px]/[45px] md:text-[29px]/[35px] text-[27px]/[33px] font-bold text-[#031A0A]">
                  Your Mind Matters. We're Here to Help.
                </h2>
                <p className="lg:max-w-[337px] md:max-w-[290px] sm:max-w-[289px] max-w-[280px] text-[13px]/[21px] text-[#4B5563] sm:text-start text-center">
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
              <div className="bg-[url(/images/hero-image-landing-page.webp)] bg-contain lg:w-[483px] sm:w-[373px] w-[300px] h-[322px] bg-no-repeat relative bg-center">
                <svg
                  width={126}
                  height={86}
                  viewBox="0 0 126 86"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[-23px] left-[-35px] z-[-1] lg:block hidden"
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
                  className="absolute lg:bottom-[-23px] bottom-[0px] right-[-64px] z-[-1] lg:block hidden"
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
                className="absolute top-[0px] left-[0px] z-[-1] lg:block hidden"
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
                className="absolute bottom-[0px] right-[0px] z-[-1] lg:block hidden"
              >
                <path
                  opacity={0.5}
                  d="M208 104.92C208 162.358 161.438 208.92 104 208.92C46.5624 208.92 0 162.358 0 104.92C0 47.4826 46.5624 0.920166 104 0.920166C161.438 0.920166 208 47.4826 208 104.92ZM34.4804 104.92C34.4804 143.315 65.6054 174.44 104 174.44C142.395 174.44 173.52 143.315 173.52 104.92C173.52 66.5256 142.395 35.4006 104 35.4006C65.6054 35.4006 34.4804 66.5256 34.4804 104.92Z"
                  fill="#8FAA0D"
                />
              </svg>
              <div className="flex flex-col items-center gap-y-[12px]">
                <h4 className="text-[22px]/[30px] font-bold text-[#031A0A] sm:max-w-full max-w-[262px] text-center">
                  Features Designed for Your Well-being
                </h4>
                <p className="text-[12px]/[21px] sm:max-w-[453px] max-w-[300px] text-center text-[#4B5563]">
                  Therapia offers comprehensive tools to support your mental
                  health journey, wherever you are.
                </p>
              </div>
              <div className="py-[24px] gap-[38px] grid xl:grid-cols-[313px_313px_313px] lg:grid-cols-[288px_288px_288px] md:grid-cols-[325px_325px] sm:grid-cols-[286px_286px] grid-cols-[300px] justify-center">
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
          <div className="max-w-[1440px] w-full sm:pt-[22px] pt-[37px] flex flex-col gap-y-[44px]">
            <div className="flex flex-col items-center">
              <h4 className="text-[22px]/[30px] font-bold text-[#031A0A]">
                How Therapia works
              </h4>
              <p className="text-[13px]/[21px] font-[Inter] text-[#4B5563] sm:max-w-full max-w-[300px] text-center sm:mt-[0px] mt-[12px]">
                Your journey to better mental wellness is just a few steps away.
              </p>
            </div>
            <div className="grid xl:grid-cols-[178px_178px_178px_178px_178px] lg:grid-cols-[163px_163px_163px_163px_163px] md:grid-cols-[206px_206px_206px] sm:grid-cols-[180px_180px_180px] grid-cols-[200px] justify-center gap-[24px]">
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
          <div className="max-w-[1440px] w-full sm:pt-[22px] pt-[61px] pb-[28px] flex flex-col gap-y-[24px]">
            <div className="flex flex-col items-center">
              <h4 className="text-[22px]/[30px] font-bold text-[#031A0A] sm:max-w-full max-w-[262px] text-center">
                Stories from Our Community
              </h4>
              <p className="text-[13px]/[21px] font-[Inter] text-[#4B5563] sm:max-w-full max-w-[300px] text-center sm:mt-[0px] mt-[12px]">
                Hear from people whose lives have been transformed through
                Therapia.
              </p>
            </div>

            <div className="grid xl:grid-cols-[229px_229px_229px_229px] lg:grid-cols-[210px_210px_210px_210px] md:grid-cols-[322px_322px] sm:grid-cols-[283px_283px] grid-cols-[300px] justify-center gap-[24px]">
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
            <div className="xl:max-w-[988px] lg:max-w-[914px] md:max-w-[668px] sm:max-w-[590px] max-w-[361px] w-full pt-[22px] flex flex-col gap-y-[12px] py-[35px] sm:px-[0px] px-[20px] font-[Inter]">
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
              <h4 className="text-[22px]/[30px] font-bold text-white sm:max-w-full max-w-[262px] text-center">
                Get Mental Wellness Tips Straight to Your Inbox
              </h4>
              <p className="text-[13px]/[21px] sm:max-w-[483px] max-w-[300px] text-center text-[#F5F3FF]">
                Join our newsletter for expert advice, coping strategies, and
                the latest in mental health research.
              </p>
              <form
                action=""
                className="mt-[10px] flex gap-x-[12px] sm:px-[0px] px-[20px]"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Your Email Address"
                  className="text-[12px]/[18px] text-[#031A0A] font-normal font-[Inter] placeholder-[#CCCCCC] bg-white rounded-[4px] sm:min-w-[221px] w-full px-[12px] outline-0"
                />
                <button className="rounded-[4px] bg-[#031A0A] text-white min-w-[103px] sm:w-full h-[36px] flex items-center justify-center text-[12px]/[21px] font-semibold">
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
    </>
  );
}
