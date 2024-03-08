import { A11y, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import MakeUpCard from "./MakeUpCard";
import { useCalculationProvider } from "@/contexts/CalculationProvider";
import { v4 as uuidv4 } from "uuid";

const productDetails = [
  {
    id: uuidv4(),
    imgUrl: "/images/body-card-img-1.png",
    productname: "Hidratante Tododia Natura Cereja e Avelã",
    price: 65.9,
  },
  {
    id: uuidv4(),
    imgUrl: "/images/body-card-img-2.png",
    productname: "Hidratante Tododia Algodão",
    price: 65.9,
  },
  {
    id: uuidv4(),
    imgUrl: "/images/body-card-img-3.png",
    productname: "Hidrat. Tododia Ameixa e Flor de Baunilha",
    price: 65.9,
  },
  {
    id: uuidv4(),
    imgUrl: "/images/body-card-img-4.png",
    productname: "Natura Erva Doce Desod. em Creme",
    price: 27.9,
  },
  {
    id: uuidv4(),
    imgUrl: "/images/body-card-img-5.png",
    productname: "Tododia Creme Algodão Invisível",
    price: 27.9,
  },
];

const BodyLotion = () => {
  const { handleToggleItem } = useCalculationProvider();

  return (
    <>
      <div className="body-lotion-bg  py-10 sm:py-16 w-full">
        <div className="max-w-[640px] w-full mx-auto flex flex-col h-auto md:pl-0 pl-6">
          <h2 className="text-white font-roboto text-[22px] font-semibold leading-[27px] -tracking-[0.44px] mb-[19px] text-start md:text-center ">
            Corpo
          </h2>
          <div className="swiper-container  flex justify-between gap-4">
            <Swiper
              modules={[Pagination, Scrollbar, A11y]}
              spaceBetween={9}
              slidesPerView={5}
              pagination={{ clickable: true }}
              loop={false}
              loopedslides={3}
              className="mySwiperSkin"
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
                  slidesPerView: 4.2,
                  spaceBetween: 20,
                },
                774: {
                  slidesPerView: 5,
                  spaceBetween: 10,
                },
              }}
            >
              <div className="flex w-fit space-x-2">
                {productDetails.map((product) => (
                  <SwiperSlide key={product.id}>
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

export default BodyLotion;
