import { useCalculationProvider } from "@/contexts/CalculationProvider";
import { useRouter } from "next/router";
import { A11y, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import { LeftArrow } from "../common/Icons";
import MakeUpCard from "./MakeUpCard";

const productDetails = [
  {
    id: uuidv4(),
    imgUrl: "/images/Plant-Shampoo-Quimica.png",
    productname: "Plant Shampoo Revitalização Pós Química",
    price: 29.9,
  },
  {
    id: uuidv4(),
    imgUrl: "/images/hair-card-img-1.png",
    productname: "Plant Shampoo Hidratação Reparadora",
    price: 31.9,
  },
  {
    id: uuidv4(),
    imgUrl: "/images/hair-card-img-2.png",
    productname: "Ekos Tônico Patauá",
    price: 63.9,
  },
  {
    id: uuidv4(),
    imgUrl: "/images/hair-card-img-3.png",
    productname: "Ekos Shampoo Patauá",
    price: 49.9,
  },
  {
    id: uuidv4(),
    imgUrl: "/images/hair-card-img-4.png",
    productname: "Ekos Shampoo Murumuru ",
    price: 45.9,
  },
  {
    id: uuidv4(),
    imgUrl: "/images/hair-card-img-5.png",
    productname: "Lumina Shampoo Estimulante Antiqueda",
    price: 44.9,
  },
  {
    id: uuidv4(),
    imgUrl: "/images/hair-card-img-6.png",
    productname: "Lumina Protetor Térmico",
    price: 63.9,
  },
  {
    id: uuidv4(),
    imgUrl: "/images/rostro.png",
    productname: "Lumina Shampoo para Cabelos Quimicamente Danific.",
    price: 41.9,
  },
];

const Hair = () => {
  const router = useRouter();
  const { handleToggleItem, collectItem } = useCalculationProvider();

  return (
    <>
      <div className="pt-10 pb-8 w-full">
        <div className="max-w-[920px] w-full mx-auto flex flex-col h-auto sm:pl-0 pl-6">
          <h2 className="text-black font-roboto text-[22px] font-semibold leading-[27px] -tracking-[0.44px] mb-5 text-start md:text-center md:mt-0 mt-4">
            Cabelo
          </h2>
          <div className="swiper-container">
            <Swiper
              modules={[Scrollbar, A11y]}
              spaceBetween={8}
              slidesPerView={7.7}
              loop={false}
              loopedslides={1}
              className="mySwiperhair"
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
                990: {
                  slidesPerView: 7,
                  spaceBetween: 20,
                },
              }}
            >
              <div className="flex w-fit space-x-2">
                {productDetails.map((product) => (
                  <SwiperSlide key={product.id}>
                    <MakeUpCard
                      handleToggleItem={handleToggleItem}
                      grayclass="border-[#e5e5e5]"
                      product={product}
                      onAdd={handleToggleItem}
                    />
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </div>
        <div className="max-w-[920px] mx-auto sm:px-0 px-4">
          <button
            disabled={collectItem.length === 0}
            onClick={() => router.push("/calculating")}
            className={`group bg-[#F95623] transition-all duration-300 ease-in-out w-full disabled:pointer-events-none disabled:bg-[#9EA2B4] py-3 rounded-[30px] flex  gap-3 items-center justify-center text-white mt-10 font-suezone font-normal leading-[33px]`}
          >
            Calcular
            <span className="group-hover:translate-x-2 transition-all duration-300 ease-in-out">
              <LeftArrow />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Hair;
