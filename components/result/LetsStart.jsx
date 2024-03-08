import Link from "next/link";
import { LeftArrow } from "../common/Icons";

function LetsStart() {
  return (
    <>
      <div className="pl-4 lg:px-10 sm:bg-[url(/images/BackscreenBoracomençar.png)] bg-[url(/images/mobile-curve.png)] bg-cover bg-no-repeat sm:mt-40 sm:h-[360px] 2xl:h-[400px] mb-7 md:mb-0 relative">
        <img
          className="max-w-[190px] lg:max-w-[280px] w-full object-contain absolute right-0 -top-10 sm:right-auto"
          src={"/images/Bora-comecar.png"}
          alt="Bora começar?"
        />
        <div className=" xl:max-w-[970px] max-w-[920px] mx-auto px-4 flex flex-wrap  items-center sm:items-start  pt-8 lg:pt-28 xl:pt-36">
          <div className="w-1/2 order-2 lg:order-1 "></div>
          <div className="w-1/2 order-1 lg:order-2">
            <div>
              <p className="text-white text-[30px] md:text-[45px] lg:text-[50px] font-suezone mt-10 lg:mt-0 lg:mb-20 sm:text-center mb-10">
                Bora começar?
              </p>
              <div className="hidden lg:block ">
                <Link
                  target="_blank"
                  href={
                    "https://accounts.natura-avon.com/auto?country=brazil&company=natura&utm_source=natura&utm_medium=email&utm_term=crm&utm_content=testegeracoes&utm_campaign=natura_email_crm_testegeracoes_1_v1_botao_simulador"
                  }
                  className="hidden sm:flex common-btn group"
                >
                  <span>Quero fazer parte</span>
                  <span className="group-hover:translate-x-2 transition-all duration-300 ease-in-out">
                    <LeftArrow />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:hidden order-3 w-full justify-center flex mt-12 sm:mt-0">
            <Link
              target="_blank"
              href={
                "https://accounts.natura-avon.com/auto?country=brazil&company=natura&utm_source=natura&utm_medium=email&utm_term=crm&utm_content=testegeracoes&utm_campaign=natura_email_crm_testegeracoes_1_v1_botao_simulador"
              }
              className="common-btn group"
            >
              <span>Quero fazer parte</span>
              <span className="group-hover:translate-x-2 transition-all duration-300 ease-in-out">
                <LeftArrow />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default LetsStart;
