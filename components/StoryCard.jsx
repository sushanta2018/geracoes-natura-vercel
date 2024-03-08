import Link from "next/link";

function StoryCard({ name, imgUrl, tags, url }) {
  return (
    <>
      <Link href={`${url}`} target="_blank">
        <div className="bg-white rounded-lg  relative flex flex-col justify-end  max-w-[174px] sm:max-w-[180px]  md:max-w-[230px] lg:max-w-[95%] w-full   group transition-all duration-300 ease-in-out overflow-hidden ">
          <div className="overflow-hidden ">
            <img
              src={imgUrl}
              alt={imgUrl}
              className="w-full h-[270px] object-cover object-top lg:h-[380px] rounded-lg transition-all duration-500 ease-in-out group-hover:scale-105 "
            />
          </div>{" "}
          <div className="absolute p-2.5 bg-black-gradient  w-full  rounded-b-lg  group-hover:h-full flex flex-col justify-end  transition-all duration-300 ease-in-out  ">
            <p className="text-[16px] font-semibold font-inter text-white uppercase">
              {name}
            </p>
            <p className="text-[12px]  mt-2 font-inter text-white">{tags}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default StoryCard;
