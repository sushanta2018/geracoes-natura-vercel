import ProductCard from "./ProductCard";
import { productlist } from "./common/Helper";
import { Dollar, LeftArrow } from "./common/Icons";
import { useCalculationProvider } from "@/contexts/CalculationProvider";
import { useRouter } from "next/router";
import Slider from "react-slick";

const SimulateHowMuchEarn = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    swipeToSlide: true,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 650,
        settings: {
          arrows: false,
          slidesToShow: 2.9,
        },
      },
    ],
  };

  const { totalearn, handleIncrement, handleDecrement } =
    useCalculationProvider();

  const formattedCurrency = (value) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    }).format(value);
  };

  const router = useRouter();

  return (
    <>
      <section
        className={`bg-[url("/images/simulate-pink-bg.png")] relative bg-no-repeat bg-cover pb-20 pt-14 sm:py-28 mt-24 sm:mt-32 bg-100-100`}
      >
        <div className="xl:max-w-[970px] max-w-[920px] mx-auto px-4  overflow-hidden md:overflow-visible">
          <span className="bg-americanpink  flex items-center justify-center w-14 h-14 sm:w-28 sm:h-28 xl:w-[118px] xl:h-[118px] rounded-full absolute -top-4 sm:-top-10 ml-4 sm:ml-0 ">
            <Dollar />
          </span>
          <div className="items-center gap-y-5">
            <div>
              <h2 className="heading-style lg:text-[48px] sm:text-[40px] text-[30px] leading-[130%]  sm:pr-0">
                Simule seus ganhos
              </h2>
            </div>
            <div>
              <p className="lg:text-[29px] font-OfeliaMedium font-medium sm:text-[20px] leading-[1.2] sm:leading-[32px]  text-base sm:font-normal mt-3  sm:mt-4">
                Descubra com quais produtos você pode atingir seus{" "}
                <span className="font-OfeliaExtrabold font-extrabold">
                  objetivos financeiros
                </span>
              </p>
            </div>
          </div>
          <div className="my-3 sm:pt-6 lg:w-[840px] w-[120%] sm:w-full -ml-4 sm:ml-0  xl:ml-10  lg:px-0 sm:px-14 -mr-4 sm:mr-0  mx-auto relative ">
            <Slider {...settings}>
              {productlist?.map((obj, index) => (
                <div className="h-full" key={index}>
                  <ProductCard {...obj} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="bg-white pb-8">
          <div className="mt-5 xl:max-w-[970px] max-w-[920px] mx-auto px-4 relative py-3">
            <div className="flex items-center space-x-4 justify-center">
              <button
                className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] flex flex-col justify-center items-center bg-[#E3E8FF] rounded-full"
                onClick={handleDecrement}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="26"
                  viewBox="0 0 25 26"
                  fill="none"
                >
                  <g clipPath="url(#clip0_2492_16512)">
                    <path
                      d="M2.81641 12.6067H20.617"
                      stroke="#3E4B99"
                      strokeWidth="5.08587"
                      strokeLinecap="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2492_16512">
                      <rect
                        width="24.2184"
                        height="24.2184"
                        fill="white"
                        transform="translate(0.0102539 0.901489)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <span className=" text-[40px] sm:text-[53px] text-black font-medium font-roboto sm:px-4 px-3">
                {formattedCurrency(totalearn)}
              </span>
              <button
                className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] flex flex-col justify-center items-center bg-[#E3E8FF] rounded-full"
                onClick={handleIncrement}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="26"
                  viewBox="0 0 25 26"
                  fill="none"
                >
                  <path
                    d="M12.6875 5.94714V20.0746M5.62378 13.0109H19.7512"
                    stroke="#3E4B99"
                    strokeWidth="3.8144"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-[3px] bg-americanpink"></div>
        <div className="px-4 sm:px-6">
          <button
            onClick={() => router.push("/earn")}
            className="translate-y-[-31px] common-btn group mx-auto"
          >
            <span>Simular</span>
            <span className="group-hover:translate-x-2 transition-all duration-300 ease-in-out">
              <LeftArrow />
            </span>
          </button>
        </div>
      </section>
    </>
  );
};

export default SimulateHowMuchEarn;

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <span className="bg-[#F95623] w-[50px] h-[50px] flex flex-col justify-center items-center rounded-full -mt-6 relative z-[20] -ml-1 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M9 18L15 12L9 6"
            stroke="#FFDCDF"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <span className="bg-[#F95623] w-[50px] h-[50px] flex flex-col justify-center items-center rounded-full -mt-8 relative z-[20] -ml-8 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
        >
          <path
            d="M15.8589 18L9.85889 12L15.8589 6"
            stroke="#FFDCDF"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </div>
  );
}
