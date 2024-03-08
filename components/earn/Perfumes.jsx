import { A11y, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import MakeUpCard from "./MakeUpCard";
import { useCalculationProvider } from "@/contexts/CalculationProvider";
import { v4 as uuidv4 } from "uuid";

const productDetails = [
  {
    id: uuidv4(),
    imgUrl: "/images/humor.png",
    productname: "Desodorante Colônia Meu Primeiro Humor Feminino",
    price: 134.9,
  },
  {
    id: uuidv4(),
    imgUrl: "/images/urbe.png",
    productname: "Kaiak urbe Masculino",
    price: 155.9,
  },
  {
    id: uuidv4(),
    imgUrl: "/images/kaiak.png",
    productname: "Kaiak Desod. Colonia Masculino Clássico",
    price: 155.9,
  },
  {
    id: uuidv4(),
    imgUrl: "/images/luna.png",
    productname: "Luna Desodorante Colônia Feminino",
    price: 157.9,
  },
  {
    id: uuidv4(),
    imgUrl: "/images/pulso.png",
    productname: "Kaiak Pulso Desodorante Colônia Masc",
    price: 155.9,
  },
  {
    id: uuidv4(),
    imgUrl: "/images/absoluta.png",
    productname: "Luna Absoluta Desodorante Colônia Feminino",
    price: 157.9,
  },
];

const Perfumes = () => {
  const { handleToggleItem } = useCalculationProvider();

  return (
    <>
      <div className="py-10 lg:py-16 w-full perfume-bg">
        <div className="max-w-[920px] w-full mx-auto flex flex-col h-auto sm:pl-0 pl-6">
          <h2 className="text-white font-roboto text-[22px] font-semibold leading-[27px] -tracking-[0.44px] mb-[19px] text-start md:text-center md:mt-0 mt-4">
            Perfumes
          </h2>
          <div className="swiper-container">
            <Swiper
              modules={[Pagination, Scrollbar, A11y]}
              spaceBetween={9}
              slidesPerView={6}
              pagination={{ clickable: true }}
              loop={false}
              loopedslides={3}
              className="mySwiperPerfumes"
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
              <div className="flex  w-fit space-x-2 ">
                {productDetails.map((product) => (
                  <SwiperSlide className="h-auto" key={product.id}>
                    <MakeUpCard
                      activeclass="solid-blue-border"
                      product={product}
                      onAdd={handleToggleItem}
                    />
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

export default Perfumes;
