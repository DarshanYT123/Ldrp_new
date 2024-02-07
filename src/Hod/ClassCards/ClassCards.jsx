import React from 'react'
import { FaArrowRight } from "react-icons/fa";
const ClassCards = () => {

  const data = [
    {
      roundimage:`/img/rounded.svg`,
      icon:"/img/MForm.svg",
      title:"Mentoring Forms",
      style:" absolute top-[1.5rem] left-[1.5rem] w-[43px] h-[43px]",
      styleborder: `border bg-[#C2FFDE] rounded-b-[11px] w-[10rem] h-6`,
      styletext:'text-[#00BE35] list-disc',
      path:"/hod/hodform",
    },
    {
      roundimage:`/img/rounded.svg`,
      icon:"/img/checklist.svg",
      title:"Attendance",
      style:"absolute top-[1.5rem] left-[1.6rem] w-[43px] h-[43px]",
      styleborder: `border bg-[#C2FFDE] rounded-b-[11px] w-[10rem] h-6`,
      styletext:'text-[#00BE35] list-disc',
      path:"/attendancehod/attendancetablehod",
    },
    {
      roundimage:`/img/rounded.svg`,
      icon:"/img/MForm.svg",
      title:"Fees",
      style:"absolute top-[1.5rem] left-[1.4rem] w-[43px] h-[43px]",
      styleborder: `border bg-[#C2FFDE] rounded-b-[11px] w-[10rem] h-6`,
      styletext:'text-[#00BE35] list-disc',
      path:"/feeshod/feestablehod",
    },

    {
      roundimage:`/img/rounded.svg`,
      icon:"/img/MForm.svg",
      title:"Results",
      style:"absolute top-[1.5rem] left-[1.5rem] w-[43px] h-[43px]",
      styleborder: `border bg-[#C2FFDE] rounded-b-[11px] w-[10rem] h-6`,
      styletext:'text-[#00BE35] list-disc',
      path:"/resultshod/resultstablehod",
      
    },
    {
      roundimage:`/img/rounded.svg`,
      icon:"/img/MForm.svg",
      title:"Send Notice/circular",
      style:"absolute  top-[1.6rem] left-[1.5rem] w-[39px] h-[43px]",
      styleborder: `border bg-[#C2FFDE] rounded-b-[11px] w-[10rem] h-6`,
      styletext:'text-[#00BE35] list-disc',
      path:"/dashod",
      
    },


  ]
  return (
    <>
    <div className='px-2 w-full'>
      <div className=" absolute top-20 flex flex-row items-center gap-x-2">
        <div className="">
        <span >Home</span>
        </div>
        <div>
        <FaArrowRight size={14} className=" "/>
        </div>
        <div className=" ">
        <span >Class</span>
        </div>
        <div>
        <FaArrowRight size={14} className=" "/>
        </div>
        <div className=" ">
        <span >B</span>
        </div>
      </div>
    <div className='bg-[#F9FAFA] p-10 '>
    

      {/* title */}
      <div className="flex items-center justify-center">
        <h1 className="font-Raleway text-[#47A5E4] text-[20px] not-italic font-bold leading-normal tracking-[1.1px]">B Class Of Computer Engineering </h1>
      </div>

      
      {/* end title */}

      {/* card  */}

      <div className="relative px-2 py-5">
          <div className="grid grid-cols-3   gap-4 gap-y-20 items-center justify-center">
      {/* map function */}

      {data.map((value, index) => {
              return (
                  <div key={index} >
                     
 <a href={value.path}>
                  <div className="border w-[21rem] h-[6rem] rounded-[11px] bg-[#FFF] shadow-[rgba(153,153,153,0.25)_2px_4px_28px_0px]">

                    <div className="flex ">
                      <div className="relative">
                        <img src={value.roundimage} className="w-[93px] h-[93px] py-2 px-2"/>
                        <img src={value.icon} className={""+ value.style}/>
                      </div>
                      {/* <div className=" ">
                        <img src={value.icon} className={""+ value.style}/>
                      </div> */}
                      <div className='text-center pt-7'>
                        <h1 className='text-[#16376E] font-Raleway  text-[1.2rem] not-italic font-bold leading-normal tracking-[1.1px] '>{value.title}</h1>
                      </div>
                      
                      
                    </div>
          </div>

          <div className="pl-4">
                  {/* <div className= {""+ value.styleborder }  >
                   
                    <ul className={"text-center max-w-md space-y-1  list-inside font-inter text-[0.9rem] font-semibold leading-normal tarking-[0.28px] "+ value.styletext}>
                      <li>
                      All Done
                      </li>

                    </ul>
                  </div> */}

                  <div>
                    <button className='bg-[#C2FFDE] border px-6 text-center rounded-[10px] text-[#00BE35]'>All Done</button>
                  </div>
                 
                  </div>
                 
                  </a>
                  </div>
                
                )
            })}


     

      </div>
      </div>
      </div>
      </div>
    {/* cards end  */}
    </>
  )
}

export default ClassCards