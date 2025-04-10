import clsx from "clsx";

export default function ScheduleSessionProcessCard({ title, text, svgCode }) {
  return (
    <div className="w-full flex flex-col items-center justify-start gap-y-[7px] min-h-[160px]">
      {svgCode === 1 ? (
        <svg
          width={50}
          height={50}
          viewBox="0 0 52 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.39575 25.8958C1.39575 12.3073 12.4114 1.29163 25.9999 1.29163C39.5884 1.29163 50.6041 12.3073 50.6041 25.8958C50.6041 39.4843 39.5884 50.5 25.9999 50.5C12.4114 50.5 1.39575 39.4843 1.39575 25.8958Z"
            fill="none"
          />
          <path
            d="M1.39575 25.8958C1.39575 12.3073 12.4114 1.29163 25.9999 1.29163C39.5884 1.29163 50.6041 12.3073 50.6041 25.8958C50.6041 39.4843 39.5884 50.5 25.9999 50.5C12.4114 50.5 1.39575 39.4843 1.39575 25.8958Z"
            stroke="var(--primary)"
          />
          <path
            d="M29.9989 34.8932V32.8938C29.9989 31.8332 29.5776 30.8161 28.8276 30.0662C28.0777 29.3163 27.0606 28.895 26 28.895H20.0018C18.9412 28.895 17.9241 29.3163 17.1742 30.0662C16.4242 30.8161 16.0029 31.8332 16.0029 32.8938V34.8932"
            stroke="var(--primary)"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23.0008 24.8961C25.2093 24.8961 26.9996 23.1058 26.9996 20.8973C26.9996 18.6888 25.2093 16.8984 23.0008 16.8984C20.7923 16.8984 19.002 18.6888 19.002 20.8973C19.002 23.1058 20.7923 24.8961 23.0008 24.8961Z"
            stroke="var(--primary)"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M35.9978 34.8932V32.8938C35.9971 32.0078 35.7022 31.1471 35.1592 30.4468C34.6162 29.7466 33.8559 29.2464 32.9978 29.0249"
            stroke="var(--primary)"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M29.9988 17.0284C30.8592 17.2486 31.6218 17.7489 32.1664 18.4503C32.711 19.1517 33.0066 20.0143 33.0066 20.9023C33.0066 21.7902 32.711 22.6528 32.1664 23.3542C31.6218 24.0556 30.8592 24.5559 29.9988 24.7761"
            stroke="var(--primary)"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : null}
      {svgCode === 2 ? (
        <svg
          width={50}
          height={50}
          viewBox="0 0 52 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.39575 25.8958C1.39575 12.3073 12.4114 1.29163 25.9999 1.29163C39.5884 1.29163 50.6041 12.3073 50.6041 25.8958C50.6041 39.4843 39.5884 50.5 25.9999 50.5C12.4114 50.5 1.39575 39.4843 1.39575 25.8958Z"
            fill="none"
          />
          <path
            d="M1.39575 25.8958C1.39575 12.3073 12.4114 1.29163 25.9999 1.29163C39.5884 1.29163 50.6041 12.3073 50.6041 25.8958C50.6041 39.4843 39.5884 50.5 25.9999 50.5C12.4114 50.5 1.39575 39.4843 1.39575 25.8958Z"
            stroke="var(--primary)"
          />
          <path
            d="M23 33.5416C22.8011 33.5416 22.6103 33.6206 22.4697 33.7613C22.329 33.9019 22.25 34.0927 22.25 34.2916C22.25 34.4905 22.329 34.6813 22.4697 34.822C22.6103 34.9626 22.8011 35.0416 23 35.0416H28C28.1989 35.0416 28.3897 34.9626 28.5303 34.822C28.671 34.6813 28.75 34.4905 28.75 34.2916C28.75 34.0927 28.671 33.9019 28.5303 33.7613C28.3897 33.6206 28.1989 33.5416 28 33.5416H23ZM19.75 11.5416C18.8217 11.5416 17.9315 11.9104 17.2751 12.5668C16.6187 13.2231 16.25 14.1134 16.25 15.0416V36.5416C16.25 37.4699 16.6187 38.3601 17.2751 39.0165C17.9315 39.6729 18.8217 40.0416 19.75 40.0416H31.25C32.1783 40.0416 33.0685 39.6729 33.7249 39.0165C34.3813 38.3601 34.75 37.4699 34.75 36.5416V15.0416C34.75 14.1134 34.3813 13.2231 33.7249 12.5668C33.0685 11.9104 32.1783 11.5416 31.25 11.5416H19.75ZM17.75 15.0416C17.75 14.5112 17.9607 14.0025 18.3358 13.6274C18.7109 13.2523 19.2196 13.0416 19.75 13.0416H31.25C31.7804 13.0416 32.2891 13.2523 32.6642 13.6274C33.0393 14.0025 33.25 14.5112 33.25 15.0416V36.5416C33.25 37.0721 33.0393 37.5808 32.6642 37.9558C32.2891 38.3309 31.7804 38.5416 31.25 38.5416H19.75C19.2196 38.5416 18.7109 38.3309 18.3358 37.9558C17.9607 37.5808 17.75 37.0721 17.75 36.5416V15.0416Z"
            fill="var(--primary)"
            stroke="var(--primary)"
            strokeWidth={0.5}
          />
        </svg>
      ) : null}
      {svgCode === 3 ? (
        <svg
          width={50}
          height={50}
          viewBox="0 0 52 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.39575 25.8958C1.39575 12.3073 12.4114 1.29163 25.9999 1.29163C39.5884 1.29163 50.6041 12.3073 50.6041 25.8958C50.6041 39.4843 39.5884 50.5 25.9999 50.5C12.4114 50.5 1.39575 39.4843 1.39575 25.8958Z"
            fill="none"
          />
          <path
            d="M1.39575 25.8958C1.39575 12.3073 12.4114 1.29163 25.9999 1.29163C39.5884 1.29163 50.6041 12.3073 50.6041 25.8958C50.6041 39.4843 39.5884 50.5 25.9999 50.5C12.4114 50.5 1.39575 39.4843 1.39575 25.8958Z"
            stroke="var(--primary)"
          />
          <path
            d="M28.2496 25.79V36.2952C28.3046 36.6952 28.1671 37.1218 27.8509 37.4018C27.7237 37.5253 27.5727 37.6234 27.4063 37.6903C27.24 37.7572 27.0617 37.7916 26.8817 37.7916C26.7016 37.7916 26.5233 37.7572 26.357 37.6903C26.1907 37.6234 26.0396 37.5253 25.9124 37.4018L23.1491 34.7221C22.9992 34.5799 22.8853 34.4061 22.8161 34.2141C22.7469 34.0222 22.7245 33.8174 22.7504 33.6156V25.79H22.7091L14.7902 15.9513C14.567 15.6734 14.4662 15.3211 14.51 14.9714C14.5538 14.6216 14.7386 14.303 15.024 14.0849C15.2852 13.8983 15.5739 13.7916 15.8763 13.7916H35.1237C35.4261 13.7916 35.7148 13.8983 35.976 14.0849C36.2614 14.303 36.4462 14.6216 36.49 14.9714C36.5338 15.3211 36.433 15.6734 36.2098 15.9513L28.2909 25.79H28.2496Z"
            fill="var(--primary)"
          />
        </svg>
      ) : null}
      {svgCode === 4 ? (
        <svg
          width={50}
          height={50}
          viewBox="0 0 52 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.39575 25.1042C1.39575 11.5157 12.4114 0.5 25.9999 0.5C39.5884 0.5 50.6041 11.5157 50.6041 25.1042C50.6041 38.6927 39.5884 49.7083 25.9999 49.7083C12.4114 49.7083 1.39575 38.6927 1.39575 25.1042Z"
            fill="none"
          />
          <path
            d="M1.39575 25.1042C1.39575 11.5157 12.4114 0.5 25.9999 0.5C39.5884 0.5 50.6041 11.5157 50.6041 25.1042C50.6041 38.6927 39.5884 49.7083 25.9999 49.7083C12.4114 49.7083 1.39575 38.6927 1.39575 25.1042Z"
            stroke="var(--primary)"
          />
          <path
            d="M21.2162 15.6923C21.2162 15.5087 21.1365 15.3326 20.9947 15.2028C20.853 15.0729 20.6607 15 20.4602 15C20.2597 15 20.0674 15.0729 19.9256 15.2028C19.7839 15.3326 19.7042 15.5087 19.7042 15.6923V17.1508C18.2527 17.2569 17.3012 17.5172 16.6017 18.1588C15.9012 18.7994 15.6169 19.6717 15.5 21H35.5C35.3831 19.6708 35.0988 18.7994 34.3983 18.1588C33.6988 17.5172 32.7462 17.2569 31.2958 17.1498V15.6923C31.2958 15.5087 31.2161 15.3326 31.0744 15.2028C30.9326 15.0729 30.7403 15 30.5398 15C30.3393 15 30.147 15.0729 30.0053 15.2028C29.8635 15.3326 29.7838 15.5087 29.7838 15.6923V17.0889C29.1135 17.0769 28.3616 17.0769 27.5159 17.0769H23.4841C22.6384 17.0769 21.8865 17.0769 21.2162 17.0889V15.6923Z"
            fill="var(--primary)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.5 25.2041C15.5 24.3822 15.5 23.6514 15.513 23H35.487C35.5 23.6514 35.5 24.3822 35.5 25.2041V27.1633C35.5 30.8573 35.5 32.7048 34.328 33.8519C33.156 34.999 31.271 35 27.5 35H23.5C19.729 35 17.843 35 16.672 33.8519C15.501 32.7038 15.5 30.8573 15.5 27.1633V25.2041ZM30.5 27.1633C30.7652 27.1633 31.0196 27.0601 31.2071 26.8763C31.3946 26.6926 31.5 26.4435 31.5 26.1837C31.5 25.9239 31.3946 25.6747 31.2071 25.491C31.0196 25.3073 30.7652 25.2041 30.5 25.2041C30.2348 25.2041 29.9804 25.3073 29.7929 25.491C29.6054 25.6747 29.5 25.9239 29.5 26.1837C29.5 26.4435 29.6054 26.6926 29.7929 26.8763C29.9804 27.0601 30.2348 27.1633 30.5 27.1633ZM30.5 31.0816C30.7652 31.0816 31.0196 30.9784 31.2071 30.7947C31.3946 30.611 31.5 30.3618 31.5 30.102C31.5 29.8422 31.3946 29.5931 31.2071 29.4094C31.0196 29.2257 30.7652 29.1224 30.5 29.1224C30.2348 29.1224 29.9804 29.2257 29.7929 29.4094C29.6054 29.5931 29.5 29.8422 29.5 30.102C29.5 30.3618 29.6054 30.611 29.7929 30.7947C29.9804 30.9784 30.2348 31.0816 30.5 31.0816ZM26.5 26.1837C26.5 26.4435 26.3946 26.6926 26.2071 26.8763C26.0196 27.0601 25.7652 27.1633 25.5 27.1633C25.2348 27.1633 24.9804 27.0601 24.7929 26.8763C24.6054 26.6926 24.5 26.4435 24.5 26.1837C24.5 25.9239 24.6054 25.6747 24.7929 25.491C24.9804 25.3073 25.2348 25.2041 25.5 25.2041C25.7652 25.2041 26.0196 25.3073 26.2071 25.491C26.3946 25.6747 26.5 25.9239 26.5 26.1837ZM26.5 30.102C26.5 30.3618 26.3946 30.611 26.2071 30.7947C26.0196 30.9784 25.7652 31.0816 25.5 31.0816C25.2348 31.0816 24.9804 30.9784 24.7929 30.7947C24.6054 30.611 24.5 30.3618 24.5 30.102C24.5 29.8422 24.6054 29.5931 24.7929 29.4094C24.9804 29.2257 25.2348 29.1224 25.5 29.1224C25.7652 29.1224 26.0196 29.2257 26.2071 29.4094C26.3946 29.5931 26.5 29.8422 26.5 30.102ZM20.5 27.1633C20.7652 27.1633 21.0196 27.0601 21.2071 26.8763C21.3946 26.6926 21.5 26.4435 21.5 26.1837C21.5 25.9239 21.3946 25.6747 21.2071 25.491C21.0196 25.3073 20.7652 25.2041 20.5 25.2041C20.2348 25.2041 19.9804 25.3073 19.7929 25.491C19.6054 25.6747 19.5 25.9239 19.5 26.1837C19.5 26.4435 19.6054 26.6926 19.7929 26.8763C19.9804 27.0601 20.2348 27.1633 20.5 27.1633ZM20.5 31.0816C20.7652 31.0816 21.0196 30.9784 21.2071 30.7947C21.3946 30.611 21.5 30.3618 21.5 30.102C21.5 29.8422 21.3946 29.5931 21.2071 29.4094C21.0196 29.2257 20.7652 29.1224 20.5 29.1224C20.2348 29.1224 19.9804 29.2257 19.7929 29.4094C19.6054 29.5931 19.5 29.8422 19.5 30.102C19.5 30.3618 19.6054 30.611 19.7929 30.7947C19.9804 30.9784 20.2348 31.0816 20.5 31.0816Z"
            fill="var(--primary)"
          />
        </svg>
      ) : null}
      {svgCode === 5 ? (
        <svg
          width={50}
          height={50}
          viewBox="0 0 52 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.39575 25.1042C1.39575 11.5157 12.4114 0.5 25.9999 0.5C39.5884 0.5 50.6041 11.5157 50.6041 25.1042C50.6041 38.6927 39.5884 49.7083 25.9999 49.7083C12.4114 49.7083 1.39575 38.6927 1.39575 25.1042Z"
            fill="none"
          />
          <path
            d="M1.39575 25.1042C1.39575 11.5157 12.4114 0.5 25.9999 0.5C39.5884 0.5 50.6041 11.5157 50.6041 25.1042C50.6041 38.6927 39.5884 49.7083 25.9999 49.7083C12.4114 49.7083 1.39575 38.6927 1.39575 25.1042Z"
            stroke="var(--primary)"
          />
          <path
            d="M31.5625 21.75V19.25C31.5625 15.75 28.675 13 25 13C21.325 13 18.4375 15.75 18.4375 19.25V21.75C16.2062 21.75 14.5 23.375 14.5 25.5V34.25C14.5 36.375 16.2062 38 18.4375 38H31.5625C33.7938 38 35.5 36.375 35.5 34.25V25.5C35.5 23.375 33.7938 21.75 31.5625 21.75ZM21.0625 19.25C21.0625 17.125 22.7688 15.5 25 15.5C27.2312 15.5 28.9375 17.125 28.9375 19.25V21.75H21.0625V19.25Z"
            fill="var(--primary)"
          />
        </svg>
      ) : null}
      {svgCode === 6 ? (
        <svg
          width={50}
          height={50}
          viewBox="0 0 52 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.39575 25.1042C1.39575 11.5157 12.4114 0.5 25.9999 0.5C39.5884 0.5 50.6041 11.5157 50.6041 25.1042C50.6041 38.6927 39.5884 49.7083 25.9999 49.7083C12.4114 49.7083 1.39575 38.6927 1.39575 25.1042Z"
            fill="none"
          />
          <path
            d="M1.39575 25.1042C1.39575 11.5157 12.4114 0.5 25.9999 0.5C39.5884 0.5 50.6041 11.5157 50.6041 25.1042C50.6041 38.6927 39.5884 49.7083 25.9999 49.7083C12.4114 49.7083 1.39575 38.6927 1.39575 25.1042Z"
            stroke="var(--primary)"
          />
          <path
            d="M33.0236 24.4497C32.9544 24.4284 32.8793 24.4346 32.8148 24.467C32.7503 24.4994 32.7017 24.5553 32.6797 24.6224C32.6577 24.6895 32.6641 24.7624 32.6975 24.825C32.7309 24.8875 32.7885 24.9347 32.8577 24.956C34.9978 25.6174 35.9523 26.604 35.9523 28.1563C35.9523 29.537 34.6539 30.6085 33.8807 31.1249C33.844 31.1493 33.8141 31.182 33.7934 31.2201C33.7727 31.2582 33.7619 31.3007 33.7618 31.3438V33.3747C33.1043 33.1329 32.5169 32.74 32.05 32.2299C32.0185 32.1955 31.9783 32.1696 31.9333 32.1548C31.8884 32.14 31.8403 32.1368 31.7937 32.1454C31.6376 32.1746 31.4783 32.2161 31.3167 32.2581C31.0374 32.3308 30.7494 32.4063 30.4761 32.4063C29.0698 32.4063 28.0852 32.113 27.0787 31.3953C27.0202 31.3535 26.9469 31.336 26.8751 31.3466C26.8032 31.3572 26.7387 31.3951 26.6956 31.4519C26.6526 31.5087 26.6345 31.5797 26.6455 31.6494C26.6564 31.7191 26.6954 31.7817 26.754 31.8235C27.864 32.6151 28.9422 32.9375 30.4761 32.9375C30.8217 32.9375 31.1459 32.8531 31.4591 32.7712C31.5566 32.7447 31.6533 32.7202 31.7493 32.6979C32.7728 33.7466 33.9305 33.9851 33.9809 33.9947C34.0207 34.0025 34.0617 34.0017 34.1011 33.9922C34.1405 33.9828 34.1773 33.9649 34.2087 33.94C34.2401 33.9151 34.2655 33.8838 34.2829 33.8482C34.3004 33.8126 34.3094 33.7738 34.3095 33.7344V31.4824C35.7234 30.5044 36.4999 29.3271 36.4999 28.1563C36.4999 26.3601 35.3954 25.1823 33.0236 24.4497Z"
            fill="var(--primary)"
          />
          <path
            d="M31.5714 24.1719C31.5714 20.0834 27.7282 17 22.6326 17C17.5113 17 13.5 20.1508 13.5 24.1729C13.5 26.5843 15.2584 28.3119 16.7857 29.3574V32.8828C16.786 32.927 16.7976 32.9705 16.8196 33.0093C16.8415 33.0481 16.873 33.081 16.9113 33.1051C16.9496 33.1291 16.9935 33.1435 17.0389 33.147C17.0844 33.1505 17.1301 33.1429 17.1718 33.125C17.2517 33.0905 19.1208 32.2665 20.7198 30.5703C21.4125 30.6951 22.1962 30.8152 22.907 30.8152C28.0891 30.8152 31.5714 28.1451 31.5714 24.1719ZM22.9065 30.2839C22.1891 30.2839 21.3737 30.1506 20.6705 30.0204C20.6239 30.0123 20.576 30.0157 20.5311 30.0305C20.4863 30.0453 20.4461 30.0709 20.4142 30.1049C19.2916 31.3331 17.9724 32.1135 17.3333 32.4498V29.2188C17.3333 29.1757 17.3225 29.1332 17.3018 29.0951C17.2811 29.0569 17.2511 29.0243 17.2145 28.9999C15.7699 28.0357 14.0476 26.4164 14.0476 24.1729C14.0476 20.4483 17.8185 17.5312 22.6326 17.5312C27.4166 17.5312 31.0238 20.3862 31.0238 24.1719C31.0238 27.8279 27.7616 30.2839 22.9065 30.2839Z"
            fill="var(--primary)"
          />
          <path
            d="M22.5357 23.1094C21.9317 23.1094 21.4405 23.5859 21.4405 24.1719C21.4405 24.7578 21.9317 25.2344 22.5357 25.2344C23.1398 25.2344 23.631 24.7578 23.631 24.1719C23.631 23.5859 23.1398 23.1094 22.5357 23.1094ZM22.5357 24.7031C22.3947 24.697 22.2616 24.6384 22.1641 24.5394C22.0665 24.4404 22.0121 24.3088 22.0121 24.1719C22.0121 24.035 22.0665 23.9033 22.1641 23.8043C22.2616 23.7054 22.3947 23.6467 22.5357 23.6406C22.6768 23.6467 22.8099 23.7054 22.9074 23.8043C23.005 23.9033 23.0594 24.035 23.0594 24.1719C23.0594 24.3088 23.005 24.4404 22.9074 24.5394C22.8099 24.6384 22.6768 24.697 22.5357 24.7031ZM26.3691 23.1094C25.7651 23.1094 25.2738 23.5859 25.2738 24.1719C25.2738 24.7578 25.7651 25.2344 26.3691 25.2344C26.9731 25.2344 27.4643 24.7578 27.4643 24.1719C27.4643 23.5859 26.9731 23.1094 26.3691 23.1094ZM26.3691 24.7031C26.2281 24.697 26.0949 24.6384 25.9974 24.5394C25.8999 24.4404 25.8454 24.3088 25.8454 24.1719C25.8454 24.035 25.8999 23.9033 25.9974 23.8043C26.0949 23.7054 26.2281 23.6467 26.3691 23.6406C26.5101 23.6467 26.6432 23.7054 26.7408 23.8043C26.8383 23.9033 26.8928 24.035 26.8928 24.1719C26.8928 24.3088 26.8383 24.4404 26.7408 24.5394C26.6432 24.6384 26.5101 24.697 26.3691 24.7031ZM18.7024 23.1598C18.0984 23.1598 17.6072 23.6364 17.6072 24.2223C17.6072 24.8083 18.0984 25.2848 18.7024 25.2848C19.3064 25.2848 19.7977 24.8083 19.7977 24.2223C19.7977 23.6364 19.3064 23.1598 18.7024 23.1598ZM18.7024 24.7536C18.5614 24.7475 18.4283 24.6888 18.3307 24.5899C18.2332 24.4909 18.1787 24.3593 18.1787 24.2223C18.1787 24.0854 18.2332 23.9538 18.3307 23.8548C18.4283 23.7559 18.5614 23.6972 18.7024 23.6911C18.8434 23.6972 18.9766 23.7559 19.0741 23.8548C19.1716 23.9538 19.2261 24.0854 19.2261 24.2223C19.2261 24.3593 19.1716 24.4909 19.0741 24.5899C18.9766 24.6888 18.8434 24.7475 18.7024 24.7536Z"
            fill="var(--primary)"
          />
        </svg>
      ) : null}
      <h6
        className={clsx(
          "text-[13px]/[18px] text-[var(--text-dark)] font-bold text-center ",
          { "max-w-[140px]": svgCode !== 4 },
          { "max-w-[128px]": svgCode === 4 }
        )}
      >
        {title}
      </h6>
      <p className="text-[11px]/[15px] text-[#8C8686] text-center max-w-[190px]">
        {text}
      </p>
    </div>
  );
}
