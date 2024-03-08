import { useCalculationProvider } from "@/contexts/CalculationProvider";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProductSearchCard from "../common/ProductSearchCard";
import TopColorBanner from "../common/TopColorBanner";

function ResultHero() {
  const [isLoading, setLoading] = useState(true);

  const {
    collectItem,
    calculateQuantities,
    totalMoney,
    totalearn,
    handleIncrement,
    handleDecrement,
  } = useCalculationProvider();

  useEffect(() => {
    calculateQuantities(totalearn, collectItem);
    setLoading(false);
  }, [totalearn, calculateQuantities, collectItem]);

  return (
    <>
      <div>
        <div className="sticky bg-white top-0 left-0 w-full z-10">
          <TopColorBanner />
          <div className="mt-10 sm:mt-0 flex flex-row  justify-center items-center px-6 sm:hidden  ">
            <Link href={"/"}>
              <span className="w-[44px] h-[44px] flex flex-col justify-center items-center rounded-full bg-[#E5004B] absolute left-6 -mt-6">
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

            <p className="texxt-black text-[14px] font-semibold ">
              Simular vendas
            </p>
          </div>
          <div className="sm:bg-[#ff6e9e] py-10 sm:py-5 bg-[url(/images/resulthero.png)] sm:bg-none bg-center bg-cover mt-4 sm:mt-0  ">
            <p className="text-white text-[14px] sm:text-[20px] font-roboto font-bold  text-center ">
              O resultado da sua simulação é
            </p>

            <div className="flex items-center space-x-7 justify-center">
              <button onClick={handleDecrement}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="15" cy="15" r="15" fill="#E3E8FF" />
                  <path
                    d="M8.20703 15.2061H22.207"
                    stroke="#3E4B99"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              <p className="text-white text-[42px]  font-roboto font-black  text-center ">
                R$&nbsp;
                {totalMoney.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                })}
              </p>
              <button onClick={handleIncrement}>
                {" "}
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="15" cy="15" r="15" fill="#E3E8FF" />
                  <path
                    d="M15.2389 11.0713V19.4046M11.0723 15.238H19.4056"
                    stroke="#3E4B99"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-[700px] mx-auto px-4 mt-10">
          <div className="grid gap-4 mb-8 sm:mb-16">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <>
                {collectItem && collectItem.length > 0 ? (
                  collectItem.map((obj, index) => (
                    <ProductSearchCard key={index} {...obj} />
                  ))
                ) : (
                  <p className="font-bold text-black text-xl text-center flex items-center justify-center mx-auto mt-8">
                    No products selected!
                  </p>
                )}
              </>
            )}
          </div>
          <div className="max-w-xl mx-auto">
            <p className="text-black text-[14px] font-medium">
              Calculamos essa simulação com um ganho de 20%, mas ele pode ser
              ainda maior*
            </p>
            <p className="text-black text-[10px] font-medium">
              *Quanto mais você vende, mais você evolui no plano de crescimento,
              podendo ganhar até 38% de lucro.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <Link
              href="/earn"
              className="flex items-center justify-center gap-x-2 w-[271px] h-[54px] text-white text-[18px] font-suezone bg-[#ff6e9e] rounded-[30px] my-6 sm:my-8 transition-all duration-300 ease-in-out hover:bg-opacity-80 "
            >
              Editar produtos
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M11 3.99998H4C3.46957 3.99998 2.96086 4.2107 2.58579 4.58577C2.21071 4.96084 2 5.46955 2 5.99998V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13M18.5 2.49998C18.8978 2.10216 19.4374 1.87866 20 1.87866C20.5626 1.87866 21.1022 2.10216 21.5 2.49998C21.8978 2.89781 22.1213 3.43737 22.1213 3.99998C22.1213 4.56259 21.8978 5.10216 21.5 5.49998L12 15L8 16L9 12L18.5 2.49998Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResultHero;
