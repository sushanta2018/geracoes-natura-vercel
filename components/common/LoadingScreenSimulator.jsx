import React from "react";
import Loader from "./Loader";
import TopColorBanner from "./TopColorBanner";

const LoadingScreenSimulator = () => {
  return (
    <div className="h-[calc(100vh-188px)] w-full">
      <TopColorBanner />
      <div className="max-w-[920px] mx-auto w-full px-4 flex flex-col justify-center items-center mt-[77px]">
        <h3 className="text-[30px]  md:text-[50px] text-center text-black font-OfeliaMedium font-medium leading-[39px] md:leading-[60px] mb-4">
          Estamos calculando os melhores valores para você...
        </h3>
        <div>
          <Loader />
        </div>
      </div>

      <div className="w-full">
        <img
          src="/images/homeHeader-backscreen.png"
          className="h-[300px] lg:h-[400px] w-full hidden sm:block"
          alt="homeHeader"
        />
        <img
          src="/images/mobile-curve.png"
          className="h-[300px] lg:h-[400px] w-full sm:hidden"
          alt="homeHeader"
        />
      </div>
    </div>
  );
};

export default LoadingScreenSimulator;
