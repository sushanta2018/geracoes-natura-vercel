import { Swiper, SwiperSlide } from "swiper/react";
import StoryCard from "./StoryCard";
import { storyData } from "./common/Helper";

function SuccessfulStory() {
  const swiperSettings = {
    spaceBetween: 10,
    loop: true,
    slidesPerView: 3,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      500: {
        spaceBetween: 10,
        slidesPerView: 4,
      },
      1020: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1280: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      1400: {
        slidesPerView: 6,
        spaceBetween: 10,
      },
    },
  };

  return (
    <>
      <div className="  my-10   overflow-hidden bg-[url(/images/story-bg.png)] bg-no-repeat bg-[100%_90%] bg-contain sm:bg-contain sm:bg-bottom   ">
        <div className="  xl:max-w-[970px] max-w-[920px] mx-auto  md:pb-12  pl-4 ">
          <div>
            <span className="bg-[#FF6E9E] flex items-center justify-center w-16 h-16 sm:w-28 sm:h-28 xl:w-[118px] xl:h-[118px] rounded-full mb-12  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                className="max-w-[36px] h-auto sm:max-w-fit"
              >
                <path
                  d="M49 9.33335H42V7.00002C42 6.38118 41.7541 5.78769 41.3165 5.3501C40.879 4.91252 40.2855 4.66669 39.6666 4.66669H16.3333C15.7145 4.66669 15.121 4.91252 14.6834 5.3501C14.2458 5.78769 14 6.38118 14 7.00002V9.33335H6.99996C6.38112 9.33335 5.78763 9.57919 5.35004 10.0168C4.91246 10.4544 4.66663 11.0478 4.66663 11.6667V18.6667C4.66663 21.142 5.64996 23.516 7.4003 25.2663C9.15064 27.0167 11.5246 28 14 28H17.5933C19.7039 30.3547 22.5494 31.9255 25.6666 32.4567V37.3334H23.3333C21.4768 37.3334 19.6963 38.0709 18.3835 39.3836C17.0708 40.6964 16.3333 42.4768 16.3333 44.3334V49C16.3333 49.6189 16.5791 50.2124 17.0167 50.6499C17.4543 51.0875 18.0478 51.3334 18.6666 51.3334H37.3333C37.9521 51.3334 38.5456 51.0875 38.9832 50.6499C39.4208 50.2124 39.6666 49.6189 39.6666 49V44.3334C39.6666 42.4768 38.9291 40.6964 37.6164 39.3836C36.3036 38.0709 34.5231 37.3334 32.6666 37.3334H30.3333V32.4567C33.4505 31.9255 36.296 30.3547 38.4066 28H42C44.4753 28 46.8493 27.0167 48.5996 25.2663C50.35 23.516 51.3333 21.142 51.3333 18.6667V11.6667C51.3333 11.0478 51.0875 10.4544 50.6499 10.0168C50.2123 9.57919 49.6188 9.33335 49 9.33335ZM14 23.3334C12.7623 23.3334 11.5753 22.8417 10.7001 21.9665C9.82496 21.0913 9.33329 19.9044 9.33329 18.6667V14H14V18.6667C14.0051 20.2573 14.2813 21.8355 14.8166 23.3334H14ZM32.6666 42C33.2855 42 33.879 42.2458 34.3165 42.6834C34.7541 43.121 35 43.7145 35 44.3334V46.6667H21V44.3334C21 43.7145 21.2458 43.121 21.6834 42.6834C22.121 42.2458 22.7145 42 23.3333 42H32.6666ZM37.3333 18.6667C37.3333 21.142 36.35 23.516 34.5996 25.2663C32.8493 27.0167 30.4753 28 28 28C25.5246 28 23.1506 27.0167 21.4003 25.2663C19.65 23.516 18.6666 21.142 18.6666 18.6667V9.33335H37.3333V18.6667ZM46.6666 18.6667C46.6666 19.9044 46.175 21.0913 45.2998 21.9665C44.4246 22.8417 43.2376 23.3334 42 23.3334H41.1833C41.7186 21.8355 41.9948 20.2573 42 18.6667V14H46.6666V18.6667Z"
                  fill="white"
                />
              </svg>
            </span>
            <h2 className="heading-style text-[30px] sm:text-[48px] leading-[115%] mb-4">
              Se inspire em quem já é sucesso
            </h2>{" "}
            <p className="paragraph-style font-OfeliaNormal text-[14px] sm:text-[34px] leading-[140%]">
              Tem um monte de gente incrível na consultoria Natura e Avon.
              Clique e conheça!
            </p>
          </div>
          <div className="relative h-[280px] sm:min-h-[400px] w-full my-7">
            <div className="absolute left-0 top-0 w-[140%] sm:w-[120%]  xl:w-[130%] 2xl:w-[150%]">
              <Swiper {...swiperSettings}>
                {storyData?.map((obj, index) => (
                  <SwiperSlide key={index}>
                    <StoryCard {...obj} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SuccessfulStory;
