export default function ProcessCard({ title, text, svgCode }) {
  return (
    <div className="flex flex-col items-center gap-y-[6px] md:min-h-auto sm:min-h-[143px]">
      <div className="w-[50px] h-[50px] flex items-center justify-center rounded-[50%] outline-[1px] outline-[#DBEAFE] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] ">
        {svgCode === 1 ? (
          <svg
            width={25}
            height={25}
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.1759 21.9696V19.9702C16.1759 18.9097 15.7546 17.8925 15.0047 17.1426C14.2547 16.3927 13.2376 15.9714 12.1771 15.9714H6.1788C5.11825 15.9714 4.10112 16.3927 3.3512 17.1426C2.60127 17.8925 2.17996 18.9097 2.17996 19.9702V21.9696"
              stroke="#8FAA0D"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.17795 11.9725C11.3865 11.9725 13.1768 10.1822 13.1768 7.9737C13.1768 5.7652 11.3865 3.97485 9.17795 3.97485C6.96945 3.97485 5.17911 5.7652 5.17911 7.9737C5.17911 10.1822 6.96945 11.9725 9.17795 11.9725Z"
              stroke="#8FAA0D"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.175 8.97339V14.9717"
              stroke="#8FAA0D"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.1742 11.9725H16.1759"
              stroke="#8FAA0D"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : null}
        {svgCode === 2 ? (
          <svg
            width={25}
            height={25}
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.5781 20.9699V10.9728"
              stroke="#8FAA0D"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.5799 20.9699V4.97455"
              stroke="#8FAA0D"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.5816 20.9699V14.9717"
              stroke="#8FAA0D"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : null}
        {svgCode === 3 ? (
          <svg
            width={25}
            height={25}
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.98383 2.97516V6.974"
              stroke="#8FAA0D"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.9815 2.97516V6.974"
              stroke="#8FAA0D"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.9807 4.97455H5.98471C4.88046 4.97455 3.98529 5.86972 3.98529 6.97397V20.9699C3.98529 22.0742 4.88046 22.9693 5.98471 22.9693H19.9807C21.0849 22.9693 21.9801 22.0742 21.9801 20.9699V6.97397C21.9801 5.86972 21.0849 4.97455 19.9807 4.97455Z"
              stroke="#8FAA0D"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.98529 10.9728H21.9801"
              stroke="#8FAA0D"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : null}
        {svgCode === 4 ? (
          <svg
            width={25}
            height={25}
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.4017 21.9696V19.9702C16.4017 18.9097 15.9804 17.8925 15.2305 17.1426C14.4805 16.3927 13.4634 15.9714 12.4029 15.9714H6.4046C5.34405 15.9714 4.32692 16.3927 3.577 17.1426C2.82707 17.8925 2.40576 18.9097 2.40576 19.9702V21.9696"
              stroke="#8FAA0D"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.40369 11.9725C11.6122 11.9725 13.4025 10.1822 13.4025 7.9737C13.4025 5.7652 11.6122 3.97485 9.40369 3.97485C7.19519 3.97485 5.40485 5.7652 5.40485 7.9737C5.40485 10.1822 7.19519 11.9725 9.40369 11.9725Z"
              stroke="#8FAA0D"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.4008 21.9696V19.9702C22.4002 19.0842 22.1052 18.2235 21.5622 17.5232C21.0192 16.823 20.2589 16.3228 19.4008 16.1013"
              stroke="#8FAA0D"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.4017 4.1048C17.2621 4.32503 18.0247 4.82529 18.5693 5.5267C19.1139 6.2281 19.4095 7.09076 19.4095 7.97868C19.4095 8.86659 19.1139 9.72925 18.5693 10.4307C18.0247 11.1321 17.2621 11.6323 16.4017 11.8526"
              stroke="#8FAA0D"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : null}
        {svgCode === 5 ? (
          <svg
            width={25}
            height={25}
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.8036 14.9717C21.2931 13.5121 22.8027 11.7626 22.8027 9.47326C22.8027 8.01499 22.2234 6.61645 21.1922 5.5853C20.1611 4.55415 18.7625 3.97485 17.3043 3.97485C15.5448 3.97485 14.3051 4.47471 12.8056 5.97427C11.306 4.47471 10.0664 3.97485 8.30688 3.97485C6.84861 3.97485 5.45007 4.55415 4.41892 5.5853C3.38777 6.61645 2.80847 8.01499 2.80847 9.47326C2.80847 11.7726 4.30804 13.5221 5.8076 14.9717L12.8056 21.9696L19.8036 14.9717Z"
              stroke="#8FAA0D"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : null}
      </div>
      <h6 className="mt-[6px] text-[13px]/[21px] text-[#8FAA0D] font-black">
        {title}
      </h6>
      <p className="text-[11px]/[18px] text-[#4B5563] text-center">{text}</p>
    </div>
  );
}
