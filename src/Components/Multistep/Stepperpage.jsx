import React, { useState } from "react";
import "./Stepperpage.css";
import { TiTick } from "react-icons/ti";
import { NavLink } from "react-router-dom";
const Stepperpage = () => {
  const steps = [
    {
        path:"/info",
    title:"Basic Information",},
    {
        path:"/history",
    title:"Student History And Information",},
    {
    title:"External Exam Sheet",},
    {
    title:"Mid Semester Details",},
    {
    title:"Participated  Co-Curricular Activities",},
    {
    title:"Participated Seminar or Project",},
    {
    title:"Membership Organization"},];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  return (
    <>
    <div className="relative left-5 ">
        <div className="w-[250px]">
    <div className="   ">
        <div className=" p-[50]  ">
      <div className="flex flex-col justify-center items-start">
        {steps?.map((step, i) => (
          <NavLink
            key={i}
            to={step.path}
            className={`step-item  ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
          >
            <div className="step ">
              {/* {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1} */}
            </div>
            <p className="text-[#BDBDBD] absolute  left-14 w-40   ">{step.title}</p>
          </NavLink>
        ))}
      </div>
      {!complete && (
        <button
          className="btn"
          onClick={() => {
            currentStep === steps.length
              ? setComplete(true)
              : setCurrentStep((prev) => prev + 1);
          }}
        >
          {currentStep === steps.length ? "Finish" : "Next"}
        </button>
      )}
      </div>
      </div>

          {/* line */}
          <div className="absolute top-28  left-[17rem]  bg-[#D9D9D9] w-[2px] h-[33rem] ">
    </div>

          </div>
      </div>
    </>
  );
};

export default Stepperpage;