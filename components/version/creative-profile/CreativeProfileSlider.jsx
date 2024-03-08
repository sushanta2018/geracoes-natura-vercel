import { A11y, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Star, Zap } from "../icon";

const CreativeProfileSlider = () => {
  return (
    <>
      <div className="bg-[#FF6E9E] py-10 my-10 hidden md:block ">
        <div className="px-6">
          <div className="max-w-[848px] w-full mx-auto justify-center flex flex-wrap gap-[30px] h-auto">
            <div className="flex flex-col bg-white !max-w-[291px] !w-full rounded-[20.359px] px-6 py-4 border-ryzadust h-auto">
              <h2 className="text-ryzadust font-bold leading-[39px] font-OfeliaBold text-xl p-[10px] ">
                Descrição do perfil
              </h2>
              <div className="text-center py-[30px] gap-y-3 flex flex-col text-base font-normal leading-[22px] font-OfeliaNormal text-black">
                <h3>
                  Sua criatividade é uma{" "}
                  <span className="font-bold font-OfeliaBold">
                    força natural
                  </span>{" "}
                  e nas redes sociais você pode
                  <span className="font-bold font-OfeliaBold">
                    {" "}
                    brilhar como uma estrela.
                  </span>
                </h3>
                <h4>
                  Sua habilidade de criar conteúdo envolvente e único é
                  inigualável.
                </h4>
                <p>
                  Mesmo sem um exército de seguidores, sua energia é contagiante
                  e{" "}
                  <span className="font-bold font-OfeliaBold">
                    {" "}
                    você se expressa de forma autêntica.
                  </span>
                </p>
                <p>
                  Vender produtos? Para você, isso pode ser o resultado natural
                  do seu entusiasmo.
                </p>
              </div>
            </div>
            <div className="flex flex-col bg-white max-w-[299px] w-full rounded-[20.359px] px-6 py-4 border border-ryzadust h-auto">
              <h2 className="text-ryzadust font-bold leading-[39px] font-OfeliaBold text-xl p-[10px]">
                Seus pontos fortes
              </h2>
              <div className="flex flex-col justify-center items-center gap-2 mt-7">
                <Star />
                <div className="flex flex-col text-center">
                  <h5 className=" font-OfeliaBold text-base font-bold leading-[22px] text-black">
                    Originalidade:
                  </h5>
                  <p className="text-base font-medium font-OfeliaMedium leading-[22px] mt-3">
                    Você é capaz de lidar com rejeições e desafios de forma
                    positiva.
                  </p>
                </div>

                <Zap />
                <div className="flex flex-col  text-center">
                  <h5 className=" font-OfeliaBold text-base font-bold leading-[22px] text-black">
                    Persistência:
                  </h5>
                  <p className="text-base font-medium font-OfeliaMedium leading-[22px] mt-3">
                    Você não cansa de melhorar sua forma de vender com base nos
                    comentários de clientes
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-white  !max-w-[291px] !w-full rounded-[20.359px] py-[25.4px] pl-[25.4px] pr-[12px] border border-[#EB6619] h-auto">
              <h2 className="text-ryzadust font-bold p-[10px] leading-[25px] font-OfeliaBold text-xl w-full max-w-[200px]">
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
                    Flexibilidade de horários:
                  </h3>
                  <p className="font-medium font-OfeliaMedium">
                    Você escolhe seus horários. É o encaixe perfeito da sua vida
                    pessoal com a profissional.
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
                Soluções para quem é Criativo
              </h2>
              <div className="flex flex-col text-center text-base leading-[22px] space-y-5 mt-[30px] font-roboto">
                <div className="flex flex-col">
                  <h3 className="font-bold font-OfeliaBold">
                    • Cupons Personalizados •{" "}
                  </h3>
                  <p className="font-medium font-OfeliaMedium">
                    Você pode criar cupons exclusivos para os seus clientes
                    usarem no seu espaço digital.
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
                  <h3 className="font-bold font-OfeliaBold">
                    • Revista Digital Interativa •{" "}
                  </h3>
                  <p className="font-medium font-OfeliaMedium">
                    As revistas de produtos a um clique de distância!
                    Compartilhe revistas digitais interativas facilmente com
                    seus contatos.
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
              <div className="h-[530px] relative rounded-[20.359px] px-6 py-4 border-[#EB6619] bg-white">
                <div className="flex flex-col h-full">
                  <h2 className="text-ryzadust font-normal leading-[39px] font-OfeliaBold text-xl">
                    Descrição do perfil
                  </h2>
                  <div className="text-center py-[30px] gap-y-1.5 flex flex-col text-base font-medium font-OfeliaMedium leading-[22px] text-black">
                    <h3>
                      Sua criatividade é uma{" "}
                      <span className="font-bold font-OfeliaBold">
                        força natural
                      </span>{" "}
                      e nas redes sociais você pode
                      <span className="font-bold font-OfeliaBold">
                        {" "}
                        brilhar como uma estrela.
                      </span>
                    </h3>
                    <h4>
                      Sua habilidade de criar conteúdo envolvente e único é
                      inigualável.
                    </h4>
                    <p>
                      Mesmo sem um exército de seguidores, sua energia é
                      contagiante e{" "}
                      <span className="font-bold font-OfeliaBold">
                        {" "}
                        você se expressa de forma autêntica.
                      </span>
                    </p>
                    <p>
                      Vender produtos? Para você, isso pode ser o resultado
                      natural do seu entusiasmo.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[530px] relative rounded-[20.359px] px-6 py-4 border-[#EB6619] bg-white">
                <div className="flex flex-col h-full">
                  <h2 className="text-ryzadust font-normal leading-[39px] font-OfeliaBold text-xl">
                    Seus pontos fortes
                  </h2>
                  <div className="flex flex-col justify-center items-center gap-2 mt-6">
                    <Star />
                    <div className="flex flex-col  text-center ">
                      <h5 className=" font-roboto text-base font-bold leading-[22px] text-black">
                        Originalidade:
                      </h5>
                      <p className="text-base font-medium font-OfeliaMedium leading-[22px] mt-2">
                        Você é capaz de lidar com rejeições e desafios de forma
                        positiva.
                      </p>
                    </div>

                    <Zap />
                    <div className="flex flex-col  text-center ">
                      <h5 className="font-roboto text-base font-bold leading-[22px] text-black">
                        Persistência:
                      </h5>
                      <p className="text-base font-medium font-OfeliaMedium leading-[22px] mt-2">
                        Você não cansa de melhorar sua forma de vender com base
                        nos comentários de clientes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[530px] relative rounded-[20.359px] px-6 py-4 border-[#EB6619] bg-white">
                <div className="flex flex-col h-full">
                  <h2 className="text-ryzadust font-normal leading-[25px] font-OfeliaBold text-xl max-w-[167px]">
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
                        Flexibilidade de horários:
                      </h3>
                      <p className="font-medium font-OfeliaMedium">
                        Você escolhe seus horários. É o encaixe perfeito da sua
                        vida pessoal com a profissional.
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
              <div className="h-[530px] relative rounded-[20.359px] px-6 py-4 border-[#EB6619] bg-white">
                <div className="flex flex-col h-full">
                  <h2 className="text-ryzadust font-normal leading-[25px] font-OfeliaBold text-xl max-w-[167px]">
                    Soluções para quem é Director
                  </h2>
                  <div className="flex flex-col text-center text-base leading-[22px] space-y-3 mt-[30px] font-roboto">
                    <div className="flex flex-col">
                      <h3 className="font-bold font-OfeliaBold">
                        • Cupons Personalizados •{" "}
                      </h3>
                      <p className="font-medium font-OfeliaMedium">
                        Você pode criar cupons exclusivos para os seus clientes
                        usarem no seu espaço digital.
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
                        • Revista Digital Interativa •{" "}
                      </h3>
                      <p className="font-medium font-OfeliaMedium">
                        As revistas de produtos a um clique de distância!
                        Compartilhe revistas digitais interativas facilmente com
                        seus contatos.
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

export default CreativeProfileSlider;
