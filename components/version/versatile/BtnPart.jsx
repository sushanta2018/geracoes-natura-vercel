import CopyPageLink from "@/components/common/CopyPageLink";
import { LeftArrow } from "@/components/common/Icons";
import Link from "next/link";
import { ToRetake, ToReturn } from "../icon";

const BtnPart = () => {
  return (
    <>
      <div className="mb-[42px] md:mb-[72px]">
        <div className="px-3 ">
          <Link
            target="_blank"
            href={
              "https://accounts.natura-avon.com/auto?country=brazil&company=natura&utm_source=natura&utm_medium=email&utm_term=crm&utm_content=testegeracoes&utm_campaign=natura_email_crm_testegeracoes_1_v1_botao_resultadoteste"
            }
            className="common-btn w-full max-w-[610px] mx-auto group mt-7"
          >
            <span>Quero fazer parte</span>
            <span className="group-hover:translate-x-2 transition-all duration-300 ease-in-out">
              <LeftArrow />
            </span>
          </Link>
        </div>
        <div className="p-[10px] mt-[30px]">
          <div className="max-w-[350px] mx-auto justify-between flex gap-4 w-full">
            <CopyPageLink />
            <Link
              href="/profile-test"
              passHref
              className="flex flex-col  gap-[10px]  items-center"
            >
              <ToRetake />
              <h3 className="text-base font-medium  text-center leading-[22px] font-OfeliaMedium">
                Refazer <br /> o teste
              </h3>
            </Link>
            <Link
              href="/"
              passHref
              className="flex flex-col gap-[10px]  items-center"
            >
              <ToReturn />
              <h3 className="text-base font-medium  text-center leading-[22px] font-OfeliaMedium">
                Voltar para a <br /> página principal
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BtnPart;
