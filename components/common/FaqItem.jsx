import { useState, useEffect, useRef } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const itemRef = useRef(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (itemRef.current && !itemRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [itemRef]);

  return (
    <div className="mb-4" ref={itemRef}>
      <div className="cursor-pointer   rounded-[20px]  " onClick={toggleOpen}>
        <div className="bg-white rounded-[20px] p-5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] relative z-40">
          <h3 className="text-[16px] sm:text-[20px] font-roboto font-semibold ">
            {question}
          </h3>
        </div>

        {isOpen && (
          <div className="bg-white p-4 pb-6  text-[16px] sm:text-[20px] font-roboto  rounded-[20px] w-[99%] mx-auto pt-14 -mt-6 z-10">
            <p>{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQItem;
