import Image from "next/image";
import Link from "next/link";
import { LeftArrow } from "../common/Icons";
import TopColorBanner from "../common/TopColorBanner";

function Consultancy() {
  return (
    <>
      <div>
        <TopColorBanner />
        <div className="py-8  relative sm:hidden  ">
          <Link href={"/"} className="">
            <span className="w-[44px] h-[44px] flex flex-col justify-center items-center rounded-full bg-[#F95623] absolute left-6 top-5">
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
              </svg>
            </span>
          </Link>
        </div>
        <div className="flex flex-col-reverse  md:flex-col mt-10 ">
          <div className="xl:max-w-[970px] lg:max-w-[920px] md:max-w-[500px] lg:mx-auto w-full px-4 -mt-4 sm:-mt-10 md:mt-0">
            <div className="max-w-[530px] ">
              <div className="   ">
                <h2 className="heading-style lg:text-[50px] sm:text-[40px] text-[30px] leading-[130%]  ">
                  Será que a consultoria Natura e Avon é para você?
                </h2>
              </div>
              <div>
                <p className="lg:text-[22px] sm:text-[20px]  text-[14px] font-OfeliaMedium font-medium sm:mt-4  sm:pr-40">
                  Faça o teste e descubra, é anônimo e são só algumas
                  perguntinhas.
                </p>
                <Link
                  href={"/profile-test"}
                  className="common-btn group mt-5 sm:mt-10"
                >
                  <span>Fazer o teste</span>
                  <span className="group-hover:translate-x-2 transition-all duration-300 ease-in-out">
                    <LeftArrow />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="pointer-events-none  relative md:h-[250px] lg:h-[360px] w-full lg:pb-80 2xl:pb-[400px]  ">
            <div className="min-h-[200px]    -mt-10 md:mt-0 ">
              <img
                src="/images/homeHeader-backscreen.png"
                className="h-[300px] lg:h-[400px] w-full hidden sm:block"
                alt="homeHeader"
              />
              <img
                src="/images/profile-consultancy.png"
                className="h-[320px] lg:h-[400px] w-full sm:hidden object-cover object-top"
                alt="homeHeader"
              />
            </div>
            <div className="absolute bottom-[25%] md:bottom-[36%] lg:bottom-[44%] xl:bottom-[50%] 3xl:bottom-[19%]   left-0 w-full  hidden md:block">
              <div className="xl:max-w-[970px] max-w-[920px] mx-auto w-full justify-end flex flex-row  mt-40 ">
                <img
                  src={"/images/Subjectconsultancyimg.png"}
                  className=" ml-auto max-w-[450px]"
                  alt="consultancy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Consultancy;
