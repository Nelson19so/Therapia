export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex justify-center bg-[var(--secondary)]">
      <div className="max-w-[1440px] w-full py-[97px] flex justify-center">
        <div className="xl:max-w-[988px] lg:max-w-[914px] md:max-w-[668px] sm:max-w-[590px] max-w-[590px] w-full flex flex-col font-[Inter] gap-y-[24px] sm:px-[0px] px-[19px]">
          <div className="grid xl:grid-cols-[229px_229px_229px_229px] lg:grid-cols-[210px_210px_210px_210px] md:grid-cols-[173px_141px_141px_141px] sm:grid-cols-[130px_130px_130px] grid-cols-[126px_126px] md:justify-center justify-start gap-[24px]">
            <div className="flex flex-col gap-y-[12px] md:col-span-[1] col-span-[2]">
              <h6 className="text-[13px]/[21px] font-bold text-[var(--text-light)]">
                Therapia
              </h6>
              <p className="text-[11px]/[18px] text-[var(--neutral-dark)] md:max-w-[214px] max-w-[227px]">
                Your mental wellness companion, available whenever and wherever
                you need support.
              </p>
            </div>
            <div className="flex flex-col gap-y-[12px] md:row-[auto] row-[2]">
              <h6 className="text-[13px]/[18px] font-semibold text-[var(--text-light)]">
                Company
              </h6>
              <div className="text-[11px]/[18px] text-[var(--neutral-dark)] flex flex-col gap-y-[6px]">
                <a href="">About Us</a>
                <a href="">Careers</a>
                <a href="">Blog</a>
                <a href="">Press</a>
              </div>
            </div>
            <div className="flex flex-col gap-y-[12px] md:row-[auto] sm:row-[2] row-[3]">
              <h6 className="text-[13px]/[18px] font-semibold text-[var(--text-light)]">
                Resources
              </h6>
              <div className="text-[11px]/[18px] text-[var(--neutral-dark)] flex flex-col gap-y-[6px]">
                <a href="">Mental Health 101</a>
                <a href="">Crisis Support</a>
                <a href="">For Therapists</a>
                <a href="">FAQ</a>
              </div>
            </div>
            <div className="flex flex-col gap-y-[12px] md:row-[auto] row-[2]">
              <h6 className="text-[13px]/[18px] font-semibold text-[var(--text-light)]">
                Legal
              </h6>
              <div className="text-[11px]/[18px] text-[var(--neutral-dark)] flex flex-col gap-y-[6px]">
                <a href="">Terms of Service</a>
                <a href="">Privacy Policy</a>
                <a href="">Cookie Policy</a>
                <a href="">Contact Us</a>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between border-t-[1px] border-[var(--text-secondary)] pt-[25px]">
            <span className="text-[11px]/[18px] text-[var(--neutral-dark)]">
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
                    stroke="var(--neutral-dark)"
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
                      fill="var(--text-light)"
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
                    stroke="var(--neutral-dark)"
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
                      fill="var(--text-light)"
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
                    stroke="var(--neutral-dark)"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.0372 7.65036C10.1142 8.16991 10.0255 8.70052 9.78355 9.16673C9.54164 9.63294 9.15889 10.011 8.68973 10.2471C8.22057 10.4833 7.6889 10.5655 7.17034 10.482C6.65178 10.3986 6.17273 10.1538 5.80133 9.78236C5.42994 9.41097 5.18511 8.93192 5.10166 8.41336C5.01822 7.89479 5.10041 7.36312 5.33655 6.89397C5.57269 6.42481 5.95075 6.04206 6.41696 5.80015C6.88317 5.55824 7.41379 5.4695 7.93334 5.54654C8.4633 5.62513 8.95394 5.87208 9.33278 6.25092C9.71161 6.62976 9.95857 7.12039 10.0372 7.65036Z"
                    stroke="var(--neutral-dark)"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.9735 4.61011H10.9798"
                    stroke="var(--neutral-dark)"
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
                      fill="var(--text-light)"
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
                    stroke="var(--neutral-dark)"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.77347 6.17065H1.27637V13.662H3.77347V6.17065Z"
                    stroke="var(--neutral-dark)"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.52492 4.29789C3.21448 4.29789 3.77347 3.73889 3.77347 3.04933C3.77347 2.35978 3.21448 1.80078 2.52492 1.80078C1.83536 1.80078 1.27637 2.35978 1.27637 3.04933C1.27637 3.73889 1.83536 4.29789 2.52492 4.29789Z"
                    stroke="var(--neutral-dark)"
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
                      fill="var(--text-light)"
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
  );
}
