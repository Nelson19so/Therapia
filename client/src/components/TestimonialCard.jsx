export default function TestimonialCard({ name, title, text }) {
  return (
    <div className="px-[17px] py-[23px] rounded-[6px] bg-[var(--primary)] w-full flex flex-col gap-y-[18px] md:min-h-[auto] min-h-[173px]">
      <div className="flex pl-[25px] gap-x-[15px] items-center">
        <div className="w-[37px] h-[37px] bg-[var(--neutral-light)] rounded-[50%]"></div>
        <div className="flex flex-col">
          <h6 className="text-[13px]/[18px] font-semibold text-[var(--text-light)]">{name}</h6>
          <span className="text-[9px]/[15px] text-[var(--accent-light)]">{title}</span>
        </div>
      </div>
      <p className="text-[11px]/[18px] text-[var(--accent-light)]">
        {text}
      </p>
    </div>
  );
}
