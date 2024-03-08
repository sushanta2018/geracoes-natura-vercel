import React from "react";
import {
  FbIcon,
  FooterLogoIcon,
  InstaIcon,
  TiktokIcon,
  TwitterIcon,
} from "./Icons";
import Link from "next/link";

function Footer() {
  return (
    <>
      <div className="  xl:max-w-[970px] max-w-[920px] mx-auto  md:pb-12 px-4 py-5  ">
        <div className="flex flex-wrap justify-between gap-5 ">
          <div>
            <FooterLogoIcon />
          </div>
        </div>
        <div className="flex flex-row justify-between max-w-[98px]   my-5 ">
          <Link
            target="_blank"
            href={"https://www.natura.com.br/"}
            className="w-[24px] h-[24px] rounded-full bg-black flex flex-col justify-center items-center transition-all duration-300 ease-in-out hover:-translate-y-1 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M14.25 8C14.25 11.4518 11.4518 14.25 8 14.25M14.25 8C14.25 4.54822 11.4518 1.75 8 1.75M14.25 8H1.75M8 14.25C4.54822 14.25 1.75 11.4518 1.75 8M8 14.25C9.5633 12.5385 10.4517 10.3175 10.5 8C10.4517 5.68252 9.5633 3.46147 8 1.75M8 14.25C6.4367 12.5385 5.54828 10.3175 5.5 8C5.54828 5.68252 6.4367 3.46147 8 1.75M1.75 8C1.75 4.54822 4.54822 1.75 8 1.75"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            target="_blank"
            href={"https://www.instagram.com/naturabroficial"}
            className="w-[24px] h-[24px] rounded-full bg-black flex flex-col justify-center items-center transition-all duration-300 ease-in-out hover:-translate-y-1 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M11.4375 4.5625H11.4438M4.875 1.75H11.125C12.8509 1.75 14.25 3.14911 14.25 4.875V11.125C14.25 12.8509 12.8509 14.25 11.125 14.25H4.875C3.14911 14.25 1.75 12.8509 1.75 11.125V4.875C1.75 3.14911 3.14911 1.75 4.875 1.75ZM10.5 7.60625C10.5771 8.1264 10.4883 8.65764 10.2461 9.12439C10.0039 9.59113 9.62072 9.96963 9.15102 10.206C8.68132 10.4425 8.14903 10.5247 7.62987 10.4412C7.1107 10.3577 6.6311 10.1126 6.25927 9.74073C5.88745 9.3689 5.64233 8.8893 5.55879 8.37013C5.47525 7.85097 5.55754 7.31868 5.79395 6.84898C6.03037 6.37928 6.40887 5.99609 6.87562 5.7539C7.34237 5.51171 7.8736 5.42287 8.39375 5.5C8.92433 5.57868 9.41553 5.82592 9.79481 6.20519C10.1741 6.58447 10.4213 7.07567 10.5 7.60625Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            target="_blank"
            href={"https://www.tiktok.com/@naturabrasiloficial"}
            className=" transition-all duration-300 ease-in-out hover:-translate-y-1 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle cx="12" cy="12" r="12" fill="black" />
              <path
                d="M15.9424 8.56637C15.8607 8.52451 15.7811 8.47862 15.7039 8.42888C15.4796 8.282 15.274 8.10893 15.0914 7.9134C14.6346 7.39568 14.464 6.87046 14.4011 6.50272H14.4037C14.3512 6.19749 14.3729 6 14.3762 6H12.2955V13.9691C12.2955 14.0761 12.2956 14.1818 12.291 14.2863C12.291 14.2993 12.2897 14.3113 12.289 14.3253C12.289 14.3311 12.289 14.3371 12.2877 14.3431C12.2877 14.3446 12.2877 14.3461 12.2877 14.3476C12.2658 14.6335 12.1733 14.9097 12.0183 15.1519C11.8633 15.3941 11.6506 15.5949 11.3988 15.7365C11.1365 15.8843 10.8398 15.9619 10.538 15.9615C9.5686 15.9615 8.78294 15.1785 8.78294 14.2116C8.78294 13.2446 9.5686 12.4617 10.538 12.4617C10.7215 12.4615 10.9039 12.4901 11.0783 12.5464L11.0809 10.448C10.5512 10.3803 10.0131 10.422 9.50055 10.5705C8.98798 10.719 8.51205 10.9711 8.10278 11.311C7.74417 11.6196 7.44268 11.9879 7.21188 12.3992C7.12405 12.5492 6.79268 13.1519 6.75255 14.1301C6.72731 14.6853 6.89565 15.2605 6.97591 15.4983V15.5033C7.02638 15.6433 7.22198 16.121 7.54073 16.5237C7.79776 16.8468 8.10144 17.1306 8.44198 17.3659V17.3609L8.44702 17.3659C9.45427 18.0439 10.571 17.9994 10.571 17.9994C10.7644 17.9917 11.412 17.9994 12.1474 17.6542C12.9631 17.2714 13.4275 16.7012 13.4275 16.7012C13.7241 16.3605 13.96 15.9722 14.125 15.553C14.3133 15.0628 14.3762 14.4748 14.3762 14.2398V10.012C14.4014 10.027 14.7376 10.2473 14.7376 10.2473C14.7376 10.2473 15.2219 10.5548 15.9775 10.755C16.5196 10.8975 17.25 10.9275 17.25 10.9275V8.88161C16.9941 8.9091 16.4744 8.82911 15.9424 8.56637Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Footer;
