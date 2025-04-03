export default function TestimonialCard({ name, title, text }) {
  return (
    <div className="px-[17px] py-[23px] rounded-[6px] bg-[#8FAA0D] w-full flex flex-col gap-y-[18px]">
      <div className="flex pl-[25px] gap-x-[15px] items-center">
        <div className="w-[37px] h-[37px] bg-[#D9D9D9] rounded-[50%]"></div>
        <div className="flex flex-col">
          <h6 className="text-[13px]/[18px] font-semibold text-white">{name}</h6>
          <span className="text-[9px]/[15px] text-[#F5F3FF]">{title}</span>
        </div>
      </div>
      <p className="text-[11px]/[18px] text-[#F5F3FF]">
        {text}
      </p>
    </div>
  );
}
