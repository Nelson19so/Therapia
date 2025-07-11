export default function FeatureCard({ title, text, svgCode }) {
  return (
    <div className="bg-[var(--primary)] rounded-[6px] p-[18px] flex flex-col gap-y-[6px] w-full">
      {svgCode === 1 ? (
        <svg
          width={31}
          height={30}
          viewBox="0 0 31 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.2122 18.7391C27.2122 19.4018 26.949 20.0373 26.4804 20.5059C26.0119 20.9744 25.3763 21.2377 24.7137 21.2377H9.72236L4.72525 26.2348V6.24636C4.72525 5.5837 4.98849 4.94818 5.45706 4.47961C5.92563 4.01104 6.56115 3.7478 7.2238 3.7478H24.7137C25.3763 3.7478 26.0119 4.01104 26.4804 4.47961C26.949 4.94818 27.2122 5.5837 27.2122 6.24636V18.7391Z"
            stroke="var(--text-light)"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : null}
      {svgCode === 2 ? (
        <svg
          width={31}
          height={30}
          viewBox="0 0 31 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.3021 24.9856V12.4928"
            stroke="var(--text-light)"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.7977 24.9856V4.99713"
            stroke="var(--text-light)"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.8064 24.9855V19.9884"
            stroke="var(--text-light)"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : null}
      {svgCode === 3 ? (
        <svg
          width={31}
          height={30}
          viewBox="0 0 31 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.3977 17.4898C26.2591 15.6659 28.1455 13.4797 28.1455 10.6188C28.1455 8.79652 27.4216 7.04884 26.133 5.76028C24.8445 4.47171 23.0968 3.7478 21.2745 3.7478C19.0758 3.7478 17.5267 4.37244 15.6527 6.24636C13.7788 4.37244 12.2297 3.7478 10.031 3.7478C8.20869 3.7478 6.46102 4.47171 5.17245 5.76028C3.88388 7.04884 3.15997 8.79652 3.15997 10.6188C3.15997 13.4922 5.03389 15.6784 6.9078 17.4898L15.6527 26.2348L24.3977 17.4898Z"
            stroke="var(--text-light)"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.6527 6.2464L11.9549 9.94426C11.701 10.1962 11.4996 10.496 11.3621 10.8262C11.2246 11.1563 11.1539 11.5105 11.1539 11.8681C11.1539 12.2258 11.2246 12.5799 11.3621 12.9101C11.4996 13.2403 11.701 13.54 11.9549 13.792C12.9793 14.8164 14.6158 14.8539 15.7027 13.8795L18.2887 11.5059C18.9369 10.9177 19.7808 10.5919 20.6561 10.5919C21.5314 10.5919 22.3753 10.9177 23.0235 11.5059L26.7213 14.8289"
            stroke="var(--text-light)"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23.1484 18.7392L20.6498 16.2406"
            stroke="var(--text-light)"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.4006 22.487L16.902 19.9884"
            stroke="var(--text-light)"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : null}
      {svgCode === 4 ? (
        <svg
          width={30}
          height={30}
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.9572 27.155V24.6564C20.9572 23.3311 20.4307 22.0601 19.4935 21.1229C18.5564 20.1858 17.2854 19.6593 15.9601 19.6593H8.46439C7.13908 19.6593 5.86804 20.1858 4.9309 21.1229C3.99376 22.0601 3.46729 23.3311 3.46729 24.6564V27.155"
            stroke="var(--text-light)"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.2122 14.6622C14.9721 14.6622 17.2093 12.4249 17.2093 9.66508C17.2093 6.90525 14.9721 4.66797 12.2122 4.66797C9.4524 4.66797 7.21512 6.90525 7.21512 9.66508C7.21512 12.4249 9.4524 14.6622 12.2122 14.6622Z"
            stroke="var(--text-light)"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M28.4528 27.155V24.6564C28.452 23.5492 28.0835 22.4736 27.4051 21.5986C26.7268 20.7235 25.777 20.0985 24.705 19.8217"
            stroke="var(--text-light)"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.9572 4.83038C22.0321 5.1056 22.9848 5.73074 23.6651 6.60724C24.3455 7.48375 24.7148 8.56176 24.7148 9.67133C24.7148 10.7809 24.3455 11.8589 23.6651 12.7354C22.9848 13.6119 22.0321 14.2371 20.9572 14.5123"
            stroke="var(--text-light)"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : null}
      {svgCode === 5 ? (
        <svg
          width={30}
          height={30}
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.2934 9.1651V26.655"
            stroke="var(--text-light)"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.04987 22.9071C3.71855 22.9071 3.40079 22.7755 3.1665 22.5412C2.93222 22.3069 2.8006 21.9892 2.8006 21.6578V5.41725C2.8006 5.08592 2.93222 4.76816 3.1665 4.53387C3.40079 4.29959 3.71855 4.16797 4.04987 4.16797H10.2963C11.6216 4.16797 12.8926 4.69445 13.8297 5.63159C14.7669 6.56873 15.2934 7.83976 15.2934 9.16508C15.2934 7.83976 15.8198 6.56873 16.757 5.63159C17.6941 4.69445 18.9652 4.16797 20.2905 4.16797H26.5369C26.8682 4.16797 27.1859 4.29959 27.4202 4.53387C27.6545 4.76816 27.7861 5.08592 27.7861 5.41725V21.6578C27.7861 21.9892 27.6545 22.3069 27.4202 22.5412C27.1859 22.7755 26.8682 22.9071 26.5369 22.9071H19.0412C18.0472 22.9071 17.0939 23.302 16.3911 24.0048C15.6882 24.7077 15.2934 25.661 15.2934 26.6549C15.2934 25.661 14.8985 24.7077 14.1957 24.0048C13.4928 23.302 12.5395 22.9071 11.5455 22.9071H4.04987Z"
            stroke="var(--text-light)"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : null}
      {svgCode === 6 ? (
        <svg
          width={30}
          height={30}
          viewBox="0 0 30 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.7341 5.91685H22.485V4.66768C22.485 3.91818 21.9853 3.41852 21.2358 3.41852C20.4863 3.41852 19.9866 3.91818 19.9866 4.66768V5.91685H9.99329V4.66768C9.99329 3.91818 9.49362 3.41852 8.74412 3.41852C7.99462 3.41852 7.49496 3.91818 7.49496 4.66768V5.91685H6.24579C4.12221 5.91685 2.49829 7.54077 2.49829 9.66435V10.9135H27.4816V9.66435C27.4816 7.54077 25.8577 5.91685 23.7341 5.91685ZM2.49829 24.6544C2.49829 26.7779 4.12221 28.4019 6.24579 28.4019H23.7341C25.8577 28.4019 27.4816 26.7779 27.4816 24.6544V13.4119H2.49829V24.6544ZM21.2358 15.9102C21.9853 15.9102 22.485 16.4099 22.485 17.1594C22.485 17.9089 21.9853 18.4085 21.2358 18.4085C20.4863 18.4085 19.9866 17.9089 19.9866 17.1594C19.9866 16.4099 20.4863 15.9102 21.2358 15.9102ZM21.2358 20.9069C21.9853 20.9069 22.485 21.4065 22.485 22.156C22.485 22.9055 21.9853 23.4052 21.2358 23.4052C20.4863 23.4052 19.9866 22.9055 19.9866 22.156C19.9866 21.4065 20.4863 20.9069 21.2358 20.9069ZM14.99 15.9102C15.7395 15.9102 16.2391 16.4099 16.2391 17.1594C16.2391 17.9089 15.7395 18.4085 14.99 18.4085C14.2405 18.4085 13.7408 17.9089 13.7408 17.1594C13.7408 16.4099 14.2405 15.9102 14.99 15.9102ZM14.99 20.9069C15.7395 20.9069 16.2391 21.4065 16.2391 22.156C16.2391 22.9055 15.7395 23.4052 14.99 23.4052C14.2405 23.4052 13.7408 22.9055 13.7408 22.156C13.7408 21.4065 14.2405 20.9069 14.99 20.9069ZM8.74412 15.9102C9.49362 15.9102 9.99329 16.4099 9.99329 17.1594C9.99329 17.9089 9.49362 18.4085 8.74412 18.4085C7.99462 18.4085 7.49496 17.9089 7.49496 17.1594C7.49496 16.4099 7.99462 15.9102 8.74412 15.9102ZM8.74412 20.9069C9.49362 20.9069 9.99329 21.4065 9.99329 22.156C9.99329 22.9055 9.49362 23.4052 8.74412 23.4052C7.99462 23.4052 7.49496 22.9055 7.49496 22.156C7.49496 21.4065 7.99462 20.9069 8.74412 20.9069Z"
            fill="var(--text-light)"
          />
        </svg>
      ) : null}
      <h6 className="mt-[6px] text-[13px]/[21px] font-bold text-[var(--text-light)]">
        {title}
      </h6>
      <p className="text-[11px]/[18px] text-[var(--accent-light)]">{text}</p>
    </div>
  );
}
