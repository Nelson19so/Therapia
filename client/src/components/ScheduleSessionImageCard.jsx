import clsx from "clsx";

export default function ScheduleSessionImageCard({ title, text, imgCode }) {
  return (
    <div>
      <div
        className={clsx(
          "bg-cover bg-no-repeat bg-top w-[421px] h-[384px] rounded-t-[20px]",
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
        <p className="text-[12px]/[35px] mt-[-13px]">{text}</p>
      </div>
    </div>
  );
}
