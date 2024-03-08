import TopColorBanner from "@/components/common/TopColorBanner";

const Versatile = () => {
  return (
    <>
      <div className="hidden sm:block">
        <TopColorBanner />
      </div>

      <h4 className="sm:hidden text-[18px] font-normal font-OfeliaBold leading-[39px] text-center mt-4">
        Seu perfil de consultoria é o
      </h4>
      <div className="perfil-bg">
        <div className="max-w-[848px] mx-auto flex justify-center items-center pt-6 lg:pt-10">
          <div className="w-[312px] relative flex justify-center items-center">
            <img
              className="w-[162px] h-[166px] object-contain mx-auto"
              src="/images/perfil-versátilimg.png"
              alt="perfil"
            />
          </div>
        </div>
        <div className="flex flex-col text-center w-full   items-center justify-center">
          <h4 className="hidden sm:block text-[18px] font-normal font-OfeliaBold leading-[39px] ">
            Seu perfil de consultoria é o
          </h4>
          <h2 className="text-[36px] lg:text-[50px] leading-[44px] font-OfeliaBold font-normal text-white sm:text-black -mt-2 sm:mt-0">
            Perfil Versátil
          </h2>
          <h5 className="text-[22px] font-OfeliaMedium leading-[27px] font-normal tracking-[-0.44px]  mt-10 sm:mt-4 max-w-xs sm:max-w-fit mx-auto">
            Uma aprendiz digital em constante adaptação.
          </h5>
        </div>
      </div>
    </>
  );
};

export default Versatile;
