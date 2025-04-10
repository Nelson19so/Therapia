import ScheduleSessionImageCard from "../components/ScheduleSessionImageCard";
import ScheduleSessionProcessCard from "../components/ScheduleSessionProcessCard";

export default function ScheduleSession() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="flex justify-center">
          <div className="relative max-w-[1700px] w-full flex justify-center">
            <div className="max-w-[1591px] w-full flex justify-center">
              <div className="w-full max-w-[1394px] flex pt-[34px] pb-[29px] gap-x-[7px]">
                <div className="w-full max-w-[650px] flex flex-col gap-y-[15px] justify-center">
                  <h2 className="text-[40px]/[45px] text-[var(--secondary)] font-bold">
                    Find Your Perfect Therapist Book Your Session with Ease{" "}
                    <span className="text-[var(--primary)]">
                      <span className="block">Prioritize Your Mental</span>{" "}
                      Well-Being
                    </span>{" "}
                    our Mind Matters.{" "}
                  </h2>
                  <p className="text-[14px]/[21px] text-[var(--text-primary)] max-w-[624px]">
                    The "Schedule Sessions" page empowers you to connect with
                    licensed therapists tailored to your unique needs. With an
                    intuitive interface, you can effortlessly filter{" "}
                    <span className="block">
                      through options, ensuring you find the right match for
                      your therapeutic journey.
                    </span>{" "}
                    Experience the comfort of booking at your convenience, all
                    while being{" "}
                    <span className="block">
                      supported in a safe and nurturing environment.
                    </span>
                  </p>
                  <button className="text-[10px]/[18px] text-[var(--secondary)] font-medium w-[168px] h-[32px] flex items-center justify-center rounded-[4px] bg-[var(--accent-base)]">
                    Start Your Therapeutic Journey
                  </button>
                </div>
                <div className="bg-[url(/images/hero-image-schedule-session-page.webp)] w-[583px] h-[568px] bg-contain bg-no-repeat bg-center relative">
                  <svg
                    width={197}
                    height={170}
                    viewBox="0 0 197 170"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-[413px] left-[-11px] z-[-1]"
                  >
                    <path
                      d="M0.015625 0L196.016 170H0.0156648L0.015625 0Z"
                      fill="var(--primary)"
                    />
                  </svg>
                </div>
                <svg
                  width={200}
                  height={256}
                  viewBox="0 0 200 256"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[296px] right-[0px] z-[-1]"
                >
                  <path
                    opacity={0.5}
                    d="M256 128C256 198.692 198.692 256 128 256C57.3075 256 0 198.692 0 128C0 57.3075 57.3075 0 128 0C198.692 0 256 57.3075 256 128ZM42.4374 128C42.4374 175.255 80.7451 213.563 128 213.563C175.255 213.563 213.563 175.255 213.563 128C213.563 80.7451 175.255 42.4374 128 42.4374C80.7451 42.4374 42.4374 80.7451 42.4374 128Z"
                    fill="var(--primary)"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Find Your Perfect Therapist Section */}
        <section className="flex justify-center">
          <div className="relative max-w-[1700px] w-full flex justify-center">
            <div className="max-w-[1591px] w-full flex justify-center">
              <div className="max-w-[1218px] w-full flex flex-col pt-[20px] pb-[7px]">
                <div className="flex flex-col items-center text-[var(--secondary)] pt-[10px] pb-[16px]">
                  <h4 className="text-[24px]/[25px] font-bold">
                    Find Your Perfect Therapist
                  </h4>
                  <span className="text-[14px]/[25px]">
                    Book Your Session with Ease
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="w-[374px] h-[524px] bg-contain bg-no-repeat bg-center bg-[url(/images/perfect-therapist-schedule-session-page.webp)] relative">
                    <svg
                      width={44}
                      height={90}
                      viewBox="0 0 44 90"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute top-[217px] right-[-44px]"
                    >
                      <circle
                        cx={6.82759}
                        cy={7.06892}
                        r={6.82759}
                        fill="var(--primary)"
                        fillOpacity={0.44}
                      />
                      <circle
                        cx={6.82759}
                        cy={22.2413}
                        r={6.82759}
                        fill="var(--primary)"
                        fillOpacity={0.44}
                      />
                      <circle
                        cx={6.82759}
                        cy={37.4138}
                        r={6.82759}
                        fill="var(--primary)"
                        fillOpacity={0.44}
                      />
                      <circle
                        cx={6.82759}
                        cy={52.5861}
                        r={6.82759}
                        fill="var(--primary)"
                        fillOpacity={0.44}
                      />
                      <circle
                        cx={6.82759}
                        cy={67.7586}
                        r={6.82759}
                        fill="var(--primary)"
                        fillOpacity={0.44}
                      />
                      <circle
                        cx={6.82759}
                        cy={82.931}
                        r={6.82759}
                        fill="var(--primary)"
                        fillOpacity={0.44}
                      />
                      <circle
                        cx={22}
                        cy={7.06892}
                        r={6.82759}
                        fill="var(--primary)"
                        fillOpacity={0.44}
                      />
                      <circle
                        cx={22}
                        cy={22.2413}
                        r={6.82759}
                        fill="var(--primary)"
                        fillOpacity={0.44}
                      />
                      <circle
                        cx={22}
                        cy={37.4138}
                        r={6.82759}
                        fill="var(--primary)"
                        fillOpacity={0.44}
                      />
                      <circle
                        cx={22}
                        cy={52.5861}
                        r={6.82759}
                        fill="var(--primary)"
                        fillOpacity={0.44}
                      />
                      <circle
                        cx={22}
                        cy={67.7586}
                        r={6.82759}
                        fill="var(--primary)"
                        fillOpacity={0.44}
                      />
                      <circle
                        cx={22}
                        cy={82.931}
                        r={6.82759}
                        fill="var(--primary)"
                        fillOpacity={0.44}
                      />
                      <circle
                        cx={37.1723}
                        cy={7.06892}
                        r={6.82759}
                        fill="var(--primary)"
                        fillOpacity={0.44}
                      />
                      <circle
                        cx={37.1723}
                        cy={22.2413}
                        r={6.82759}
                        fill="var(--primary)"
                        fillOpacity={0.44}
                      />
                      <circle
                        cx={36.8276}
                        cy={37.0689}
                        r={6.82759}
                        fill="var(--primary)"
                        fillOpacity={0.44}
                      />
                      <circle
                        cx={37.1723}
                        cy={52.5861}
                        r={6.82759}
                        fill="var(--primary)"
                        fillOpacity={0.44}
                      />
                      <circle
                        cx={37.1723}
                        cy={67.7586}
                        r={6.82759}
                        fill="var(--primary)"
                        fillOpacity={0.44}
                      />
                      <circle
                        cx={37.1723}
                        cy={82.931}
                        r={6.82759}
                        fill="var(--primary)"
                        fillOpacity={0.44}
                      />
                    </svg>
                  </div>
                  <div className="max-w-[800px] w-full grid grid-cols-[213px_213px_213px] gap-x-[10px] gap-y-[30px] justify-center">
                    {/* Schedule Process Card Component */}
                    <ScheduleSessionProcessCard
                      svgCode={1}
                      title="Personalised Therapist Matching"
                      text="Easily find a therapist who resonates with your needs and preferences, enhancing your therapeutic journey."
                    />
                    <ScheduleSessionProcessCard
                      svgCode={2}
                      title="Accessible Anytime, Anywhere"
                      text="Connect with licensed therapists from the comfort of your home or on the go, ensuring support is always within reach."
                    />
                    <ScheduleSessionProcessCard
                      svgCode={3}
                      title="Advanced Filtering Options"
                      text="Refine your search based on specialty, availability, and therapy methods to find the perfect fit for your personal growth."
                    />
                    <ScheduleSessionProcessCard
                      svgCode={4}
                      title="Flexible Scheduling"
                      text="Choose appointment times that fit your lifestyle, making mental health support convenient and adaptable."
                    />
                    <ScheduleSessionProcessCard
                      svgCode={5}
                      title="Secure and Confidential"
                      text="Your privacy is our priority. All communications are secure, ensuring a safe space for your discussions."
                    />
                    <ScheduleSessionProcessCard
                      svgCode={6}
                      title="Supportive Community Access"
                      text="Join a network of individuals on similar journeys, fostering connection and understanding in your healing process."
                    />
                  </div>
                </div>
                <svg
                  width={260}
                  height={248}
                  viewBox="0 0 260 248"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-[0px] bottom-[0px] z-[-1]"
                >
                  <path
                    opacity={0.5}
                    d="M260.005 175.5C260.005 272.426 181.431 351 84.5052 351C-12.4207 351 -90.9948 272.426 -90.9948 175.5C-90.9948 78.574 -12.4207 0 84.5052 0C181.431 0 260.005 78.574 260.005 175.5ZM-32.8091 175.5C-32.8091 240.291 19.7143 292.814 84.5052 292.814C149.296 292.814 201.82 240.291 201.82 175.5C201.82 110.709 149.296 58.1857 84.5052 58.1857C19.7143 58.1857 -32.8091 110.709 -32.8091 175.5Z"
                    fill="var(--primary)"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Discover Your Ideal Therapist Today Section */}
        <section className="flex justify-center">
          <div className="max-w-[1591px] w-full flex justify-center py-[143px]">
            <div className="relative max-w-[1196px] w-full flex rounded-[20px] bg-[var(--secondary)] text-[var(--text-light)] min-h-[503px] z-[-1]">
              <div className="pt-[35px] pl-[44px]">
                <span className="text-[14px]/[35px] font-medium block">
                  Effortlessly connect with licensed professionals
                </span>
                <h4 className="text-[40px]/[40px] font-bold max-w-[616px] mt-[-8px]">
                  Discover Your Ideal Therapist Today
                </h4>
                <p className="text-[14px]/[35px] font-medium block">
                  Embrace Your Mental Wellness Journey with personalized support
                </p>
                <button className="mt-[20px] text-[11px]/[35px] font-semibold flex items-center justify-center w-[197px] h-[41px] rounded-[7px] bg-[var(--primary)]">
                  Begin Your Healing Experience
                </button>
              </div>
              <div className="absolute left-[604px] bottom-[0px]">
                <div className="relative w-[452px] h-[729px] bg-contain bg-no-repeat bg-center bg-[url(/images/ideal-therapist-schedule-session-page.webp)] overflow-y-clip">
                  <svg
                    width={351}
                    height={352}
                    viewBox="0 0 351 352"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-[-22px] bottom-[-5px] z-[-1]"
                  >
                    <path
                      opacity={0.5}
                      d="M351 176.429C351 273.355 272.426 351.929 175.5 351.929C78.574 351.929 0 273.355 0 176.429C0 79.5029 78.574 0.928833 175.5 0.928833C272.426 0.928833 351 79.5029 351 176.429ZM58.1857 176.429C58.1857 241.22 110.709 293.743 175.5 293.743C240.291 293.743 292.814 241.22 292.814 176.429C292.814 111.638 240.291 59.1145 175.5 59.1145C110.709 59.1145 58.1857 111.638 58.1857 176.429Z"
                      fill="var(--primary)"
                    />
                  </svg>
                  <svg
                    width={102}
                    height={101}
                    viewBox="0 0 102 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-[26px] bottom-[374px] z-[-1]"
                  >
                    <ellipse
                      cx={7.93508}
                      cy={7.70339}
                      rx={7.93508}
                      ry={7.70339}
                      fill="var(--primary)"
                      fillOpacity={0.4}
                    />
                    <ellipse
                      cx={7.93508}
                      cy={24.822}
                      rx={7.93508}
                      ry={7.70339}
                      fill="var(--primary)"
                      fillOpacity={0.4}
                    />
                    <ellipse
                      cx={7.93508}
                      cy={41.9407}
                      rx={7.93508}
                      ry={7.70339}
                      fill="var(--primary)"
                      fillOpacity={0.4}
                    />
                    <ellipse
                      cx={7.93508}
                      cy={59.0593}
                      rx={7.93508}
                      ry={7.70339}
                      fill="var(--primary)"
                      fillOpacity={0.4}
                    />
                    <ellipse
                      cx={7.93508}
                      cy={76.178}
                      rx={7.93508}
                      ry={7.70339}
                      fill="var(--primary)"
                      fillOpacity={0.4}
                    />
                    <ellipse
                      cx={7.93508}
                      cy={93.2967}
                      rx={7.93508}
                      ry={7.70339}
                      fill="var(--primary)"
                      fillOpacity={0.4}
                    />
                    <ellipse
                      cx={25.5686}
                      cy={7.70339}
                      rx={7.93508}
                      ry={7.70339}
                      fill="var(--primary)"
                      fillOpacity={0.4}
                    />
                    <ellipse
                      cx={25.5686}
                      cy={24.822}
                      rx={7.93508}
                      ry={7.70339}
                      fill="var(--primary)"
                      fillOpacity={0.4}
                    />
                    <ellipse
                      cx={25.5686}
                      cy={41.9407}
                      rx={7.93508}
                      ry={7.70339}
                      fill="var(--primary)"
                      fillOpacity={0.4}
                    />
                    <ellipse
                      cx={25.5686}
                      cy={59.0593}
                      rx={7.93508}
                      ry={7.70339}
                      fill="var(--primary)"
                      fillOpacity={0.4}
                    />
                    <ellipse
                      cx={25.5686}
                      cy={76.178}
                      rx={7.93508}
                      ry={7.70339}
                      fill="var(--primary)"
                      fillOpacity={0.4}
                    />
                    <ellipse
                      cx={25.5686}
                      cy={93.2967}
                      rx={7.93508}
                      ry={7.70339}
                      fill="var(--primary)"
                      fillOpacity={0.4}
                    />
                    <ellipse
                      cx={43.2019}
                      cy={7.70339}
                      rx={7.93508}
                      ry={7.70339}
                      fill="var(--primary)"
                      fillOpacity={0.4}
                    />
                    <ellipse
                      cx={43.2019}
                      cy={24.822}
                      rx={7.93508}
                      ry={7.70339}
                      fill="var(--primary)"
                      fillOpacity={0.4}
                    />
                    <ellipse
                      cx={42.8013}
                      cy={41.5517}
                      rx={7.93508}
                      ry={7.70339}
                      fill="var(--primary)"
                      fillOpacity={0.4}
                    />
                    <ellipse
                      cx={43.2019}
                      cy={59.0593}
                      rx={7.93508}
                      ry={7.70339}
                      fill="var(--primary)"
                      fillOpacity={0.4}
                    />
                    <ellipse
                      cx={43.2019}
                      cy={76.178}
                      rx={7.93508}
                      ry={7.70339}
                      fill="var(--primary)"
                      fillOpacity={0.4}
                    />
                    <ellipse
                      cx={43.2019}
                      cy={93.2967}
                      rx={7.93508}
                      ry={7.70339}
                      fill="var(--primary)"
                      fillOpacity={0.4}
                    />
                    <ellipse
                      cx={58.7981}
                      cy={7.70339}
                      rx={7.93508}
                      ry={7.70339}
                      fill="var(--primary)"
                      fillOpacity={0.4}
                    />
                    <ellipse
                      cx={58.7981}
                      cy={24.822}
                      rx={7.93508}
                      ry={7.70339}
                      fill="var(--primary)"
                      fillOpacity={0.4}
                    />
                    <ellipse
                      cx={58.7981}
                      cy={41.9407}
                      rx={7.93508}
                      ry={7.70339}
                      fill="var(--primary)"
                      fillOpacity={0.4}
                    />
                    <ellipse
                      cx={58.7981}
                      cy={59.0593}
                      rx={7.93508}
                      ry={7.70339}
                      fill="var(--primary)"
                      fillOpacity={0.4}
                    />
                    <ellipse
                      cx={58.7981}
                      cy={76.178}
                      rx={7.93508}
                      ry={7.70339}
                      fill="var(--primary)"
                      fillOpacity={0.4}
                    />
                    <ellipse
                      cx={58.7981}
                      cy={93.2967}
                      rx={7.93508}
                      ry={7.70339}
                      fill="var(--primary)"
                      fillOpacity={0.4}
                    />
                    <ellipse
                      cx={76.4317}
                      cy={7.70339}
                      rx={7.93508}
                      ry={7.70339}
                      fill="var(--primary)"
                      fillOpacity={0.4}
                    />
                    <ellipse
                      cx={76.4317}
                      cy={24.822}
                      rx={7.93508}
                      ry={7.70339}
                      fill="var(--primary)"
                      fillOpacity={0.4}
                    />
                    <ellipse
                      cx={76.4317}
                      cy={41.9407}
                      rx={7.93508}
                      ry={7.70339}
                      fill="var(--primary)"
                      fillOpacity={0.4}
                    />
                    <ellipse
                      cx={76.4317}
                      cy={59.0593}
                      rx={7.93508}
                      ry={7.70339}
                      fill="var(--primary)"
                      fillOpacity={0.4}
                    />
                    <ellipse
                      cx={76.4317}
                      cy={76.178}
                      rx={7.93508}
                      ry={7.70339}
                      fill="var(--primary)"
                      fillOpacity={0.4}
                    />
                    <ellipse
                      cx={76.4317}
                      cy={93.2967}
                      rx={7.93508}
                      ry={7.70339}
                      fill="var(--primary)"
                      fillOpacity={0.4}
                    />
                    <ellipse
                      cx={94.065}
                      cy={7.70339}
                      rx={7.93508}
                      ry={7.70339}
                      fill="var(--primary)"
                      fillOpacity={0.4}
                    />
                    <ellipse
                      cx={94.065}
                      cy={24.822}
                      rx={7.93508}
                      ry={7.70339}
                      fill="var(--primary)"
                      fillOpacity={0.4}
                    />
                    <ellipse
                      cx={93.6643}
                      cy={41.5517}
                      rx={7.93508}
                      ry={7.70339}
                      fill="var(--primary)"
                      fillOpacity={0.4}
                    />
                    <ellipse
                      cx={94.065}
                      cy={59.0593}
                      rx={7.93508}
                      ry={7.70339}
                      fill="var(--primary)"
                      fillOpacity={0.4}
                    />
                    <ellipse
                      cx={94.065}
                      cy={76.178}
                      rx={7.93508}
                      ry={7.70339}
                      fill="var(--primary)"
                      fillOpacity={0.4}
                    />
                    <ellipse
                      cx={94.065}
                      cy={93.2967}
                      rx={7.93508}
                      ry={7.70339}
                      fill="var(--primary)"
                      fillOpacity={0.4}
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Connect with Your Ideal Therapist Instantly Section */}
        <section className="flex justify-center bg-[var(--primary)]">
          <div className="relative max-w-[1700px] w-full flex justify-center z-[0]">
            <div className="max-w-[1591px] w-full flex justify-center">
              <div className="max-w-[1301px] w-full flex flex-col gap-y-[41px] items-center pt-[34px] pb-[94px]">
                <div className="max-w-[1195px] w-full flex">
                  <div className="max-w-[1137px] w-full">
                    <div className="text-[var(--text-light)] flex flex-col gap-y-[8px]">
                      <span className="text-[14px]/[35px] font-medium">
                        Easily Schedule Your Therapy Sessions
                      </span>
                      <h4 className="text-[40px]/[35px] font-semibold">
                        Connect with Your Ideal Therapist Instantly
                      </h4>
                      <p className="text-[14px]/[25px] font-medium">
                        The "Schedule Sessions" page is meticulously crafted to
                        facilitate your journey toward mental wellness. Our
                        intuitive platform enables you to seamlessly discover
                        and filter through a diverse range of licensed
                        therapists who are ready to support your unique
                        emotional needs. With user-friendly navigation, you can
                        effortlessly arrange appointments tailored to your
                        schedule, ensuring that the assistance you seek is
                        always accessible in a warm and secure environment.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full flex items-center justify-between">
                  {/* Schedule Image Card Component */}
                  <ScheduleSessionImageCard
                    imgCode={1}
                    title="Nurture Your Mental Health Journey"
                    text="Expert Guidance and Support at Your Fingertips"
                  />
                  <ScheduleSessionImageCard
                    imgCode={2}
                    title="Explore Diverse Therapist Options"
                    text="Tailored Matches for Your Unique Needs"
                  />
                  <ScheduleSessionImageCard
                    imgCode={3}
                    title="Book Appointments with Confidence"
                    text="Your Safe Space for Mental Wellness"
                  />
                </div>
              </div>
            </div>
            <svg
              width={173}
              height={220}
              viewBox="0 0 173 220"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-[0px] left-[0px] z-[-1]"
            >
              <path
                opacity={0.5}
                d="M173 75.5C173 155.305 108.305 220 28.5 220C-51.3051 220 -116 155.305 -116 75.5C-116 -4.30515 -51.3051 -69 28.5 -69C108.305 -69 173 -4.30515 173 75.5ZM-66.6303 75.5C-66.6303 128.039 -24.039 170.63 28.5 170.63C81.039 170.63 123.63 128.039 123.63 75.5C123.63 22.961 81.039 -19.6303 28.5 -19.6303C-24.039 -19.6303 -66.6303 22.961 -66.6303 75.5Z"
                fill="var(--secondary)"
              />
            </svg>
            <svg
              width={121}
              height={289}
              viewBox="0 0 121 289"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-[400px] right-[0px] z-[-1]"
            >
              <path
                opacity={0.5}
                d="M289 144.5C289 224.305 224.305 289 144.5 289C64.6949 289 0 224.305 0 144.5C0 64.6949 64.6949 0 144.5 0C224.305 0 289 64.6949 289 144.5ZM49.3697 144.5C49.3697 197.039 91.961 239.63 144.5 239.63C197.039 239.63 239.63 197.039 239.63 144.5C239.63 91.961 197.039 49.3697 144.5 49.3697C91.961 49.3697 49.3697 91.961 49.3697 144.5Z"
                fill="var(--secondary)"
              />
            </svg>
          </div>
        </section>

        {/* Client Testimonials Section */}
        <section className="flex justify-center">
          <div className="max-w-[1591px] w-full flex justify-center">
            <div className="max-w-[1334px] w-full flex flex-col items-center pt-[70px] pb-[37px]">
              <div className="flex flex-col items-center justify-center text-[var(--text-dark)] h-[121px]">
                <h4 className="text-[40px]/[35px] font-semibold">
                  Client Testimonials
                </h4>
                <p className="text-[14px]/[35px] font-medium">
                  Experience transformed mental wellness through Therapia.
                </p>
              </div>
              <div className="relative w-full mt-[16px]">
                <div className="w-full bg-[var(--background-base)] rounded-[15px] shadow-[0_6px_4px_0_rgba(0,0,0,0.25)]">
                  <div className="flex justify-between pt-[39px] pb-[33px] pl-[133px] pr-[84px]">
                    <div className="relative z-0">
                      <div className="w-[335px] h-[298px] bg-contain bg-no-repeat bg-center bg-[url(/images/testimonial-image-schedule-session-page.webp)]"></div>
                      <svg
                        width={335}
                        height={298}
                        viewBox="0 0 335 298"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-[-18px] left-[-18px] z-[-1]"
                      >
                        <path
                          d="M0.499878 10C0.499878 4.7533 4.75317 0.5 9.99988 0.5H334.5V297.5H0.499878V10Z"
                          stroke="var(--text-dark)"
                        />
                      </svg>
                      <svg
                        width={319}
                        height={312}
                        viewBox="0 0 319 312"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-[0px] left-[44px] z-[-1]"
                      >
                        <path
                          d="M0.499878 9.99999C0.499878 4.75329 4.75317 0.5 9.99988 0.5H318.5V311.5H0.499878V9.99999Z"
                          stroke="var(--text-dark)"
                        />
                      </svg>
                    </div>
                    <div className="mt-[96px] flex flex-col gap-y-[10px] max-w-[686px] text-[var(--text-dark)]">
                      <h5 className="text-[24px]/[35px] font-semibold">
                        A Life-Changing Experience
                      </h5>
                      <p className="text-[14px]/[15px]">
                        "Thanks to Therapia, I found the support I needed in a
                        therapist who truly understands my journey. The platform
                        made it effortless to connect and schedule sessions that
                        fit my life!"
                      </p>
                      <span className="text-[14px]/[15px] font-semibold">
                        - Emily Carter
                      </span>
                    </div>
                  </div>
                </div>
                <svg
                  width={54}
                  height={43}
                  viewBox="0 0 54 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[-20px] left-[12px] z-[-1]"
                >
                  <path
                    d="M51.6874 0.3125V3.375C47.354 4.95833 43.9582 7.45833 41.4999 10.875C39.0415 14.25 37.8124 17.7708 37.8124 21.4375C37.8124 22.2292 37.9374 22.8125 38.1874 23.1875C38.354 23.4375 38.5415 23.5625 38.7499 23.5625C38.9582 23.5625 39.2707 23.4167 39.6874 23.125C41.0207 22.1667 42.7082 21.6875 44.7499 21.6875C47.1249 21.6875 49.229 22.6667 51.0624 24.625C52.8957 26.5417 53.8124 28.8333 53.8124 31.5C53.8124 34.2917 52.7499 36.75 50.6249 38.875C48.5415 41 45.9999 42.0625 42.9999 42.0625C39.4999 42.0625 36.479 40.625 33.9374 37.75C31.3957 34.875 30.1249 31.0208 30.1249 26.1875C30.1249 20.5625 31.854 15.5208 35.3124 11.0625C38.7707 6.60417 44.229 3.02083 51.6874 0.3125ZM21.6249 0.3125V3.375C17.2915 4.95833 13.8957 7.45833 11.4374 10.875C8.97904 14.25 7.74988 17.7708 7.74988 21.4375C7.74988 22.2292 7.87488 22.8125 8.12488 23.1875C8.29154 23.4375 8.47904 23.5625 8.68738 23.5625C8.89571 23.5625 9.20821 23.4167 9.62488 23.125C10.9582 22.1667 12.6457 21.6875 14.6874 21.6875C17.0624 21.6875 19.1665 22.6667 20.9999 24.625C22.8332 26.5417 23.7499 28.8333 23.7499 31.5C23.7499 34.2917 22.6874 36.75 20.5624 38.875C18.479 41 15.9374 42.0625 12.9374 42.0625C9.43738 42.0625 6.41654 40.625 3.87488 37.75C1.33321 34.875 0.0623779 31.0208 0.0623779 26.1875C0.0623779 20.5625 1.79154 15.5208 5.24988 11.0625C8.70821 6.60417 14.1665 3.02083 21.6249 0.3125Z"
                    fill="var(--primary)"
                  />
                </svg>
                <svg
                  width={54}
                  height={43}
                  viewBox="0 0 54 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute bottom-[-14px] right-[-8px]"
                >
                  <path
                    d="M2.3125 0.3125V3.375C6.64583 4.95833 10.0417 7.45833 12.5 10.875C14.9583 14.25 16.1875 17.7708 16.1875 21.4375C16.1875 22.2292 16.0625 22.8125 15.8125 23.1875C15.6458 23.4375 15.4583 23.5625 15.25 23.5625C15.0417 23.5625 14.7292 23.4167 14.3125 23.125C12.9792 22.1667 11.2917 21.6875 9.25 21.6875C6.875 21.6875 4.77083 22.6667 2.9375 24.625C1.10417 26.5417 0.1875 28.8333 0.1875 31.5C0.1875 34.2917 1.25 36.75 3.375 38.875C5.45833 41 8 42.0625 11 42.0625C14.5 42.0625 17.5208 40.625 20.0625 37.75C22.6042 34.875 23.875 31.0208 23.875 26.1875C23.875 20.5625 22.1458 15.5208 18.6875 11.0625C15.2292 6.60417 9.77083 3.02083 2.3125 0.3125ZM32.375 0.3125V3.375C36.7083 4.95833 40.1042 7.45833 42.5625 10.875C45.0208 14.25 46.25 17.7708 46.25 21.4375C46.25 22.2292 46.125 22.8125 45.875 23.1875C45.7083 23.4375 45.5208 23.5625 45.3125 23.5625C45.1042 23.5625 44.7917 23.4167 44.375 23.125C43.0417 22.1667 41.3542 21.6875 39.3125 21.6875C36.9375 21.6875 34.8333 22.6667 33 24.625C31.1667 26.5417 30.25 28.8333 30.25 31.5C30.25 34.2917 31.3125 36.75 33.4375 38.875C35.5208 41 38.0625 42.0625 41.0625 42.0625C44.5625 42.0625 47.5833 40.625 50.125 37.75C52.6667 34.875 53.9375 31.0208 53.9375 26.1875C53.9375 20.5625 52.2083 15.5208 48.75 11.0625C45.2917 6.60417 39.8333 3.02083 32.375 0.3125Z"
                    fill="var(--primary)"
                  />
                </svg>
                <div className="absolute top-[-15px] w-[1334px] h-[370px] rotate-[-3deg] bg-[var(--primary)] rounded-[15px] z-[-4]"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Connect with a Therapist Section */}
        <section className="flex justify-center">
          <div className="max-w-[1591px] w-full flex justify-center">
            <div className="mt-[53px] mb-[112px] max-w-[1261px] w-full flex justify-center gap-x-[28px] py-[30px] rounded-[20px] shadow-[0_0_8px_0_rgba(0,0,0,0.25)]">
              <div className="max-w-[508px] flex flex-col gap-y-[21px] bg-[var(--primary)] rounded-[20px] pt-[31px] pb-[51px] pl-[24px] text-[var(--text-light)]">
                <span className="text-[24px]/[35px] font-medium">
                  Connect with a Therapist
                </span>
                <div>
                  <svg
                    width={28}
                    height={25}
                    viewBox="0 0 28 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline mt-[-14px]"
                  >
                    <path
                      d="M1.54263 23.2917L0.108881 22.7213C0.00643603 22.9791 -0.0245685 23.2597 0.0191353 23.5336C0.0628392 23.8075 0.179633 24.0646 0.357204 24.2777C0.534776 24.4908 0.766546 24.652 1.02809 24.7444C1.28963 24.8368 1.57124 24.8569 1.84326 24.8026L1.54263 23.2917ZM8.79772 21.8487L9.52846 20.4905L9.03976 20.2285L8.49709 20.3364L8.79772 21.8487ZM4.0463 16.9971L5.48005 17.5675L5.73134 16.9293L5.42917 16.3142L4.0463 16.9971ZM24.6676 12.5001C24.6676 17.5043 20.2693 21.7501 14.6005 21.7501V24.8334C21.7554 24.8334 27.751 19.416 27.751 12.5001H24.6676ZM4.53501 12.5001C4.53501 7.49583 8.93492 3.25008 14.6021 3.25008V0.166748C7.44721 0.166748 1.45013 5.58417 1.45013 12.5001H4.53501ZM14.6021 3.25008C20.2693 3.25008 24.6676 7.49583 24.6676 12.5001H27.751C27.751 5.58417 21.757 0.166748 14.6021 0.166748V3.25008ZM14.6005 21.7501C12.7428 21.7501 11.0131 21.2876 9.52846 20.4905L8.06697 23.2054C10.0763 24.2826 12.3208 24.8421 14.6005 24.8334V21.7501ZM1.84326 24.8026L9.09834 23.3596L8.49709 20.3364L1.24201 21.7794L1.84326 24.8041V24.8026ZM5.42917 16.3142C4.84226 15.1282 4.53734 13.8233 4.53501 12.5001H1.45013C1.45013 14.3501 1.88488 16.1045 2.66188 17.6801L5.42917 16.3142ZM2.61409 16.4267L0.108881 22.7229L2.9733 23.8606L5.47696 17.566L2.61255 16.4267H2.61409Z"
                      fill="var(--text-light)"
                    />
                    <path
                      d="M9.25102 14.0418C10.1025 14.0418 10.7927 13.3516 10.7927 12.5002C10.7927 11.6487 10.1025 10.9585 9.25102 10.9585C8.39958 10.9585 7.70935 11.6487 7.70935 12.5002C7.70935 13.3516 8.39958 14.0418 9.25102 14.0418Z"
                      fill="var(--text-light)"
                    />
                    <path
                      d="M14.6468 14.0418C15.4982 14.0418 16.1884 13.3516 16.1884 12.5002C16.1884 11.6487 15.4982 10.9585 14.6468 10.9585C13.7953 10.9585 13.1051 11.6487 13.1051 12.5002C13.1051 13.3516 13.7953 14.0418 14.6468 14.0418Z"
                      fill="var(--text-light)"
                    />
                    <path
                      d="M20.0426 14.0418C20.8941 14.0418 21.5843 13.3516 21.5843 12.5002C21.5843 11.6487 20.8941 10.9585 20.0426 10.9585C19.1912 10.9585 18.501 11.6487 18.501 12.5002C18.501 13.3516 19.1912 14.0418 20.0426 14.0418Z"
                      fill="var(--text-light)"
                    />
                  </svg>
                  <h4 className="text-[32px]/[35px] font-semibold inline">
                    Connect with a Therapist Who Understands You
                  </h4>
                </div>
                <div className="flex items-center gap-x-[2px]">
                  <svg
                    width={40}
                    height={40}
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.9999 21.6665C22.7613 21.6665 24.9999 19.4279 24.9999 16.6665C24.9999 13.9051 22.7613 11.6665 19.9999 11.6665C17.2385 11.6665 14.9999 13.9051 14.9999 16.6665C14.9999 19.4279 17.2385 21.6665 19.9999 21.6665Z"
                      stroke="var(--text-light)"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19.9998 3.33325C16.4636 3.33325 13.0722 4.73801 10.5717 7.23849C8.07126 9.73898 6.6665 13.1304 6.6665 16.6666C6.6665 19.8199 7.3365 21.8833 9.1665 24.1666L19.9998 36.6666L30.8332 24.1666C32.6632 21.8833 33.3332 19.8199 33.3332 16.6666C33.3332 13.1304 31.9284 9.73898 29.4279 7.23849C26.9274 4.73801 23.5361 3.33325 19.9998 3.33325Z"
                      stroke="var(--text-light)"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div>
                    <h6 className="text-[17px]/[35px] font-medium">
                      Our office
                    </h6>
                    <span className="text-[11px]/[30px] mt-[-15px] block">
                      Boulder, Colorado
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-x-[2px]">
                  <svg
                    width={40}
                    height={40}
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.99988 11.6666C4.99988 10.7825 5.35107 9.93468 5.97619 9.30956C6.60131 8.68444 7.44916 8.33325 8.33321 8.33325H31.6665C32.5506 8.33325 33.3984 8.68444 34.0236 9.30956C34.6487 9.93468 34.9999 10.7825 34.9999 11.6666V28.3333C34.9999 29.2173 34.6487 30.0652 34.0236 30.6903C33.3984 31.3154 32.5506 31.6666 31.6665 31.6666H8.33321C7.44916 31.6666 6.60131 31.3154 5.97619 30.6903C5.35107 30.0652 4.99988 29.2173 4.99988 28.3333V11.6666Z"
                      stroke="var(--text-light)"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.99988 11.6665L19.9999 21.6665L34.9999 11.6665"
                      stroke="var(--text-light)"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div>
                    <h6 className="text-[17px]/[35px] font-medium">
                      Contact Us Via Email
                    </h6>
                    <span className="text-[11px]/[30px] mt-[-15px] block">
                      info@aspensites.com
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-x-[2px]">
                  <svg
                    width={40}
                    height={40}
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.3142 3.77863L13.6856 3.06434C14.7651 2.73866 15.9263 2.81696 16.9523 3.28462C17.9783 3.75228 18.799 4.57733 19.2613 5.60577L20.7371 8.88863C21.1347 9.773 21.2455 10.7597 21.0538 11.7102C20.8622 12.6607 20.3777 13.5274 19.6685 14.1886L17.0899 16.5929C17.0591 16.6236 17.033 16.6587 17.0128 16.6972C16.7428 17.2486 17.1528 18.7215 18.4371 20.9472C19.8856 23.4558 21.0042 24.4472 21.5228 24.2943L24.907 23.2586C25.8339 22.9756 26.826 22.9897 27.7445 23.2989C28.6629 23.6081 29.4615 24.197 30.0285 24.9829L32.1256 27.8872C32.784 28.7991 33.089 29.919 32.9839 31.0389C32.8788 32.1587 32.3708 33.2023 31.5542 33.9758L29.7499 35.6829C29.1225 36.2772 28.3606 36.7109 27.5292 36.947C26.6979 37.1831 25.8218 37.2145 24.9756 37.0386C19.9513 35.9929 15.4499 31.9472 11.4328 24.9901C7.41419 18.0286 6.16134 12.1001 7.77562 7.22434C8.04585 6.40806 8.50858 5.66882 9.12473 5.06908C9.74089 4.46934 10.4909 4.02672 11.3142 3.77863ZM11.9356 5.83006C11.4416 5.97884 10.9907 6.24435 10.621 6.60415C10.2512 6.96394 9.97354 7.40745 9.81134 7.8972C8.41991 12.0986 9.54705 17.4358 13.2899 23.9186C17.0299 30.3972 21.0842 34.0401 25.4142 34.9401C25.9219 35.0454 26.4476 35.0264 26.9463 34.8846C27.4451 34.7428 27.9021 34.4825 28.2785 34.1258L30.0813 32.4201C30.5212 32.0037 30.7949 31.4418 30.8517 30.8388C30.9084 30.2357 30.7444 29.6326 30.3899 29.1415L28.2928 26.2358C27.9875 25.8127 27.5576 25.4956 27.0632 25.3291C26.5688 25.1626 26.0346 25.1549 25.5356 25.3072L22.1428 26.3458C20.2656 26.9043 18.4999 25.3401 16.5828 22.0172C14.9585 19.2058 14.3956 17.1743 15.0899 15.7558C15.2251 15.4796 15.4051 15.2362 15.6299 15.0258L18.2085 12.6215C18.5905 12.2655 18.8515 11.7987 18.9548 11.2868C19.058 10.7749 18.9984 10.2435 18.7842 9.7672L17.307 6.48577C17.0581 5.93186 16.6161 5.48748 16.0635 5.23564C15.5109 4.98379 14.8856 4.94169 14.3042 5.1172L11.9356 5.83006Z"
                      fill="var(--text-light)"
                    />
                  </svg>
                  <div>
                    <h6 className="text-[17px]/[35px] font-medium">Call Us</h6>
                    <span className="text-[11px]/[30px] mt-[-15px] block">
                      (720) 588-8452
                    </span>
                  </div>
                </div>
              </div>
              <div className="max-w-[665px] w-full">
                <form
                  action=""
                  className="flex flex-col gap-y-[22px]"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Full name"
                    className="text-[17px]/[35px] text-[var(--text-dark)] font-medium placeholder-[var(--text-dark)] px-[19px] py-[10px] outline-[2px] outline-[var(--primary)] rounded-[10px]"
                  />
                  <div className="flex items-center justify-between">
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="E-mail"
                      className="text-[17px]/[35px] text-[var(--text-dark)] font-medium placeholder-[var(--text-dark)] px-[19px] py-[10px] outline-[2px] outline-[var(--primary)] rounded-[10px] max-w-[379px] w-full"
                    />
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Phone Number"
                      className="text-[17px]/[35px] text-[var(--text-dark)] font-medium placeholder-[var(--text-dark)] px-[19px] py-[10px] outline-[2px] outline-[var(--primary)] rounded-[10px] max-w-[266px] w-full"
                    />
                  </div>
                  <textarea
                    name=""
                    id=""
                    placeholder="Your Message"
                    className="h-[190px] resize-none text-[17px]/[35px] text-[var(--text-dark)] font-medium placeholder-[var(--text-dark)] px-[19px] py-[10px] outline-[2px] outline-[var(--primary)] rounded-[10px]"
                  ></textarea>
                  <button className="text-[17px]/[35px] text-[var(--text-light)] font-[800] bg-[var(--primary)] py-[10px] rounded-[10px]">
                    Seamlessly Schedule Your Therapy Session
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
