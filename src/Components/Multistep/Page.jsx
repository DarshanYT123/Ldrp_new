import Activities from "../Activities/Activities";
import Basicinfo from "../Basicinfo/Basicinfo";
import ExamSheet from "../ExamSheet/ExamSheet";
import Membership from "../Membership/Membership";
import MidSemester from "../MidSemester/MidSemester";
import Seminar from "../Seminar/Seminar";
import StudentHistory from "../StudentHistory/StudentHistory";
import Stepperitem from "./Stepperitem";
import "./styles.css";

export default function App() {
  const list = [
    <Example1  />,
    <Example2 />,
    <Example3 />,
    <Example4 />,
    <Example5 />,
    <Example6 />,
    <Example7 />,
  ];
  const title = [
    "Basic Information,Student History And Information"

  ];
  return (
    <div className="App ">
      <Stepperitem list={list}  />
    </div>
  );
}

const Example1 = ({ onPrev, onNext }) => {
  return (
    <>
    <div className="">
      <Basicinfo  />
      {/* <div>
        <button onClick={onPrev}>Prev</button>
        <button     type="submit"
              // onClick={handleNextStep}
              className="px-10 py-2 shadow-[0px_4px_8px_0px_rgba(184,182,182,0.25)] rounded-[5px] bg-[#159BD6] text-[color:var(--03,#FFF)] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize"
          onClick={onNext}>Save & Next</button>
      </div> */}
      </div>
      </>
  );
};

const Example2 = ({ onPrev, onNext }) => {
  return (
    <>
      <StudentHistory/>
      <div>
        <button onClick={onPrev}>Prev</button>
        <button onClick={onNext}>Next</button>
      </div>
    </>
  );
};

const Example3 = ({ onPrev, onNext }) => {
  return (
    <>
      <ExamSheet/>
      <div>
        <button onClick={onPrev}>Prev</button>
        <button onClick={onNext}>Next</button>
      </div>
    </>
  );
};

const Example4 = ({ onPrev, onNext }) => {
  return (
    <>
      <MidSemester/>
      <div>
        <button onClick={onPrev}>Prev</button>
        <button onClick={onNext}>Next</button>
      </div>
    </>
  );
};

const Example5 = ({ onPrev, onNext }) => {
  return (
    <>
      <Activities/>
      <div>
        <button onClick={onPrev}>Prev</button>
        <button onClick={onNext}>Next</button>
      </div>
    </>
  );
};
const Example6 = ({ onPrev, onNext }) => {
  return (
    <>
      <Seminar/>
      <div>
        <button onClick={onPrev}>Prev</button>
        <button onClick={onNext}>Next</button>
      </div>
    </>
  );
};
const Example7 = ({ onPrev, onNext }) => {
  return (
    <>
      <Membership/>
      <div>
        <button onClick={onPrev}>Prev</button>
        <button onClick={onNext}>Next</button>
      </div>
    </>
  );
};
// import React, { useState } from "react";
// import "./Stepperpage.css";
// import { TiTick } from "react-icons/ti";
// import { NavLink } from "react-router-dom";
// const Page = () => {
//   const steps = [
//     {
//         path:"/info",
//     title:"Basic Information",},
//     {
//       path:"/history",
//     title:"Student History And Information",},
//     {
//       path:"/exam",
//     title:"External Exam Sheet",},
//     {
//       path:"/midsem",
//     title:"Mid Semester Details",},
//     {
//       path:"/activity",
//     title:"Participated  Co-Curricular Activities",},
//     {
//       path:"/seminar",
//     title:"Participated Seminar or Project",},
//     {
//       path:"/mentorship",
//     title:"Membership Organization"},];
//   const [currentStep, setCurrentStep] = useState(1);
//   const [complete, setComplete] = useState(false);
//   return (
//   <>
//    <div className="">
//     <div className="  relative left-5">
//         <div className=" p-[50]  ">
//       <div className="flex flex-col justify-center items-start">
//         {steps?.map((step, i) => (
//           <NavLink
//             key={i}
//             to={step.path}
//             className={`step-item  ${currentStep === i + 1 && "active"} ${
//               (i + 1 <= currentStep || complete) && "complete"
//             } `}
//           >
//             <div className="step ">
//               {/* {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1} */}
//             </div>
//             <p className="text-[#BDBDBD] absolute  left-14 w-40   ">{step.title}</p>
//           </NavLink>
//         ))}
//       </div>
//       {!complete && (
//         <button
//           className="btn"
//           onClick={() => {
//             currentStep === steps.length
//               ? setComplete(true)
//               : setCurrentStep((prev) => prev + 1);
//           }}
//         >
//           {currentStep === steps.length ? "Finish" : "Next"}
//         </button>
//       )}
//       </div>
//       </div>

//           {/* line */}
//           <div className="absolute top-28  left-[17rem]  bg-[#D9D9D9] w-[2px] h-[33rem] ">
//     </div>

          
//       </div>
//     </>
//   );
// };

// export default Page;