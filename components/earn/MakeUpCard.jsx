import React from "react";
import { v4 as uuidv4 } from "uuid";

const MakeUpCard = ({ product, activeclass, grayclass, onAdd }) => {
  const keyid = uuidv4();

  return (
    <>
      <label
        className="cursor-pointer"
        htmlFor={keyid}
        onChange={() => onAdd(product)}
      >
        <input hidden type="checkbox" id={keyid} />
        <div
          className={`sm:!w-[122px] box-container bg-white !p-2.5 rounded-lg !h-full relative border-2  ${
            grayclass ? grayclass : "border-transparent"
          } ${activeclass ? activeclass : ""} `}
        >
          <div className="flex justify-center">
            <img
              src={product.imgUrl}
              alt={`${product.name}`}
              className="h-[102px] w-[102px] object-contain"
            />
            <span className="absolute checkbox-input-style top-2 right-2.5">
              <div className="w-[19px] flex justify-center items-center custom-checkbox border-[2px] border-[#f95623]  rounded-full h-[19px]">
                <svg
                  className="checked-element"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.16667 0C4.125 0 0 4.125 0 9.16667C0 14.2083 4.125 18.3333 9.16667 18.3333C14.2083 18.3333 18.3333 14.2083 18.3333 9.16667C18.3333 4.125 14.2083 0 9.16667 0ZM13.0167 7.60833L8.61667 12.0083C8.25 12.375 7.7 12.375 7.33333 12.0083L5.31667 9.99167C4.95 9.625 4.95 9.075 5.31667 8.70833C5.68333 8.34167 6.23333 8.34167 6.6 8.70833L7.975 10.0833L11.7333 6.325C12.1 5.95833 12.65 5.95833 13.0167 6.325C13.3833 6.69167 13.3833 7.24167 13.0167 7.60833Z"
                    fill="#f95623"
                  />
                </svg>
              </div>
            </span>
          </div>
          <p className="text-black font-normal font-roboto text-sm  h-[100px] mt-2.5">
            {product.productname}
          </p>
          <h3 className="text-[15px] font-extrabold font-roboto text-black">
            R${" "}
            {product.price.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
            })}
          </h3>
        </div>
      </label>
    </>
  );
};

export default MakeUpCard;
