import { useProfileTestProvider } from "@/contexts/ProfileTestProvider";
import { LeftArrow } from "../common/Icons";

const TestComponent = () => {
  const {
    progressWidth,
    handleContinue,
    handleOptionChange,
    continueDisabled,
    questions,
    currentQuestion,
    selectedOptions,
  } = useProfileTestProvider();

  return (
    <div className="mx-auto my-8  bg-white  max-w-[312px] sm:max-w-[420px]  flex flex-col justify-between sm:h-[60vh]">
      <div>
        <div className="sm:h-[120px]">
          <p className="text-[21px] text-black font-medium font-OfeliaMedium mb-4">
            {questions[currentQuestion].text}
          </p>
          <div className="w-full h-[5px] rounded-2xl bg-[#ffdcdf] relative mb-4">
            <div
              style={{ width: progressWidth }}
              className="h-full rounded-2xl bg-[#FF6E9E] absolute left-0 top w-[40%]  text-[20px]"
            ></div>
          </div>
          <p className="my-4">{questions[currentQuestion].hint} </p>
        </div>
        <div className="my-8">
          {questions[currentQuestion].options.map((option) => (
            <div key={option} className=" mb-4 flex items-start">
              {questions[currentQuestion].type == "radio" ? (
                <input
                  type="radio"
                  id={option}
                  name="radioOptions"
                  checked={selectedOptions[currentQuestion] == option}
                  onChange={() => handleOptionChange(option)}
                  className="radio-btn  min-w-[28px] min-h-[28px] "
                />
              ) : (
                <input
                  type="checkbox"
                  id={option}
                  value=""
                  checked={selectedOptions[currentQuestion].includes(option)}
                  onChange={() => handleOptionChange(option)}
                  className=" form-checkbox text-green-500 min-w-[28px] min-h-[28px] "
                />
              )}
              <label
                htmlFor={option}
                className="text-[14px] font-medium font-OfeliaMedium ml-2 cursor-pointer"
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center w-full">
        <button
          onClick={handleContinue}
          className={`h-[54px] py-2  w-full rounded-[30px] flex flex-row  text-lg items-center  space-x-2 justify-center text-white font-OfeliaBold font-bold transition-all duration-300 ease-in-out  ${
            continueDisabled
              ? "bg-[#9EA2B4]"
              : " hover:bg-[#f95623]/80 group  bg-[#f95623]"
          }`}
          disabled={continueDisabled}
        >
          Continue{" "}
          <span className="group-hover:translate-x-2 transition-all duration-300 ease-in-out ml-3">
            <LeftArrow />
          </span>
        </button>
      </div>
    </div>
  );
};

export default TestComponent;
