import Activities from '../Activities/Activities';
import Basicinfo from '../Basicinfo/Basicinfo';
import ExamSheet from '../ExamSheet/ExamSheet';
import Membership from '../Membership/Membership';
import MidSemester from '../MidSemester/MidSemester';
import Seminar from '../Seminar/Seminar';
import StudentHistory from '../StudentHistory/StudentHistory';
import { useStepContext } from './StepContext';

import React from 'react'

const StepFinal = () => {
    const { stepNo, setStepNo } = useStepContext();
    const stepArray = ["Basic Information", "Student History And Information", "External Exam Sheet", "Mid Semester Details", "Participated  Co-Curricular Activities", "Participated Seminar or Project", "Membership Organization"];
    const next = () => {

        setStepNo(() => {
            if (stepNo < 7) {
                console.log(stepNo);
                return stepNo + 1;
            }

        })


    }


    const prev = () => {

        setStepNo(() => {
            if (stepNo > 0) {
                console.log(stepNo);
                return stepNo - 1;
            }
        })


    }

    return (
  
        <div className='bg-white px-16  relative top-8 '>
            {/* stepNo === i + 2 || stepNo == stepArray.length   STEPPER COMPONENT START i +1 < stepNo +1  xxx    stepNo - 1 === i || stepNo - 1 === i + 1 || stepNo === stepArray.length*/}
            <div className='Stepper flex justify-center items-center '>
                {

                    stepArray.map((v, i) => <>

                        <div className=' flex pb-20 pt-5 '>
                            <div className='stepName flex flex-col justify-center items-center'>

                                <div className={`stepNum md:w-[30px] md:h-[30px] w-[24px] h-[24px] md:text-[16px] text-[12px] flex justify-center items-center text-white rounded-full ${i + 1 < stepNo + 1 ? "bg-[#47A5E4]" : "bg-[#BDBDBD]"}`}>
                                    {i + 1}
                                </div>

                                <div className={` flex mt-[8px] md:text-[16px] pl-4 w-40 absolute pt-20 text-[12px]  ${ i +1 < stepNo +1  ? "text-[#47A5E4]" : "text-[#BDBDBD]"}`}>
                                    {v}
                                </div>
                            </div>

                            {
                                i !== stepArray.length - 1 && <div className={` md:w-[174px] md:h-[2px] md:mt-[14px] w-[94px] h-[2px] mt-[8px] ${  i +2 < stepNo +1 ? "bg-[#47A5E4]" : "bg-[#BDBDBD] "} `}>
                                </div>
                            }

                        </div>


                    </>)
                }
            </div>
            {/* STEPPER COMPONENT END*/}

            {stepNo === 1 && <Basicinfo />}
            {stepNo === 2 && <StudentHistory />}
            {stepNo === 3 && <ExamSheet />}
            {stepNo === 4 && <MidSemester />}
            {stepNo === 5 && <Activities />}
            {stepNo === 6 && <Seminar />}
            {stepNo === 7 && <Membership />}
            {/* <button onClick={prev}>Back</button>
            <button onClick={next}>Next</button> */}
        </div>
  
    )
}

export default StepFinal