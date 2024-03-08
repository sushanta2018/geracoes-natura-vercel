import { A11y, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { RaisingArrow, Sun } from "../icon";

const DirectorSlider = () => {
  return (
    <>
      <div className="bg-[#FF6E9E] my-10 py-10 hidden md:block">
        <div className="px-6">
          <div className="max-w-[848px] w-full mx-auto justify-center flex flex-wrap gap-[30px] h-auto">
            <div className="flex flex-col bg-white !max-w-[291px] !w-full rounded-[20.359px] px-[30px] py-[25.4px] border-ryzadust h-auto">
              <h2 className="text-ryzadust font-OfeliaBold font-bold leading-[39px] text-xl p-[10px] ">
                Descrição do perfil
              </h2>
              <div className="text-center py-[30px] gap-y-3 flex flex-col text-base font-medium leading-[22px] font-OfeliaMedium text-black">
                <h3>
                  Para você, a consultoria Natura e Avon é mais do que apenas um
                  hobby, é uma{" "}
                  <span className="font-bold font-OfeliaBold">
                    {" "}
                    carreira em construção.
                  </span>
                </h3>
                <h4>
                  Você é uma pessoa organizada, costuma administrar seu tempo
                  com precisão e{" "}
                  <span className="font-bold font-OfeliaBold">
                    não brinca em serviço{" "}
                  </span>{" "}
                  quando se trata de transformar suas vendas em um sucesso.
                </h4>
                <p>
                  Para você, explorar estratégias digitais e aprimorar sua
                  abordagem presencial fazem parte do seu DNA empreendedor.
                </p>
              </div>
            </div>
            <div className="flex flex-col bg-white max-w-[299px] w-full rounded-[20.359px] px-[30px] py-[25.4px] border border-ryzadust h-auto">
              <h2 className="text-ryzadust font-bold leading-[39px] font-OfeliaBold text-xl p-[10px]">
                Seus pontos fortes
              </h2>
              <div className="flex flex-col justify-center items-center gap-2 mt-7">
                <Sun />
                <div className="flex flex-col  text-center">
                  <h5 className="font-OfeliaBold text-base font-bold leading-[22px] text-black">
                    Visão de Negócio:
                  </h5>
                  <p className="text-base font-medium leading-[22px] font-OfeliaMedium mt-3">
                    Você tem uma visão clara dos seus objetivos edas estratégias
                    para alcançar suas metas;
                  </p>
                </div>

                <RaisingArrow />
                <div className="flex flex-col  text-center ">
                  <h5 className="font-OfeliaBold text-base font-bold leading-[22px] text-black">
                    Inovação:
                  </h5>
                  <p className="text-base font-medium leading-[22px] font-OfeliaMedium mt-3">
                    Você sempre está em busca de novas ideias para alcançar e
                    engajar as pessoas.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-white  !max-w-[291px] !w-full rounded-[20.359px] py-[25.4px] pl-[25.4px] pr-[12px] border border-[#EB6619] h-auto">
              <h2 className="text-ryzadust font-normal p-[10px] leading-[25px] font-OfeliaBold text-xl w-full max-w-[200px]">
                A gente fortalece seu perfil com
              </h2>
              <div className="flex flex-col text-center text-base leading-[22px] space-y-5 mt-[30px] font-roboto">
                <div className="flex flex-col">
                  <h3 className="font-bold font-OfeliaBold">Lucro Atrativo:</h3>
                  <p className="font-medium font-OfeliaMedium">
                    Margens de 20% a 38%, para você se destacar em diversos
                    cenários de vendas.
                  </p>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-bold font-OfeliaBold">
                    Desenvolvimento Profissional{" "}
                  </h3>
                  <p className="font-medium font-OfeliaMedium">
                    Na Consultoria, você têm acesso a cursos online, workshops e
                    lives relacionados a vendas, marketing e habilidades de
                    comunicação.
                  </p>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-bold font-OfeliaBold">
                    Reconhecimento e premiações:
                  </h3>
                  <p className="font-medium font-OfeliaMedium">
                    Premiamos as pessoas consultorias por vendas e liderança,
                    com brindes exclusivos, produtos, viagens e certificados.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-white !max-w-[291px] !w-full rounded-[20.359px] p-[25.4px] border border-[#EB6619] h-auto">
              <h2 className="text-ryzadust font-normal leading-[25px] font-OfeliaBold text-xl max-w-[200px] p-[10px]">
                Soluções para quem é Realizador
              </h2>
              <div className="flex flex-col text-center text-base leading-[22px] space-y-5 mt-[30px] font-roboto">
                <div className="flex flex-col">
                  <h3 className="font-bold font-OfeliaBold">
                    • Você em Rede •{" "}
                  </h3>
                  <p className="font-medium font-OfeliaMedium">
                    Você será parte de uma rede de mais de 4 milhões de pessoas
                    consultoras de beleza que trocam e aprendem entre si.
                  </p>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-bold font-OfeliaBold">
                    • Oportunidades de Ganhos •
                  </h3>
                  <p className="font-medium font-OfeliaMedium">
                    Faça parte de um time de Influenciadores e/ou Treinadores,
                    ampliando seus ganhos.
                  </p>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-bold font-OfeliaBold">• Emana Pay • </h3>
                  <p className="font-medium font-OfeliaMedium">
                    Use um banco digital para receber suas vendas, pagar
                    boletos, fazer pix, usar cartão de crédito e muito mais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-saffron md:hidden overflow-hidden">
        <div className="swiper-container profile-swiper">
          <Swiper
            modules={[Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={1.1}
            loop={false}
            className="mySwiperReturn"
          >
            <SwiperSlide>
              <div className="h-[550px] relative rounded-[20.359px] px-[30px] py-[25.4px] border-[#EB6619] bg-white">
                <div className="flex flex-col h-full">
                  <h2 className="text-ryzadust font-bold leading-[39px] font-OfeliaBold text-xl">
                    Descrição do perfil
                  </h2>
                  <div className="text-center py-[30px] gap-y-1.5 flex flex-col text-base font-medium leading-[22px] font-OfeliaMedium text-black">
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
              <div className="h-[550px] relative rounded-[20.359px] px-[30px] py-[25.4px] border-[#EB6619] bg-white">
                <div className="flex flex-col h-full">
                  <h2 className="text-ryzadust font-normal leading-[39px] font-suezone text-xl">
                    Seus pontos fortes
                  </h2>
                  <div className="flex flex-col justify-center items-center gap-2 mt-6">
                    <Sun />
                    <div className="flex flex-col  text-center">
                      <h5 className=" font-OfeliaBold text-base font-bold leading-[22px] text-black">
                        Visão de Negócio:
                      </h5>
                      <p className="text-base font-medium leading-[22px] font-OfeliaMedium mt-2">
                        Você tem uma visão clara dos seus objetivos edas
                        estratégias para alcançar suas metas;
                      </p>
                    </div>

                    <RaisingArrow />
                    <div className="flex flex-col  text-center ">
                      <h5 className="font-OfeliaBold text-base font-bold leading-[22px] text-black">
                        Inovação:
                      </h5>
                      <p className="text-base font-medium leading-[22px] font-OfeliaMedium mt-2">
                        Você sempre está em busca de novas ideias para alcançar
                        e engajar as pessoas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[550px] relative rounded-[20.359px] px-[30px] py-[25.4px] border-[#EB6619] bg-white">
                <div className="flex flex-col h-full">
                  <h2 className="text-ryzadust font-normal leading-[25px] font-suezone text-xl max-w-[167px]">
                    A gente fortalece seu perfil com
                  </h2>
                  <div className="flex flex-col text-center text-base leading-[22px] space-y-3 mt-[30px] font-roboto">
                    <div className="flex flex-col">
                      <h3 className="font-bold font-OfeliaBold">
                        Lucro Atrativo:
                      </h3>
                      <p className="font-medium font-OfeliaMedium">
                        Margens de 20% a 38%, para você se destacar em diversos
                        cenários de vendas.
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-bold font-OfeliaBold">
                        Desenvolvimento Profissional{" "}
                      </h3>
                      <p className="font-medium font-OfeliaMedium">
                        Na Consultoria, você têm acesso a cursos online,
                        workshops e lives relacionados a vendas, marketing e
                        habilidades de comunicação.
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-bold font-OfeliaBold">
                        Reconhecimento e premiações:
                      </h3>
                      <p className="font-medium font-OfeliaMedium">
                        Premiamos as pessoas consultorias por vendas e
                        liderança, com brindes exclusivos, produtos, viagens e
                        certificados.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[550px] relative rounded-[20.359px] px-[30px] py-[25.4px] border-[#EB6619] bg-white">
                <div className="flex flex-col h-full">
                  <h2 className="text-ryzadust font-normal leading-[25px] font-suezone text-xl max-w-[167px]">
                    Soluções para quem é Realizador
                  </h2>
                  <div className="flex flex-col text-center text-base leading-[22px] space-y-3 mt-[30px] font-roboto">
                    <div className="flex flex-col">
                      <h3 className="font-bold font-OfeliaBold">
                        • Você em Rede •
                      </h3>
                      <p className="font-medium font-OfeliaMedium">
                        Venda para todo o brasil, sem investir em estoque e sem
                        sair de casa.Você será parte de uma rede de mais de 4
                        milhões de pessoas consultoras de beleza que trocam e
                        aprendem entre si.
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-bold font-OfeliaBold">
                        • Oportunidades de Ganhos •
                      </h3>
                      <p className="font-medium font-OfeliaMedium">
                        Faça parte de um time de Influenciadores e/ou
                        Treinadores, ampliando seus ganhos.
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-bold font-OfeliaBold">
                        • Emana Pay •{" "}
                      </h3>
                      <p className="font-medium font-OfeliaMedium">
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

export default DirectorSlider;
