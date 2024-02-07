// 'use client';
import React, { useEffect, useState } from 'react';
import Basicinfo from "../Basicinfo/Basicinfo";
import StudentHistory from "../StudentHistory/StudentHistory";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Stepper from "./Components/Stepper/Stepper";
// import StepperControl from "./Components/Stepper/StepperControl";
// import { UseContextProvider } from "./Components/Stepper/StepperContext";

import ExamSheet from "../ExamSheet/ExamSheet";
import MidSemester from "../MidSemester/MidSemester";
import Activities from "../Activities/Activities";
import Seminar from "../Seminar/Seminar";
import Membership from "../Membership/Membership";
// import Progressbar from "./Components/Progressbar/Progressbar";

// import StepA from './StepA';
// import StepB from './StepB';
// import StepC from './StepC';
// import StepD from './StepD';
// import StepFinal from './StepFinal';

// This is the parent component.
// This component will control and manage steps and data

// Step A: Customer Identity Info
// Step B: Customer Business Info
// Step C: Customer Financial Info
// Step D: Confirm Form  Data

// Step Final: Succes Result

const initialFormData = {
  firstName: '',
  lastName: '',
  businessName: '',
  businessCity: '',
  businessWebsite: '',
  businessEmail: '',
  incomePerMonth: 0,
  taxPercantage: 0,
  agreeToTerms: false,
};

const stepsArray = ['A', 'B', 'C', 'D'];

const Progressbar = ({ showStepNumber }) => {
  const [step, setStep] = useState('A');
  const [formData, setFormData] = useState(initialFormData);

  // We need a method to go to next step
  const handleNextStep = () => {
    if (step === 'A') setStep('B');
    else if (step === 'B') setStep('C');
    else if (step === 'C') setStep('D');
  };

  // We need a method to go to prev step
  const handlePrevStep = () => {
    if (step === 'D') setStep('C');
    else if (step === 'C') setStep('B');
    else if (step === 'B') setStep('A');
  };

  // We need a method to update our formData
  const handleChangeInput = (event) => {
    const fieldName = event.target.name;
    let fieldValue;
    if (fieldName === 'agreeToTerms') {
      fieldValue = event.target.checked;
    } else {
      fieldValue = event.target.value;
    }
    setFormData({
      ...formData,
      [fieldName]: fieldValue,
    });
  };

  // We need a method to do final operation
  const handleSubmitFormData = () => {
    // Here You can do final Validation and then Submit Your form
    if (!formData.agreeToTerms) {
      alert('Error!!!!!!   You must agree to Terms of Services!!!!');
    } else {
      setStep('Final');
    }
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  // Section for render StepNumbers
  const renderTopStepNumbers = () => {
    if (!showStepNumber || step === 'Final') {
      return null;
    }
    return (
      <section className='mt-2 mb-4 flex '>
        {stepsArray.map((item) => (
          <div
            key={item}
            className={`w-8 h-8 flex justify-center items-center border-2 border-gray-600 rounded-full cursor-pointer ${
              item === step ? 'bg-blue-500' : ''
            }`}
            onClick={() => setStep(item)}
          >
            {item}
          </div>
        ))}
      </section>
    );
  };

  return (
    <div className='w-[600px] max-w-full px-6 py-1 mx-auto rounded-lg border-2 border-dotted border-sky-300'>
      {renderTopStepNumbers()}

      {step === 'A' ? (
        <Basicinfo
          formData={formData}
          handleChangeInput={handleChangeInput}
          handleNextStep={handleNextStep}
        />
      ) : null}
      {step === 'B' ? (
        <StudentHistory
          formData={formData}
          handleChangeInput={handleChangeInput}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
        />
      ) : null}
      {step === 'C' ? (
        <ExamSheet
          formData={formData}
          handleChangeInput={handleChangeInput}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
        />
      ) : null}
      {step === 'B' ? (
        <MidSemester
          formData={formData}
          handleChangeInput={handleChangeInput}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
        />
      ) : null}
      {step === 'B' ? (
        <Activities
          formData={formData}
          handleChangeInput={handleChangeInput}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
        />
      ) : null}
      {step === 'B' ? (
        <Seminar
          formData={formData}
          handleChangeInput={handleChangeInput}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
        />
      ) : null}
      {step === 'D' ? (
        <Membership
          formData={formData}
          handleChangeInput={handleChangeInput}
          handlePrevStep={handlePrevStep}
          handleSubmitFormData={handleSubmitFormData}
        />
      ) : null}
    </div>
  );
};

export default Progressbar;







// import React, { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Basicinfo from '../Basicinfo/Basicinfo';
// import StudentHistory from '../StudentHistory/StudentHistory';

// function Progressbar() {
// //   const formArray = [
// //     {
// //       no: "",
// //       title: "Basic Information",
// //   },
// //   {
// //     no: "",
// //     title: "Student History And Information",
// // },
// //   {
// //     no: "",
// //     title: "External Exam Sheet",
// // },
// // {
// //   no: "",
// //   title: "Mid Semester Details",
// // },
// // {
// //   no: "",
// //   title: "Participated  Co-Curricular Activities",
// // },
// // {
// //   no: "",
// //   title: "Participated Seminar or Project",
// // },
// // {
// //   no: "",
// //   title: "Membership Organization",
// // },

// // ];
// const formArray = ["Basic Information", "Student History And Information", "External Exam Sheet","Mid Semester Details","Participated  Co-Curricular Activities","Participated Seminar or Project","Membership Organization"];
//   const [formNo, setFormNo] = useState(formArray[0])
//   const [state, setState] = useState({
//     name: '',
//     dept: '',
//     batch: '',
//     varsity: '',
//     session: '',
//     address: '',
//     district: '',
//     thana: '',
//     post: ''
//   })
//   const inputHandle = (e) => {
//     setState({
//       ...state,
//       [e.target.name]: e.target.value
//     })
//   }
//   const next = () => {
//     if (formNo === "Basic Information" ) {
//       setFormNo(formNo + 1)
//     }
//     else if (formNo === "Student History And Information" && state.varsity && state.session && state.address) {
//       setFormNo(formNo + 1)
//     } 
//   }
//   const pre = () => {
//     setFormNo(formNo - 1)
//   }
//   const finalSubmit = () => {
//     if (state.district && state.thana && state.post) {
//       toast.success('form submit success')
//     } else {
//       toast.error('Please fillup all input field')
//     }
//   }
//   return (
//     <div className="w-full h-full bg-white py-5   ">
//       <ToastContainer />
//       <div className="card flex flex-row   p-5">
//         {/* <div className='flex flex-col justify-start items-start'>
//           {
//             formArray.map((v, i) =>
//              <>
//              <div className='w-full  flex flex-col justify-start  gap-y-10 '>
//              <div className='relative flex flex-row gap-x-6 items-center py-5  '>
//              <div className={`rounded-full flex-row transition duration-500 ease-in-out  h-6 w-6 flex items-center justify-center py-3 ${formNo - 1 === i || formNo - 1 === i + 1 || formNo === formArray.length ? 'bg-blue-500' : 'bg-slate-400'} `}>
//               {}
//             </div>
//             <div className=' top-0 flex justify-start cursor-pointer items-center text-center  pl-12 flex-row w-60 text-[16px] font-Poppins font-semibold uppercase text-[color:var(--02,#47A5E4)] text-xs not-italic  leading-[normal]'>{v}</div>
//               </div>  
//             </div >
//             <div>
//                           {
//                 i !== formArray.length - 1 && <div className={`relative top-0 -left-[1.4rem]   rotate-90  z-1 w-[4.4rem] border-t-2 transition duration-1000 ease-in-out ${formNo === i + 2 || formNo === formArray.length ? 'bg-blue-500' : 'bg-slate-400'}`}></div>
//               }
//               </div>
//             </>)
//           }
//         </div> */}
//         <div
//         className={ "w-full  flex flex-col justify-start  gap-y-8"
//         }
//       >
//           {
//             formArray.map((v, i) =>
//              <>        
//         <div className="relative flex flex-row gap-x-6 items-center ">
//           <div
//             className={`rounded-full flex-row transition duration-500 ease-in-out  h-6 w-6 flex items-center justify-center py-3 ${formNo - 1 === i || formNo - 1 === i + 1 || formNo === formArray.length ? 'bg-blue-500' : 'bg-slate-400'} `}
//           >
//             {}
//           </div>
//           <div
//             className={`absolute top-0 flex justify-center cursor-pointer items-center text-center  pl-12 flex-row w-60 text-[16px] font-Poppins font-semibold uppercase text-[color:var(--02,#47A5E4)] text-xs not-italic  leading-[normal] `}
//           >
//             {v}
//           </div>
//         </div>
//         {
//                 i !== formArray.length - 1 && <div
//           className={`relative top-0.5 -left-[1.4rem]   rotate-90  z-1 w-[4.4rem] border-t-2 transition duration-1000 ease-in-out ${formNo === i + 2 || formNo === formArray.length ? 'bg-blue-500' : 'bg-slate-400'}  `}
//         ></div>}
//             </>)
//           }
//       </div>
//       <div className="circleWrapper">

// </div>

//         {
//           formNo === "Basic Information" && 
//           <div>
//            <Basicinfo/>
//            <div className='mt-4 flex justify-center items-center'>
//               <button onClick={next} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Next</button>
//             </div>
//           </div>
//         }

//         {
//           formNo === "Student History And Information" &&
//            <div>
//            <StudentHistory/>
//             <div className='mt-4 gap-3 flex justify-center items-center'>
//               <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Previous</button>
//               <button onClick={next} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Next</button>
//             </div>
//           </div>
//         }
//  {
//           formNo === "Membership Organization" && <div>
//             <div className='flex flex-col mb-2'>
//               <label className='text-slate-500' htmlFor="varsity">Varsity</label>
//               <input value={state.varsity} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md' type="text" name='varsity' placeholder='varsity name' id='varsity' />
//             </div>
//             <div className='flex flex-col mb-2'>
//               <label className='text-slate-500' htmlFor="session">session</label>
//               <input value={state.session} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md' type="text" name='session' placeholder='session' id='session' />
//             </div>
//             <div className='flex flex-col mb-2'>
//               <label className='text-slate-500' htmlFor="address">Address</label>
//               <textarea value={state.address} onChange={inputHandle} row='10' className='p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md' type="number" name='address' placeholder='address' ></textarea>
//             </div>
//             <div className='mt-4 gap-3 flex justify-center items-center'>
//               <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Previous</button>
//               <button onClick={next} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Next</button>
//             </div>
//           </div>
//         }
//  {
//           formNo === "Membership Organization" && <div>
//             <div className='flex flex-col mb-2'>
//               <label className='text-slate-500' htmlFor="varsity">Varsity</label>
//               <input value={state.varsity} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md' type="text" name='varsity' placeholder='varsity name' id='varsity' />
//             </div>
//             <div className='flex flex-col mb-2'>
//               <label className='text-slate-500' htmlFor="session">session</label>
//               <input value={state.session} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md' type="text" name='session' placeholder='session' id='session' />
//             </div>
//             <div className='flex flex-col mb-2'>
//               <label className='text-slate-500' htmlFor="address">Address</label>
//               <textarea value={state.address} onChange={inputHandle} row='10' className='p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md' type="number" name='address' placeholder='address' ></textarea>
//             </div>
//             <div className='mt-4 gap-3 flex justify-center items-center'>
//               <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Previous</button>
//               <button onClick={next} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Next</button>
//             </div>
//           </div>
//         }
//  {
//           formNo === "Membership Organization" && <div>
//             <div className='flex flex-col mb-2'>
//               <label className='text-slate-500' htmlFor="varsity">Varsity</label>
//               <input value={state.varsity} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md' type="text" name='varsity' placeholder='varsity name' id='varsity' />
//             </div>
//             <div className='flex flex-col mb-2'>
//               <label className='text-slate-500' htmlFor="session">session</label>
//               <input value={state.session} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md' type="text" name='session' placeholder='session' id='session' />
//             </div>
//             <div className='flex flex-col mb-2'>
//               <label className='text-slate-500' htmlFor="address">Address</label>
//               <textarea value={state.address} onChange={inputHandle} row='10' className='p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md' type="number" name='address' placeholder='address' ></textarea>
//             </div>
//             <div className='mt-4 gap-3 flex justify-center items-center'>
//               <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Previous</button>
//               <button onClick={next} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Next</button>
//             </div>
//           </div>
//         }

//         {
//           formNo === 3 && <div>
//             <div className='flex flex-col mb-2'>
//               <label htmlFor="district">District</label>
//               <input value={state.district} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type="text" name='district' placeholder='district name' id='district' />
//             </div>
//             <div className='flex flex-col mb-2'>
//               <label htmlFor="thana">Thana</label>
//               <input value={state.thana} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type="text" name='thana' placeholder='thana' id='thana' />
//             </div>
//             <div className='flex flex-col mb-2'>
//               <label htmlFor="post">Post</label>
//               <input value={state.post} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type="text" name='post' placeholder='post' id='post' />
//             </div>
//             <div className='mt-4 gap-3 flex justify-center items-center'>
//               <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Previous</button>
//               <button onClick={finalSubmit} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Submit</button>
//             </div>
//           </div>
//         }

//       </div>
//     </div>
//   );
// }

// export default Progressbar;