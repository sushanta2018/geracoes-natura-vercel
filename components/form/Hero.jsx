import Link from "next/link";
import React from "react";
import TopColorBanner from "../common/TopColorBanner";

function Hero() {
  return (
    <div>
      <TopColorBanner />
      <div className="bg- py-8 text-center bg-[url(/images/form-hero.png)]  sm:bg-none bg-no-repeat bg-cover   bg-[100%]  sm:bg-[#f6f6f6] relative ">
        <p className=" text-[14px] text-black font-OfeliaBold font-bold sm:pb-0 pb-4">
          Teste de perfil
        </p>{" "}
        <Link href={"/"} className="sm:hidden ">
          {" "}
          <span className="w-[44px] h-[44px] flex flex-col justify-center items-center rounded-full bg-[#E5004B] absolute left-6 top-5">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M17.0009 10.9999H9.41087L12.7109 7.70994C12.8992 7.52164 13.005 7.26624 13.005 6.99994C13.005 6.73364 12.8992 6.47825 12.7109 6.28994C12.5226 6.10164 12.2672 5.99585 12.0009 5.99585C11.7346 5.99585 11.4792 6.10164 11.2909 6.28994L6.29087 11.2899C6.19983 11.385 6.12847 11.4972 6.08087 11.6199C5.98085 11.8634 5.98085 12.1365 6.08087 12.3799C6.12847 12.5027 6.19983 12.6148 6.29087 12.7099L11.2909 17.7099C11.3838 17.8037 11.4944 17.8781 11.6163 17.9288C11.7382 17.9796 11.8689 18.0057 12.0009 18.0057C12.1329 18.0057 12.2636 17.9796 12.3854 17.9288C12.5073 17.8781 12.6179 17.8037 12.7109 17.7099C12.8046 17.617 12.879 17.5064 12.9298 17.3845C12.9805 17.2627 13.0067 17.132 13.0067 16.9999C13.0067 16.8679 12.9805 16.7372 12.9298 16.6154C12.879 16.4935 12.8046 16.3829 12.7109 16.2899L9.41087 12.9999H17.0009C17.2661 12.9999 17.5204 12.8946 17.708 12.707C17.8955 12.5195 18.0009 12.2652 18.0009 11.9999C18.0009 11.7347 17.8955 11.4804 17.708 11.2928C17.5204 11.1053 17.2661 10.9999 17.0009 10.9999Z"
                fill="white"
              />
            </svg>{" "}
          </span>{" "}
        </Link>
      </div>
    </div>
  );
}

export default Hero;
