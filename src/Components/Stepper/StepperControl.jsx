export default function StepperControl({ handleClick, currentStep, steps }) {
    return (
      <div className="container mt-4 mb-8 flex justify-center items-center">
        <button
          onClick={() => handleClick()}
          className={`cursor-pointer rounded-xl border-2 border-slate-300  py-2 px-4 font-semibold uppercase text-slate-400 transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white  ${
            currentStep === 1 ? " cursor-not-allowed opacity-50 " : ""
          }`}
        >
          Cancel
        </button>
  
        <button
          onClick={() => handleClick("next")}
          className="cursor-pointer rounded-lg bg-[#159BD6] py-2 px-6  hover:text-white text-[color:var(--03,#FFF)] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize"
        >
          {currentStep === steps.length - 1 ? "Confirm" : "Save & Next"}
        </button>
      </div>
    );
  }