// IT will accept a list of components
// based on the size of the list
// it will generate steps

import React, { useState } from "react";

const Stepperitem = ({ list }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const stepsCount = list.length;
  const steps = [
    // "Your Cart", "Billing Details", "Checkout"
  ];
  // const title=["Student History And Information"];
  const stepArray= ["Basic Information","Student History And Information","External Exam Sheet","Mid Semester Details","Participated  Co-Curricular Activities","Participated Seminar or Project","Membership Organization"]
  const [stepNo, setStepNo] = useState(1)



  // for (let i = 0; i <div stepsCount; i++) {
  //   steps.push(
      // <div
      //   onClick={() => setCurrentStep(i)}
      //   className={`steps ${currentStep >= i ? "active" : ""}`}
      //   key={i}
  //     >
  //       {i + 1}
  //       <div>
  //         {/* {stepArray} */}
  //       </div>
  //     </div>
  //   );
  // }

 
  const progressLineWidth = (100 / (list.length - 1)) * currentStep;

  const onPrev = () => {
    if (currentStep !== 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onNext = () => {
    if (currentStep !== list.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="w-screen px-10 py-5 ">
      <div className="bg-white px-20 p-5  ">
    <div className="flex sticky top-2 flex-row justify-between items-center ">
    {
      stepArray.map((v,i)=><>
      <div className="flex  "> 
      <div className="flex flex-col justify-start items-start ">
      <div onClick={() => setCurrentStep(i)}
        className={`steps ${currentStep >= i ? "active" : ""}`}
        key={i}>{i+1}</div>
      <div onClick={() => setCurrentStep(i)} className={`step-item cursor-pointer relative text-wrap  text-[12px] ${currentStep >= i ? "active" : ""}`}><div className="absolute w-[5rem]  ">{v}</div></div>
      </div>
      </div>
      </>)
    }
   </div>
    <section className="stepper  flex flex-col  justify-center  pt-20">
      <div className="steps-container ">
        <div className="flex flex-col">
        <div className="steps-wrapper">{steps}</div>
        
        </div>
        <div
          className="progress-line"
          style={{ width: `${progressLineWidth}%` }}
        ></div>
      </div>
      <div className="">{React.cloneElement(list[currentStep], { onPrev, onNext })}</div>
    </section>
    </div>
    </div>
  );
};

export default Stepperitem;
