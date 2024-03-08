import TopColorBanner from "@/components/common/TopColorBanner";
import { Downarrow } from "../icon";

const Director = () => {
  return (
    <div>
      <div className=" md:hidden flex justify-start gap-14 px-6 mt-[35px]  items-center"></div>
      <h4 className=" text-[18px] md:hidden font-normal mt-[35px] text-center font-suezone -mb-9 leading-[39px]">
        Seu perfil de consultoria é o
      </h4>
      <div className="perfil-bg md:hidden">
        <div className="max-w-[848px] mx-auto flex justify-center items-center ">
          <div className="w-[312px] relative flex justify-center items-center ">
            <div className="rounded-1 flex items-center">
              <img
                className="w-[162px] h-[166px] object-contain mx-auto"
                src="/images/dairector.png"
                alt="Perfil Realizador"
              />
            </div>
          </div>
        </div>
        <h2 className=" text-[36px] -mt-12 px-3 text-center text-white  leading-[44px] font-suezone font-normal ">
          Perfil Realizador
        </h2>
      </div>
      <h5 className="text-[22px] md:hidden px-3  max-w-[301px] mx-auto text-center mt-16 font-roboto leading-[27px] font-normal tracking-[-0.44px]  ">
        Negócios sérios e focados no meu futuro.
      </h5>
      <div className="flex gap-[6px] md:hidden flex-col">
        <h5 className="text-[22px]  max-w-[301px] mx-auto text-center mt-[31px] font-roboto leading-[27px] font-normal tracking-[-0.44px]  ">
          Saiba mais
        </h5>
        <button className="mx-auto w-full flex justify-center ">
          <Downarrow />
        </button>
      </div>

      {/* ########################################################## Desktop VERSION ########################################################## */}
      <div className="hidden md:block">
        <TopColorBanner />
      </div>

      <div className="perfil-bg hidden md:block">
        <div className="max-w-[848px] mx-auto flex justify-center items-center ">
          <div className="w-[312px] relative flex justify-center items-center ">
            <div className="rounded-1 flex items-center">
              <img
                className="w-[162px] h-[166px] object-contain mx-auto"
                src="/images\dairector.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className=" hidden md:flex flex-col text-center w-full   items-center justify-center -mt-[40px]">
          <h4 className=" text-[18px] font-normal font-OfeliaMedium leading-[39px]">
            Seu perfil de consultoria é o
          </h4>
          <h2 className=" text-[50px] mt-3 leading-[44px] font-OfeliaBold font-normal ">
            Perfil Realizador
          </h2>
          <h5 className="text-[22px] font-OfeliaMedium leading-[27px] font-normal tracking-[-0.44px]  mt-4">
            Negócios sérios e focados no meu futuro.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Director;
