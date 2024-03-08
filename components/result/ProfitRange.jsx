import React from "react";

const ProfitRange = ({ children }) => {
  return (
    <div className="relative group ">
      {children}
      <div className="hidden group-hover:block absolute bg-gray-800 text-white  rounded-md shadow-md bg-[url(/images/tool-tip-bg-img.png)] w-[371px] h-[368px] z-50 -left-[168px] bottom-6">
        <div className="flex flex-col justify-center items-center">
          <p className=" text-black text-[14px] font-semibold max-w-[216px]  mx-auto pt-[70px] text-center">
            A consultoria Natura e Avon oferece cinco diferentes faixas de
            lucro: 20%, 30%, 32%, 35% e 38%. <br /> <br /> Os cálculos dessa
            página são feitos com base em
            <u>
              <b> 20%,</b>
            </u>
            que é o percentual para quem está começando. <br /> <br /> Conforme
            você vender e acumular pontos, pode chegar aos lucros mais altos!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfitRange;
