function ProductCard({ title, imgUrl }) {
  return (
    <div className="p-3.5 m-2  bg-[rgba(255,255,255,0.30)] rounded-xl    md:max-w-[152px] w-[92%] h-[245px]  sm:h-[320px] ">
      <div className="">
        <img
          src={imgUrl}
          alt="img"
          className="mx-auto max-w-[50px] sm:max-w-[90px] w-full h-full"
        />
      </div>
      <p className=" text-[12px] sm:text-[15px] text-center font-roboto text-[#101828] pt-3.5">
        {title}
      </p>
    </div>
  );
}

export default ProductCard;
