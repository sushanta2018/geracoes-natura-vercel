import { A11y, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Adaptation, Rocket } from "../icon";

const VersatileSlider = () => {
  return (
    <>
      <div>
        <div className="bg-[#FF6E9E] py-10 my-10 hidden md:block">
          <div className="px-6">
            <div className="max-w-[848px] w-full mx-auto justify-center flex flex-wrap gap-[30px] h-auto">
              <div className="flex flex-col bg-white !max-w-[291px] !w-full rounded-[20.359px] px-[30px] py-[25.4px] border-ryzadust h-auto">
                <h2 className="text-ryzadust font-normal leading-[39px] font-OfeliaBold text-xl p-[10px] ">
                  Descrição do perfil
                </h2>
                <div className="text-center py-[30px] gap-y-3 flex flex-col text-base font-medium leading-[22px] font-inter text-black">
                  <h3>
                    Você é aquele tipo de pessoa que está
                    <span className="!font-OfeliaBold !font-bold">
                      {" "}
                      sempre pronta para a próxima grande novidade
                    </span>
                    , e seu apetite por conhecimento faz você se destacar
                  </h3>
                  <h4>
                    Você é{" "}
                    <span className="!font-OfeliaBold !font-bold">
                      tão versátil
                    </span>{" "}
                    que as tendências mais recentes e técnicas de vendas são o
                    seu dia a dia.
                  </h4>
                  <p>
                    Você{" "}
                    <span className="!font-OfeliaBold !font-bold">
                      {" "}
                      arrasa na adaptação,
                    </span>{" "}
                    e sua capacidade de aprender{" "}
                    <span className="!font-OfeliaBold !font-bold">
                      Seus pontos fortes de moda.
                    </span>
                    Desafios? <br />
                    <span>
                      Para você são apenas oportunidades disfarçadas. 💅🏼
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col bg-white max-w-[299px] w-full rounded-[20.359px] px-[30px] py-[25.4px] border border-ryzadust h-auto">
                <h2 className="text-ryzadust font-normal leading-[39px] font-OfeliaBold text-xl p-[10px]">
                  Seus pontos fortes
                </h2>
                <div className="flex flex-col justify-center items-center gap-2 mt-7">
                  <Rocket />
                  <div className="flex flex-col  text-center ">
                    <h5 className="font-OfeliaBold text-base font-bold leading-[22px] text-black">
                      Resiliência:
                    </h5>
                    <p className="text-base font-medium leading-[22px] font-inter mt-3">
                      Você é capaz de lidar com rejeições e desafios de forma
                      positiva.
                    </p>
                  </div>

                  <Adaptation />
                  <div className="flex flex-col  text-center ">
                    <h5 className=" font-OfeliaBold text-base font-bold leading-[22px] text-black">
                      Adaptação:
                    </h5>
                    <p className="text-base font-medium leading-[22px] font-inter mt-3">
                      Você tem a habilidade de se ajustar a diferentes ambientes
                      e públicos;
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col bg-white  !max-w-[291px] !w-full rounded-[20.359px] py-[25.4px] pl-[25.4px] pr-[12px] border border-[#EB6619] h-auto">
                <h2 className="text-ryzadust font-normal p-[10px] leading-[25px] font-suezone text-xl w-full max-w-[200px]">
                  A gente fortalece seu perfil com
                </h2>
                <div className="flex flex-col text-center text-base leading-[22px] space-y-5 mt-[30px] font-inter">
                  <div className="flex flex-col">
                    <h3 className="font-OfeliaBold">Lucro Atrativo:</h3>
                    <p className="font-medium">
                      Margens de 20% a 38%, para você se destacar em diversos
                      cenários de vendas.
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-OfeliaBold">Desenvolvimento: </h3>
                    <p className="font-medium">
                      Treinamentos sobre produtos, técnicas de vendas e
                      desenvolvimento pessoal para ajudar a aprimorar
                      habilidades.
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-OfeliaBold">
                      Flexibilidade de horários:
                    </h3>
                    <p className="font-medium">
                      Você escolhe seus horários. É o encaixe perfeito da sua
                      vida pessoal com a profissional.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col bg-white !max-w-[291px] !w-full rounded-[20.359px] p-[25.4px] border border-[#EB6619] h-auto">
                <h2 className="text-ryzadust font-normal leading-[25px] font-suezone text-xl max-w-[200px] p-[10px]">
                  Soluções para quem é Director
                </h2>
                <div className="flex flex-col text-center text-base leading-[22px] space-y-5 mt-[30px] font-inter">
                  <div className="flex flex-col">
                    <h3 className="font-OfeliaBold">• Espaço Digital • </h3>
                    <p className="font-medium">
                      Venda para todo o brasil, sem investir em estoque e sem
                      sair de casa.
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-OfeliaBold">• Natura Entrega •</h3>
                    <p className="font-medium">
                      Realize a compra para seu cliente que entregamos no
                      endereço dele, sem custo adicional.
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-OfeliaBold">• Emana Pay • </h3>
                    <p className="font-medium">
                      Use um banco digital para receber suas vendas, pagar
                      boletos, fazer pix, usar cartão de crédito e muito mais.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#EB6619] py-10 my-10 md:hidden overflow-hidden pl-3">
        <div className="swiper-container profile-swiper">
          <Swiper
            modules={[Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={1.1}
            loop={false}
            className="mySwiperReturn"
          >
            <SwiperSlide>
              <div className="h-[500px] relative rounded-[20.359px] px-[30px] py-[25.4px] border-[#EB6619] bg-white">
                <div className="flex flex-col h-full">
                  <h2 className="text-ryzadust font-normal leading-[39px] font-OfeliaBold text-xl">
                    Descrição do perfil
                  </h2>
                  <div className="text-center py-[30px] gap-y-1.5 flex flex-col text-base font-medium leading-[22px] font-inter text-black">
                    <h3>
                      Você é aquele tipo de pessoa que está
                      <span className="!font-OfeliaBold !font-bold">
                        {" "}
                        sempre pronta para a próxima grande novidade
                      </span>
                      , e seu apetite por conhecimento faz você se destacar
                    </h3>
                    <h4>
                      Você é{" "}
                      <span className="!font-OfeliaBold !font-bold">
                        tão versátil
                      </span>{" "}
                      que as tendências mais recentes e técnicas de vendas são o
                      seu dia a dia.
                    </h4>
                    <p>
                      Você{" "}
                      <span className="!font-OfeliaBold !font-bold">
                        {" "}
                        arrasa na adaptação,
                      </span>{" "}
                      e sua capacidade de aprender{" "}
                      <span className="!font-OfeliaBold !font-bold">
                        Seus pontos fortes de moda.
                      </span>
                      Desafios? <br />
                      <span>
                        Para você são apenas oportunidades disfarçadas. 💅🏼
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[500px] relative rounded-[20.359px] px-[30px] py-[25.4px] border-[#EB6619] bg-white">
                <div className="flex flex-col h-full">
                  <h2 className="text-ryzadust font-normal leading-[39px] font-OfeliaBold text-xl">
                    Seus pontos fortes
                  </h2>
                  <div className="flex flex-col justify-center items-center gap-2 mt-6">
                    <Rocket />
                    <div className="flex flex-col  text-center ">
                      <h5 className=" font-inter text-base font-bold leading-[22px] text-black">
                        Resiliência:
                      </h5>
                      <p className="text-base font-medium leading-[22px] font-inter mt-2">
                        Você é capaz de lidar com rejeições e desafios de forma
                        positiva.
                      </p>
                    </div>

                    <Adaptation />
                    <div className="flex flex-col  text-center ">
                      <h5 className=" font-inter text-base font-bold leading-[22px] text-black">
                        Adaptação:
                      </h5>
                      <p className="text-base font-medium leading-[22px] font-inter mt-2">
                        Você tem a habilidade de se ajustar a diferentes
                        ambientes e públicos;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[500px] relative rounded-[20.359px] px-[30px] py-[25.4px] border-[#EB6619] bg-white">
                <div className="flex flex-col h-full">
                  <h2 className="text-ryzadust font-normal leading-[25px] font-suezone text-xl max-w-[167px]">
                    A gente fortalece seu perfil com
                  </h2>
                  <div className="flex flex-col text-center text-base leading-[22px] space-y-3 mt-[30px] font-inter">
                    <div className="flex flex-col">
                      <h3 className="font-bold">Lucro Atrativo:</h3>
                      <p className="font-medium">
                        Margens de 20% a 38%, para você se destacar em diversos
                        cenários de vendas.
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-bold">Desenvolvimento: </h3>
                      <p className="font-medium">
                        Treinamentos sobre produtos, técnicas de vendas e
                        desenvolvimento pessoal para ajudar a aprimorar
                        habilidades.
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-bold">Flexibilidade de horários:</h3>
                      <p className="font-medium">
                        Você escolhe seus horários. É o encaixe perfeito da sua
                        vida pessoal com a profissional.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[500px] relative rounded-[20.359px] px-[30px] py-[25.4px] border-[#EB6619] bg-white">
                <div className="flex flex-col h-full">
                  <h2 className="text-ryzadust font-normal leading-[25px] font-suezone text-xl max-w-[167px]">
                    Soluções para quem é Director
                  </h2>
                  <div className="flex flex-col text-center text-base leading-[22px] space-y-3 mt-[30px] font-inter">
                    <div className="flex flex-col">
                      <h3 className="font-bold">• Espaço Digital • </h3>
                      <p className="font-medium">
                        Venda para todo o brasil, sem investir em estoque e sem
                        sair de casa.
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-bold">• Natura Entrega •</h3>
                      <p className="font-medium">
                        Realize a compra para seu cliente que entregamos no
                        endereço dele, sem custo adicional.
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-bold">• Emana Pay • </h3>
                      <p className="font-medium">
                        Use um banco digital para receber suas vendas, pagar
                        boletos, fazer pix, usar cartão de crédito e muito mais.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default VersatileSlider;
