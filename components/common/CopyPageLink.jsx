import React, { useState } from "react";
import { ToShare } from "../version/icon";

const CopyPageLink = () => {
  const [showToast, setShowToast] = useState(false);

  const copyToClipboard = () => {
    const currentUrl = window.location.href;
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
      })
      .catch((err) => console.error("Failed to copy: ", err));
  };

  return (
    <>
      <div
        className={`${
          showToast ? "right-2 sm:right-5 " : "-right-full"
        } fixed top-5 bg-black text-white p-3 rounded transition-all duration-200 ease-in-out z-50`}
      >
        Link Copied to clipboard!
      </div>
      <button
        onClick={copyToClipboard}
        className="flex flex-col gap-[10px] items-center"
      >
        <ToShare />
        <h3 className="text-base font-medium text-center  leading-[22px] font-OfeliaMedium">
          Compartilhar <br /> o resultado
        </h3>
      </button>
    </>
  );
};

export default CopyPageLink;
