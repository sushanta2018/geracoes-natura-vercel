import { useCalculationProvider } from "@/contexts/CalculationProvider";
import { BackPage, Minus, Plus } from "./EarnIcons";
import TopColorBanner from "../common/TopColorBanner";
import { useRouter } from "next/router";

const CalculateEarn = () => {
  const { totalearn, handleIncrement, handleDecrement } =
    useCalculationProvider();

  const formattedCurrency = (value) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    }).format(value);
  };

  const router = useRouter();

  return (
    <>
      <TopColorBanner />
      <section className="bg-white">
        <div className="max-w-[1000px] mx-auto w-full text-start md:text-center px-6">
          <div className="flex items-center mt-[27px] md:hidden">
            <button
              onClick={() => router.push("/")}
              className="bg-[#f95623] rounded-full p-2.5  w-[44px] h-[44px]"
            >
              <BackPage />
            </button>
            <p className="text-sm font-semibold leading-5 font-roboto text-black ml-[60px]">
              Simular vendas
            </p>
          </div>
          <h1 className="md:mt-[71px] mt-2 text-black font-suezone text-[30px] leading-[39px] md:leading-normal md:text-[50px] font-normal">
            Calcule o quanto você quer ganhar
          </h1>
          <h3 className="text-black font-roboto md:text-[22px] text-sm font-semibold md:leading-normal leading-5 md:font-normal">
            Para calcular, defina o valor que quer ganhar e selecione os
            produtos que gostaria de vender.
          </h3>
        </div>
      </section>
      <div className="sticky top-[-30px] sm:top-[-60px] z-[100] left-0 w-full">
        <div className={`earn-bg  flex items-start justify-center`}>
          <div className="bg-white rounded-[7px] flex items-center justify-between px-2 sm:px-6 pt-[2px] pb-[5px] md:space-x-[27px] md:mt-[78px] mt-10 w-fit">
            <button onClick={handleDecrement} className="w-fit">
              <Minus />
            </button>
            <h1 className="text-black font-medium font-roboto text-[42px] md:text-[53.402px] w-[229px] md:w-[260px] text-center">
              {formattedCurrency(totalearn)}
            </h1>
            <button onClick={handleIncrement} className="w-fit">
              <Plus />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalculateEarn;
