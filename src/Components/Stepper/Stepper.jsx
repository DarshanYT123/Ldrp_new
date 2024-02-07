import React, { useState, useEffect, useRef } from "react";

const Stepper = ({ steps, currentStep }) => {
  const [newStep, setNewStep] = useState([]);
  const stepsRef = useRef();

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    console.log(newSteps);
    let count = 0;
    while (count < newSteps.length) {
      //current step
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      }

      //step completed
      else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      }
      //step pending
      else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }

    return newSteps;
  };

  useEffect(() => {
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );

    stepsRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepsRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const stepsDisplay = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={
          index !== newStep.length - 1
            ? "w-full  flex flex-col justify-start  gap-y-16"
            : " w-full flex justify-start  items-start   "
        }
      >
        <div className="relative flex flex-row gap-x-6 items-center ">
          <div
            className={`rounded-full flex-row transition duration-500 ease-in-out  h-6 w-6 flex items-center justify-center py-3  ${
              step.selected
                ? "bg-[#47A5E4] text-white font-bold  "
                : "bg-[#D9D9D9]"
            }`}
          >
          </div>
          <div
            className={`absolute top-0 flex justify-center cursor-pointer items-center text-center  pl-12 flex-row w-60 text-[16px] font-Poppins font-semibold uppercase text-[color:var(--02,#47A5E4)] text-xs not-italic  leading-[normal] ${
              step.highlighted ? "text-[#47A5E4]" : "text-[#BDBDBD]"
            }`}
          >
            {step.description}
          </div>
        </div>
        <div
          className={`relative -top-8 -left-[1.4rem]   rotate-90  z-1 w-[4.4rem] border-t-2 transition duration-1000 ease-in-out  ${
            step.completed ? "border-[#47A5E4]" : " "
          }  `}
        ></div>
      </div>
    );
  });
  
  return (
    <>
    <div className="mx-4 p-4 py-4 flex flex-col  items-center">
      {stepsDisplay}
    </div>
    <div className="circleWrapper">

    </div>
    </>);
};
export default Stepper;