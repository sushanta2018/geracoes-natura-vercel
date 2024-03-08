import React from "react";
import { LeftArrow, Logo } from "./common/Icons";
import Link from "next/link";
import TopColorBanner from "./common/TopColorBanner";

const HomeHero = () => {
  return (
    <>
      <TopColorBanner />

      <section
        className={` sm:bg-[url("/images/homeHeader-backscreen.png")] her-bg  relative   md:bg-contain bg-no-repeat bg-bottom  h-[700px] lg:h-[660px] xl:h-[660px] 2xl:h-[700px] 3xl:h-[840px]`}
      >
        <nav className="px-4 pt-4">
          <Logo />
        </nav>

        <img
          className="max-w-[210px] sm:max-w-[300px] lg:max-w-[500px] absolute right-0 top-44 sm:top-20 z-10"
          src="/images/homeHeader-image.png"
          alt="Beleza em cada escolha"
        />

        <img
          src="/images/mobile-curve.png"
          alt="mobile-curve.png"
          className="absolute w-full left-0 z-0 top-64 sm:hidden"
        />
        <div className="2xl:max-w-[1490px] xl:max-w-[1120px] lg:max-w-[1020px] mx-auto px-4 sm:flex h-full pt-6 lg:pt-16 xl:pt-20">
          <div className="lg:w-[80%]">
            <div className="md:mt-32 xl:mt-0">
              <h1 className="hidden md:block font-OfeliaBold font-bold text-[32px]  sm:text-5xl lg:text-[52px] xl:text-[55px] 2xl:text-[60px] text-black lg:leading-[71px]">
                Transforme sua vida com a Consultoria de Beleza
              </h1>

              <h2 className="md:hidden font-OfeliaBold font-bold text-[28px] xs:text-[32px]  sm:text-5xl lg:text-[50px] xl:text-[55px] 2xl:text-[60px] text-black lg:leading-[71px]">
                Transforme sua vida
              </h2>
              <h2 className="flex items-center md:hidden font-OfeliaBold font-bold  text-black lg:leading-[71px]">
                <span className="text-[16px] xs:text-[20px]">com a&nbsp;</span>{" "}
                <span className="text-[22px] xs:text-[26px]">
                  Consultoria de Beleza
                </span>
              </h2>
            </div>

            <div className="max-w-[500px] mx-auto">
              <p className="hidden md:block  text-[24px] xl:text-[34px] tracking-[2%] 2xl:my-[90px] md:my-[80px] 3xl:my-[160px] text-white">
                <span className="font-OfeliaBold font-bold">
                  Ganhe dinheiro vendendo
                </span>{" "}
                <br />
                <span className="font-OfeliaExtrabold font-extrabold">
                  produtos que você ama!
                </span>
              </p>
              <Link
                target="_blank"
                href={
                  "https://accounts.natura-avon.com/auto?country=brazil&company=natura&utm_source=natura&utm_medium=email&utm_term=crm&utm_content=testegeracoes&utm_campaign=natura_email_crm_testegeracoes_1_v1_botao_topo"
                }
                className="hidden common-btn group"
              >
                <span>Quero fazer parte</span>
                <span className="group-hover:translate-x-2 transition-all duration-300 ease-in-out">
                  <LeftArrow />
                </span>
              </Link>
              <Link
                target="_blank"
                href={
                  "https://accounts.natura-avon.com/auto?country=brazil&company=natura&utm_source=natura&utm_medium=email&utm_term=crm&utm_content=testegeracoes&utm_campaign=natura_email_crm_testegeracoes_1_v1_botao_topo"
                }
                className="common-btn group mt-5 sm:mt-10 hidden sm:flex"
              >
                <span>Quero fazer parte</span>
                <span className="group-hover:translate-x-2 transition-all duration-300 ease-in-out">
                  <LeftArrow />
                </span>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 mt-[22rem] sm:mt-0">
            <p className="md:hidden font-OfeliaMedium  text-[22px] sm:text-[24px] xl:text-[34px] tracking-[2%] mb-5 text-end text-black">
              Ganhe dinheiro vendendo produtos que{" "}
              <span className="font-extrabold font-OfeliaExtrabold">
                você ama!
              </span>
            </p>
            <Link
              target="_blank"
              href={
                "https://accounts.natura-avon.com/auto?country=brazil&company=natura&utm_source=natura&utm_medium=email&utm_term=crm&utm_content=testegeracoes&utm_campaign=natura_email_crm_testegeracoes_1_v1_botao_topo"
              }
              className="md:hidden group common-btn"
            >
              <span>Quero fazer parte</span>
              <span className="group-hover:translate-x-2 transition-all duration-300 ease-in-out">
                <LeftArrow />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeHero;
