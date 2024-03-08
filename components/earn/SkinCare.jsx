import { A11y, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import MakeUpCard from "./MakeUpCard";
import { v4 as uuidv4 } from "uuid";
import { useCalculationProvider } from "@/contexts/CalculationProvider";

const productDetails = [
  {
    id: uuidv4(),
    imgUrl: "/images/whitening-protector.png.png",
    productname: " Chronos Protetor Clareador FPS 70 Médio",
    price: 104.9,
  },
  {
    id: uuidv4(),
    imgUrl: "/images/facialenergy.png",
    productname: " Faces Sabonete Facial Energy Shot",
    price: 29.9,
  },
  {
    id: uuidv4(),
    imgUrl: "/images/moisturizer.png",
    productname: "Faces Hidratante Clareador Facial FPS15",
    price: 37.9,
  },
  {
    id: uuidv4(),
    imgUrl: "/images/serum.png",
    productname: "Chronos Serum Multiclareador Intensivo",
    price: 176.5,
  },
  {
    id: uuidv4(),
    imgUrl: "/images/exfoliating.png",
    productname: "Chronos Duo Esfoliante",
    price: 70.9,
  },
];

const SkinCare = () => {
  const { handleToggleItem } = useCalculationProvider();

  return (
    <>
      <div className="bg-white pt-[40px] pb-[31px] w-full">
        <div className="max-w-[640px] w-full mx-auto flex flex-col h-auto md:pl-0 pl-6">
          <h2 className="text-black font-roboto text-[22px] font-semibold leading-[27px] -tracking-[0.44px] mb-[19px] text-start md:text-center ">
            Skin Care
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
                  slidesPerView: 4.5,
                  spaceBetween: 20,
                },
                774: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
              }}
            >
              <div className="flex w-fit space-x-2">
                {productDetails.map((product) => (
                  <SwiperSlide key={product.id}>
                    <MakeUpCard
                      grayclass="border-[#e5e5e5]"
                      product={product}
                      activeclass=""
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

export default SkinCare;
