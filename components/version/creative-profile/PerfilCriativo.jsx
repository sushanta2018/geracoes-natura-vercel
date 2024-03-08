import TopColorBanner from "@/components/common/TopColorBanner";

const PerfilCriativo = () => {
  return (
    <div>
      <h4 className="text-[18px] md:hidden mt-[35px] text-center -mb-9 leading-[39px] font-medium font-OfeliaMedium">
        Seu perfil de consultoria é o
      </h4>
      <div className="perfil-bg md:hidden">
        <div className="max-w-[848px] mx-auto flex justify-center items-center ">
          <div className="w-[312px] relative flex justify-center items-center ">
            <div className="rounded-2 flex items-center">
              <img
                className="w-[198px] h-[168px] object-contain  mx-auto"
                src="/images/lady-(3).png"
                alt="lady"
              />
            </div>
          </div>
        </div>
        <h2 className=" text-[36px] -mt-12 px-3 text-center text-white  leading-[44px] font-OfeliaBold font-normal ">
          Perfil Criativo
        </h2>
      </div>
      <h5 className="text-[22px] md:hidden px-3  max-w-[301px] mx-auto text-center mt-12 sm:mt-16 font-OfeliaMedium leading-[27px] font-normal tracking-[-0.44px]  ">
        Influencer da beleza com energia contagiante.
      </h5>

      {/* ########################################################## Desktop VERSION ########################################################## */}
      <div className="hidden md:block">
        <TopColorBanner />
      </div>
      <div className="perfil-bg hidden md:block">
        <div className="max-w-[848px] mx-auto flex justify-center items-center ">
          <div className="w-[312px] relative flex justify-center items-center ">
            <div className="rounded-2 flex items-center">
              <img
                className="w-[198px] h-[168px]  object-contain mx-auto"
                src="/images\lady-(3).png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className=" hidden md:flex flex-col text-center w-full   items-center justify-center -mt-[40px]">
          <h4 className=" text-[18px] font-normal font-OfeliaNormal leading-[39px]">
            Seu perfil de consultoria é o
          </h4>
          <h2 className=" text-[50px] mt-3 leading-[44px] font-OfeliaBold ">
            Perfil Criativo
          </h2>
          <h5 className="text-[22px] font-OfeliaMedium leading-[27px] font-normal tracking-[-0.44px]  mt-4">
            Influencer da beleza com energia contagiante.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default PerfilCriativo;
