function ProductSearchCard({ productname, imgUrl, price, quantityNeeded }) {
  return (
    <>
      <div className="font-roboto  mx-auto p-[6px] bg-[#f95623] rounded-xl flex flex-row gap-x-3 w-full h-24">
        <div className="flex flex-row bg-white rounded-lg gap-3 py-2 px-7 w-full">
          <div className="flex items-center space-x-2  w-full">
            <div className="w-[80px]">
              <img
                src={imgUrl}
                className="w-full max-h-[60px] object-contain"
                alt="product"
              />
            </div>
            <div className="flex flex-col justify-between">
              <p className="text-black text-[14px]">{productname}</p>
              <p className="text-black text-base font-medium">
                R$&nbsp;
                {price.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                })}
              </p>{" "}
            </div>
          </div>
          <span className="flex items-center space-x-2 text-[30px] text-black   font-roboto">
            <span> x </span> <span>{quantityNeeded}</span>
          </span>
        </div>
      </div>
    </>
  );
}

export default ProductSearchCard;
