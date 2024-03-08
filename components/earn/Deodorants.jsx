import { useCalculationProvider } from "@/contexts/CalculationProvider";
import { A11y, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import MakeUpCard from "./MakeUpCard";

const productDetails = [
  {
    id: uuidv4(),
    imgUrl: "/images/fruit.png",
    productname: "Ekos Frescor Maracujá 150ml",
    price: 103.9,
  },
  {
    id: uuidv4(),
    imgUrl: "/images/whitening-rollon.png",
    productname: "Tododia Rollon Clareador 70ml",
    price: 24.9,
  },
  {
    id: uuidv4(),
    imgUrl: "/images/fennel-rollon.png",
    productname: "Erva Doce Rollon Antimanchas 70ml",
    price: 25.9,
  },
  {
    id: uuidv4(),
    imgUrl: "/images/kaiak-rollon.png",
    productname: "Kaiak Rollon Antimanchas 75ml",
    price: 25.9,
  },
];

const Deodorants = () => {
  const { handleToggleItem } = useCalculationProvider();

  return (
    <>
      <div className="bg-white pt-[40px] pb-[31px] w-full">
        <div className="max-w-[520px] w-full mx-auto flex flex-col h-auto md:pl-0 pl-6">
          <h2 className="text-black font-roboto text-[22px] font-semibold leading-[27px] -tracking-[0.44px] mb-[19px] text-start md:text-center ">
            Desodorantes
          </h2>
          <div className="swiper-container">
            <Swiper
              modules={[Pagination, Scrollbar, A11y]}
              spaceBetween={9}
              slidesPerView={4}
              pagination={{ clickable: true }}
              loop={false}
              loopedslides={3}
              className="mySwiperDeodorants"
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
                  slidesPerView: 3.2,
                  spaceBetween: 20,
                },
                615: {
                  slidesPerView: 4.2,
                  spaceBetween: 20,
                },
                774: {
                  slidesPerView: 4,
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

export default Deodorants;
