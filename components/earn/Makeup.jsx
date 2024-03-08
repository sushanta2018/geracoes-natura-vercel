import { useCalculationProvider } from "@/contexts/CalculationProvider";
import { A11y, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import MakeUpCard from "./MakeUpCard";

const productDetails = [
  {
    id: uuidv4(),
    imgUrl: "/images/Faces-Batom-Matte-Marsala.png",
    productname: "Faces Batom Matte Marsala",
    price: 19.9,
  },
  {
    id: uuidv4(),
    imgUrl: "/images/Faces-Lapis-para-Olhos-Preto.png",
    productname: "Faces Lapis para Olhos - Preto",
    price: 29.9,
  },
  {
    id: uuidv4(),
    imgUrl: "/images/eyeliner.png",
    productname: "Faces Máscara Volume Fever",
    price: 29.9,
  },
  {
    id: uuidv4(),
    imgUrl: "/images/Faces-Batom-Matte-Cookie-Nude.png",
    productname: "Faces Batom Matte Cookie Nude",
    price: 19.9,
  },
  {
    id: uuidv4(),
    imgUrl: "/images/mascara.png",
    productname: "Faces Supermáscara Tint para Cílios",
    price: 46.9,
  },
  {
    id: uuidv4(),
    imgUrl: "/images/Una-Corretivo-Alta-Cobertura.png",
    productname: "Una Corretivo Alta Cobertura",
    price: 49.9,
  },
  {
    id: uuidv4(),
    imgUrl: "/images/eye-liner-pen.png",
    productname: "Una Caneta Delineadora para Olhos",
    price: 67.9,
  },
];

const Makeup = () => {
  const { handleToggleItem } = useCalculationProvider();

  return (
    <>
      <div className="pt-[120px] px-4 pb-[31px]  w-full eyeliner-bg">
        <div className="max-w-[920px] w-full mx-auto flex flex-col h-auto pl-0 md:pl-6">
          <h2 className="text-black font-roboto text-[22px] font-semibold leading-[27px] -tracking-[0.44px] mb-[19px] text-start md:text-center">
            Maquiagem
          </h2>
          <div className="swiper-container overflow-hidden z-50 sp">
            <Swiper
              modules={[Scrollbar, A11y]}
              spaceBetween={9}
              slidesPerView={6}
              loop={false}
              className="mySwiper"
              onScrollbarDragStart={true}
              breakpoints={{
                320: {
                  slidesPerView: 2.3,
                  spaceBetween: 20,
                },
                438: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                500: {
                  slidesPerView: 3.4,
                  spaceBetween: 20,
                },
                615: {
                  slidesPerView: 4.5,
                  spaceBetween: 20,
                },
                774: {
                  slidesPerView: 5.4,
                  spaceBetween: 40,
                },
                900: {
                  slidesPerView: 6,
                  spaceBetween: 9,
                },
              }}
            >
              <div className="flex w-fit space-x-2">
                {productDetails.map((product) => (
                  <SwiperSlide key={product.id}>
                    <MakeUpCard product={product} onAdd={handleToggleItem} />
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Makeup;
