import { useRouter } from "next/router";
import { LeftArrow } from "../common/Icons";

const CreativeVersatileEntrepreneur = () => {
  const router = useRouter();
  return (
    <>
      <section className="relative bg-white py-5 lg:py-12 2xl:py-20 overflow-hidden">
        <img
          className="w-full h-[459px] md:h-[560px] absolute top-[77px] sm:top-[203px] md:top-[136px] lg:top-[99px]"
          src="/images/are-you-doubt-bg-img.png"
          alt="are-you-doubt"
        />
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto pl-4 md:px-4 relative flex items-end justify-between">
          <div className="w-1/2 hidden md:block ">
            <span className="bg-americanpink  flex items-center justify-center w-25 h-25 md:w-[118px] md:h-[118px] rounded-full mb-4">
              <svg
                width="80"
                height="80"
                viewBox="0 0 62 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="62" height="62" rx="31" fill="#FF6E9E" />
                <path
                  d="M37.3878 26.2083C37.3877 24.7316 36.9004 23.2961 36.0014 22.1245C35.1024 20.953 33.8419 20.1108 32.4155 19.7286C30.9891 19.3464 29.4764 19.4455 28.112 20.0106C26.7477 20.5758 25.6079 21.5753 24.8695 22.8542C24.6157 23.2945 24.5471 23.8176 24.6788 24.3085C24.8105 24.7993 25.1318 25.2178 25.5719 25.4719C26.0121 25.726 26.5352 25.7949 27.0261 25.6634C27.5171 25.5319 27.9357 25.2109 28.19 24.7708C28.4427 24.3342 28.8057 23.9716 29.2425 23.7193C29.6794 23.467 30.1749 23.3339 30.6794 23.3333C31.4419 23.3333 32.1732 23.6362 32.7124 24.1754C33.2515 24.7146 33.5544 25.4458 33.5544 26.2083C33.5544 26.9708 33.2515 27.7021 32.7124 28.2413C32.1732 28.7804 31.4419 29.0833 30.6794 29.0833H30.6748C30.5516 29.0957 30.4301 29.1205 30.312 29.1575C30.1828 29.1709 30.0553 29.197 29.9313 29.2354C29.8258 29.2928 29.726 29.3601 29.6332 29.4364C29.5232 29.4963 29.4192 29.5667 29.3227 29.6468C29.2366 29.7496 29.1614 29.8612 29.0984 29.9797C29.0285 30.0661 28.9665 30.1586 28.9131 30.256C28.8714 30.3881 28.8439 30.5243 28.8309 30.6622C28.7976 30.7724 28.7747 30.8855 28.7628 31V32.9167L28.7672 32.9384L28.7693 33.8797C28.7706 34.3872 28.9731 34.8734 29.3324 35.2319C29.6917 35.5903 30.1785 35.7916 30.686 35.7917H30.6907C31.199 35.7904 31.686 35.5873 32.0445 35.227C32.4031 34.8666 32.6039 34.3787 32.6027 33.8703L32.5997 32.6027C33.9789 32.1927 35.1893 31.3494 36.0517 30.1977C36.9141 29.046 37.3826 27.6471 37.3878 26.2083ZM29.3327 39.2225C29.0636 39.4894 28.8797 39.8301 28.8042 40.2015C28.7286 40.573 28.765 40.9584 28.9085 41.3092C29.052 41.66 29.2964 41.9604 29.6106 42.1723C29.9248 42.3843 30.2948 42.4983 30.6738 42.5C31.1821 42.4959 31.6695 42.2969 32.0355 41.9442C32.3913 41.5806 32.5905 41.0921 32.5905 40.5834C32.5905 40.0747 32.3913 39.5863 32.0355 39.2227C31.6686 38.8807 31.1857 38.6906 30.6841 38.6905C30.1826 38.6905 29.6997 38.8806 29.3327 39.2225Z"
                  fill="white"
                />
              </svg>
            </span>
            <h2 className="heading-style mb-4 mt-16">Tá na dúvida?</h2>
            <p className="paragraph-style max-w-sm mb-4">
              Descubra em um minutinho qual é a consultoria ideal para você.
            </p>
            <button
              onClick={() => router.push("/consultancy")}
              className="mt-10 common-btn group"
            >
              <span>Fazer o teste de perfil</span>
              <span className="group-hover:translate-x-2 transition-all duration-300 ease-in-out">
                <LeftArrow />
              </span>
            </button>
          </div>
          <div className="hidden md:block sm:w-1/2 max-w-[456px]  relative  overflow-hidden  ">
            <div className="lg:absolute hidden lg:block -bottom-12 -right-10 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="515"
                height="133"
                viewBox="0 0 515 133"
                fill="none"
                className="w-full"
              >
                <path
                  d="M396.5 62.5C443.7 47.7 468.167 14.6667 474.5 0L515 111L269 133L0.5 111L148.5 81C211.5 81 349.3 77.3 396.5 62.5Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className=" md:hidden mt-5 ">
            <div className="flex justify-center gap-3 items-center">
              <div>
                <span className="bg-americanpink flex items-center justify-center w-20 h-20 rounded-full mb-4">
                  <svg
                    width="87"
                    height="87"
                    viewBox="0 0 87 87"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M55.3474 34.6123C55.3474 31.8731 54.4435 29.2106 52.776 27.0375C51.1084 24.8644 48.7705 23.3023 46.1247 22.5933C43.4789 21.8844 40.6731 22.0683 38.1424 23.1165C35.6118 24.1648 33.4977 26.0187 32.1281 28.3908C31.6573 29.2075 31.53 30.1778 31.7743 31.0883C32.0186 31.9988 32.6145 32.775 33.431 33.2463C34.2474 33.7176 35.2176 33.8453 36.1282 33.6015C37.0389 33.3576 37.8154 32.7622 38.2871 31.9459C38.7558 31.136 39.429 30.4634 40.2394 29.9955C41.0497 29.5276 41.9688 29.2807 42.9046 29.2796C44.3189 29.2796 45.6753 29.8414 46.6753 30.8415C47.6754 31.8416 48.2372 33.198 48.2372 34.6123C48.2372 36.0266 47.6754 37.383 46.6753 38.383C45.6753 39.3831 44.3189 39.9449 42.9046 39.9449H42.8959C42.6675 39.9678 42.442 40.0139 42.223 40.0825C41.9835 40.1074 41.747 40.1558 41.5169 40.227C41.3212 40.3334 41.136 40.4582 40.964 40.5998C40.7599 40.7109 40.567 40.8415 40.3881 40.99C40.2283 41.1807 40.0888 41.3877 39.972 41.6075C39.8424 41.7678 39.7274 41.9393 39.6282 42.12C39.551 42.3651 39.4999 42.6176 39.4759 42.8734C39.414 43.0778 39.3717 43.2876 39.3494 43.5V47.0552L39.3577 47.0955L39.3616 48.8414C39.3641 49.7827 39.7397 50.6846 40.4061 51.3494C41.0725 52.0143 41.9754 52.3877 42.9167 52.3878H42.9254C43.8682 52.3855 44.7716 52.0087 45.4366 51.3404C46.1017 50.672 46.4741 49.7669 46.4718 48.824L46.4664 46.4728C49.0245 45.7123 51.2696 44.1481 52.8692 42.0119C54.4688 39.8757 55.3378 37.281 55.3474 34.6123ZM40.4066 58.7515C39.9074 59.2465 39.5663 59.8785 39.4262 60.5674C39.2862 61.2563 39.3535 61.9713 39.6198 62.622C39.886 63.2726 40.3392 63.8297 40.922 64.2229C41.5048 64.616 42.1911 64.8275 42.8941 64.8307C43.837 64.823 44.741 64.454 45.4199 63.7997C46.0797 63.1253 46.4492 62.2193 46.4492 61.2757C46.4492 60.3322 46.0797 59.4262 45.4199 58.7517C44.7393 58.1175 43.8436 57.7648 42.9133 57.7647C41.983 57.7647 41.0872 58.1173 40.4066 58.7515V58.7515Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <h2 className="text-[30px] font-normal font-suezone text-black mb-4 mt-16">
                  Ainda tem mais!
                </h2>
              </div>
              <div className="max-w-[456px]">
                <img
                  src="/images/Criativaemprendedora.png"
                  alt="Ainda tem mais!"
                  className="ml-auto w-full max-w-[220px]"
                />
              </div>
            </div>
            <p className="paragraph-style lg:text-[30px] sm:text-[20px] font-roboto text-[16px] font-semibold  leading-[140%] mt-7  mb-4">
              Descubra em um minutinho qual é a consultoria ideal para você.
            </p>
            <div className="mt-3 w-full pr-3">
              <button
                onClick={() => router.push("/consultancy")}
                className="mt-5 common-btn group w-full"
              >
                <span>Fazer o teste de perfil</span>
                <span className="group-hover:translate-x-2 transition-all duration-300 ease-in-out">
                  <LeftArrow />
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* <img
          className="absolute bottom-0 xl:-bottom-[82px] -right-16 z-10"
          src="/images/Criativaemprendedorabottomvector.png"
          alt="Criativaemprendedorabottomvector"
        /> */}
        <img
          src={"/images/Criativaemprendedora.png"}
          alt="Ainda tem mais!"
          className="ml-auto absolute right-0 top-0 xl:-top-20 max-w-[200px] sm:max-w-xs lg:max-w-[400px] xl:max-w-[450px] hidden sm:block"
        />
      </section>
    </>
  );
};

export default CreativeVersatileEntrepreneur;
