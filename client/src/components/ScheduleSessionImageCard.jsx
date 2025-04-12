import clsx from "clsx";

export default function ScheduleSessionImageCard({ title, text, imgCode }) {
  return (
    <div className={clsx({"lg:col-span-1 md:col-span-2 2xl:w-[421px] xl:w-[384px] lg:w-[317px] md:w-[329px] sm:w-[600px] w-[300px] justify-self-end lg:mt-[0px] md:mt-[-300px]": imgCode === 2}, {"lg:mt-[0px] md:mt-[-100px]": imgCode === 3})}>
      <div
        className={clsx(
          "bg-cover bg-no-repeat bg-top w-full 2xl:h-[384px] xl:h-[350px] lg:h-[289px] md:h-[300px] sm:h-[547px] h-[273px] rounded-t-[20px]",
          {
            "bg-[url(/images/card-image-schedule-session-page-1.webp)]":
              imgCode === 1,
          },
          {
            "bg-[url(/images/card-image-schedule-session-page-2.webp)]":
              imgCode === 2,
          },
          {
            "bg-[url(/images/card-image-schedule-session-page-3.webp)]":
              imgCode === 3,
          }
        )}
      ></div>
      <div className="flex flex-col justify-center h-[88px] bg-[var(--background-base)] pl-[17px] text-[var(--text-dark)] rounded-b-[20px]">
        <h6 className="text-[14px]/[35px] font-bold">{title}</h6>
        <p className="sm:text-[12px]/[35px] text-[11px]/[35px] mt-[-13px]">{text}</p>
      </div>
    </div>
  );
}
