import { useRouter } from "next/router";
import { DollerIcon, LocationIcon, PlayIcon, WifiIcon } from "./common/Icons";
import Link from "next/link";

function EarnPoint() {
  const router = useRouter();
  return (
    <>
      <div className="bg-[url(/images/earn-bg2.png)] md:bg-[url(/images/earn-bg2.png)] bg-cover bg-no-repeat  earn-point-bg  mt-10     ">
        <div className="xl:max-w-[970px] max-w-[920px] mx-auto pt-20 pb-5 md:pb-12  px-4">
          <div>
            <span className="bg-americanpink flex items-center justify-center w-16 h-16 sm:w-28 sm:h-28 xl:w-[118px] xl:h-[118px] rounded-full mb-4 -mt-16">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                className="max-w-[28px] sm:max-w-fit"
              >
                <path
                  d="M21.2758 9.58743C27.6631 3.19721 38.0224 3.19968 44.4121 9.58743C50.8018 15.9752 50.8018 26.3352 44.4121 32.7254M37.5191 32.8414C37.5191 41.8784 30.1937 49.2043 21.1574 49.2043C12.1211 49.2043 4.79578 41.8784 4.79578 32.8414C4.79578 23.8044 12.1211 16.4785 21.1574 16.4785C30.1937 16.4785 37.5191 23.8044 37.5191 32.8414Z"
                  stroke="white"
                  strokeWidth="5.70968"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <h2 className="heading-style lg:text-[50px] sm:text-[40px] text-[30px] leading-[115%]  mt-8  mb-4 max-w-[700px] ">
              Com a Consultoria de Beleza você pode:
            </h2>{" "}
            <div className="flex my-9 flex-wrap gap-y-5 md:gap-y-10 md:pb-5 justify-between">
              <div className=" w-full md:w-[49%] flex flex-row items-center gap-2.5 md:gap-4">
                <div className="w-[36px] h-[36px] md:w-[75px] md:h-[75px] min-w-[36px] md:min-w-[75px] md:min-h-[75px] flex flex-col justify-center items-center rounded-full bg-[#EB6619] ">
                  <WifiIcon />
                </div>
                <div>
                  <p className="text-black text-[14px] md:text-[25px] font-OfeliaMedium leading-[150%]">
                    Vender para todo o Brasil sem sair de casa
                  </p>
                </div>
              </div>{" "}
              <div className=" w-full md:w-[49%] flex flex-row items-center gap-2.5 md:gap-4">
                <div className="w-[36px] h-[36px] md:w-[75px] md:h-[75px] min-w-[36px] md:min-w-[75px] md:min-h-[75px] flex flex-col justify-center items-center rounded-full bg-[#EB6619] ">
                  <DollerIcon />
                </div>
                <div>
                  <p className="text-black text-[14px] md:text-[25px] font-OfeliaMedium leading-[150%]">
                    Lucro de até 38%
                  </p>
                </div>
              </div>{" "}
              <div className=" w-full md:w-[49%] flex flex-row items-center gap-2.5 md:gap-4">
                <div className="w-[36px] h-[36px] md:w-[75px] md:h-[75px] min-w-[36px] md:min-w-[75px] md:min-h-[75px] flex flex-col justify-center items-center rounded-full bg-[#EB6619] ">
                  <LocationIcon />
                </div>
                <div>
                  <p className="text-black text-[14px] md:text-[25px] font-OfeliaMedium leading-[150%]">
                    Ferramentas digitais e apoio para as suas atividades
                  </p>
                </div>
              </div>{" "}
              <div className=" w-full md:w-[49%] flex flex-row items-center gap-2.5 md:gap-4">
                <div className="w-[36px] h-[36px] md:w-[75px] md:h-[75px] min-w-[36px] md:min-w-[75px] md:min-h-[75px] flex flex-col justify-center items-center rounded-full bg-[#EB6619] ">
                  <svg
                    className="max-w-[16px] md:max-w-fit h-auto"
                    width="35"
                    height="36"
                    viewBox="0 0 35 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.2502 15.0829C30.4362 15.083 30.6205 15.0453 30.7924 14.972C30.9643 14.8988 31.1204 14.7913 31.252 14.6559C31.3836 14.5205 31.4879 14.3597 31.5591 14.1827C31.6303 14.0058 31.6669 13.8161 31.6668 13.6246V9.24961C31.667 8.94362 31.5735 8.64535 31.3996 8.39713C31.2258 8.14892 30.9805 7.96335 30.6984 7.86676L17.9484 3.49176C17.6574 3.39207 17.3429 3.39207 17.0519 3.49176L4.30192 7.86676C4.01986 7.96335 3.77452 8.14892 3.60069 8.39713C3.42686 8.64535 3.33337 8.94362 3.3335 9.24961V13.6246C3.33345 13.8161 3.37006 14.0058 3.44124 14.1827C3.51241 14.3597 3.61676 14.5205 3.74832 14.6559C3.87988 14.7913 4.03607 14.8988 4.20797 14.972C4.37987 15.0453 4.56411 15.083 4.75016 15.0829H6.16683V25.56C5.34054 25.8596 4.6246 26.4152 4.11729 27.1504C3.60999 27.8856 3.33619 28.7645 3.3335 29.6663V32.5829C3.33345 32.7745 3.37006 32.9641 3.44124 33.1411C3.51241 33.318 3.61676 33.4788 3.74832 33.6143C3.87988 33.7497 4.03607 33.8571 4.20797 33.9304C4.37987 34.0036 4.56411 34.0413 4.75016 34.0413H30.2502C30.4362 34.0413 30.6205 34.0036 30.7924 33.9304C30.9643 33.8571 31.1204 33.7497 31.252 33.6143C31.3836 33.4788 31.4879 33.318 31.5591 33.1411C31.6303 32.9641 31.6669 32.7745 31.6668 32.5829V29.6663C31.6641 28.7645 31.3903 27.8856 30.883 27.1504C30.3757 26.4152 29.6598 25.8596 28.8335 25.56V15.0829H30.2502ZM28.8335 31.1246H6.16683V29.6663C6.1672 29.2796 6.31658 28.9089 6.58218 28.6355C6.84777 28.3621 7.20789 28.2083 7.5835 28.2079H27.4168C27.7924 28.2083 28.1526 28.3621 28.4181 28.6355C28.6837 28.9089 28.8331 29.2796 28.8335 29.6663V31.1246ZM9.00016 25.2913V15.0829H11.8335V25.2913H9.00016ZM14.6668 25.2913V15.0829H20.3335V25.2913H14.6668ZM23.1668 25.2913V15.0829H26.0002V25.2913H23.1668ZM6.16683 12.1663V10.3006L17.5002 6.41126L28.8335 10.3006V12.1663H6.16683Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-black text-[14px] md:text-[25px] font-roboto font-semibold md:font-medium leading-[150%]">
                    Bolsas de estudo para você e para sua família
                  </p>
                </div>
              </div>
            </div>
            <p className=" md:pb-20 pb-8 text-black text-[14px] md:text-[30px]  font-semibold  font-roboto ml-[45px] md:ml-[100px]">
              {" "}
              E muito mais!
            </p>
          </div>
        </div>
        <div className="px-4">
          <Link
            target="_blank"
            href={
              "https://accounts.natura-avon.com/auto?country=brazil&company=natura&utm_source=natura&utm_medium=email&utm_term=crm&utm_content=testegeracoes&utm_campaign=natura_email_crm_testegeracoes_1_v1_botao_meio"
            }
            className="mx-auto mt-[-30px] common-btn group"
          >
            <span>Gostou? Venha fazer parte!</span>
            <span className="group-hover:translate-x-2 transition-all duration-300 ease-in-out">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.87473 13.7159L5.39178 12.2457L9.28454 8.35298H0.163086V6.19247H9.28454L5.39178 2.30611L6.87473 0.829545L13.3179 7.27273L6.87473 13.7159Z"
                  fill="white"
                ></path>
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default EarnPoint;
