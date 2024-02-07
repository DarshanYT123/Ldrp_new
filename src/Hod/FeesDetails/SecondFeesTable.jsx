import React, { useEffect,useState } from 'react'

const SecondFeesTable = ({handleNextStep}) => {

  const data = [
    {
      image: `./img/Rectanglehod.png`,
      imagetitle: "B",
      nos: "No. of Students",
      sno: '78',
      snostyle: 'absolute top-[4.5rem] right-[9rem] text-[#FFF] text-[14px]',
      mentor: "Mentor :  ",
      mentorname: "Vaishali Patel",
      cc: "CC:",

      email: "VaishaliPatel@ldrp.ac.in",

      // styleborder: `border bg-[#FFC2C2] rounded-b-[11px] w-[10rem] h-6`,
      // styletext:'text-[#FF0000] list-disc',
      styleborder: `bg-[#FFC2C2] border px-6 text-center rounded-[10px] text-[#FF0000]`,
      path: "/hod/classcards",
    },
    {
      image: `./img/Rectanglehod.png`,
      imagetitle: "D",
      nos: "No. of Students",
      sno: '78',
      snostyle: 'absolute top-[4.5rem] right-[9rem] text-[#FFF] text-[14px]',
      mentor: "Mentor :  ",
      mentorname: "Vaishali Patel",
      cc: "CC:",

      email: "VaishaliPatel@ldrp.ac.in",
      path: "/hod/classcards",
      // styleborder: `border bg-[#C2FFDE] rounded-b-[11px] w-[10rem] h-6`,
      // styletext:'text-[#00C313] list-disc',
      styleborder: `bg-[#C2FFDE] border px-6 text-center rounded-[10px] text-[#00C313]`,

    },
    {
      image: `./img/Rectanglehod.png`,
      imagetitle: "E",
      nos: "No. of Students",
      sno: '78',
      snostyle: 'absolute top-[4.5rem] right-[9rem] text-[#FFF] text-[14px]',
      mentor: "Mentor :  ",
      mentorname: "Vaishali Patel",
      cc: "CC:",

      email: "VaishaliPatel@ldrp.ac.in",
      path: "/hod/classcards",
      styleborder: `bg-[#C2FFDE] border px-6 text-center rounded-[10px] text-[#00C313]`,

    },
    {
      image: `./img/Rectanglehod.png`,
      imagetitle: "B",
      nos: "No. of Students",
      sno: '78',

      snostyle: 'absolute top-[4.5rem] right-[9rem] text-[#FFF] text-[14px]',
      mentor: "Mentor :  ",
      mentorname: "Vaishali Patel",
      cc: "CC:",

      email: "VaishaliPatel@ldrp.ac.in",
      path: "/hod/classcards",
      styleborder: `bg-[#C2FFDE] border px-6 text-center rounded-[10px] text-[#00C313]`,

    },
    {
      image: `./img/Rectanglehod.png`,
      imagetitle: "K",
      nos: "No. of Students",
      sno: '78',
      snostyle: 'absolute top-[4.5rem] right-[9rem] text-[#FFF] text-[14px]',
      mentor: "Mentor :  ",
      mentorname: "Vaishali Patel",
      cc: "CC:",

      email: "VaishaliPatel@ldrp.ac.in",
      path: "/hod/classcards",
      styleborder: `bg-[#C2FFDE] border px-6 text-center rounded-[10px] text-[#00C313]`,

    },


  ]
// const data2 = [
//   {
//       imagetitle: "B",
//       nos:"No. of Students",
//       sno:'78',
//       attendance:"All over Attendance",
//       per:"80%",
//       mentor:"Mentor:",
//       mentor2:"xyz",
//       email_1:"xyz13@ldrp.ac.in",
//       cc:"CC:",
//       cc2:"abc",
//       email:"abc21@ldrp.ac.in"

//     },
//   ]

  return (
    <>
    <div className='px-2 w-full'>
      <div className=" rounded-[6px] py-5 overflow-y-auto   bg-[#F9FAFA]  ">
        <div className="py-5 px-8">
          <h1 className="font-Raleway text-[#47A5E4] text-center text-[20px] font-bold leading-[23.48px] tracking-[5.5%]">
            Classes Of Computer Engineering{" "}
          </h1>
        </div>


        {/* =======================second row ===================== */}


        <div className="relative px-2 py-10">
            <div className="grid grid-cols-3  gap-2 gap-y-20 items-center justify-center">
              {data.map((value, index) => {
                return (


                  <div className=" " key={index} >
                    <a href={value.path}>
                      <div className="border w-[22rem] h-[6.8rem] rounded-[11px] bg-[#FFF] shadow-[rgba(200,200,200,0.25)_0px_4px_24px_0px]">
                        <div className="flex ">
                          {/* img */}
                          <div className=" ">
                            <img src={value.image} className="w-[100%] h-auto" alt="image" />
                          </div>

                          <div className=" relative ">
                            <span className="absolute top-[0.5rem] right-[3rem]  text-white text-[20px] font-bold leading-[84.72px] tracking-[2%] ">
                              {value.imagetitle}
                            </span>
                          </div>
                          <div className=" relative  ">
                            <span className={'' + value.snostyle}>
                              {value.sno}
                            </span>
                            <div>
                              <span className="font-Inter text-[1rem] not-italic font-bold text-[#101010] leading-normal">
                                {value.mentor}
                              </span>
                              <span className="font-Inter text-[1rem] not-italic font-medium text-[#101010] leading-normal">
                                {value.mentorname}
                              </span>
                            </div>
                            <div>
                              <span className="font-Inter text-[0.8rem] not-italic font-medium leading-normal">
                                {value.email}
                              </span>
                              {/* <span className="p-1  font-Inter text-[0.7rem] not-italic font-medium text-[#101010] leading-normal">
                            {value. email}
                          </span> */}
                            </div>
                            {/* line */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="220" height="10" viewBox="0 0 271 2" fill="none">
                              <path d="M1.06738 1L269.567 1.5" stroke="#D9D9D9" stroke-linecap="round" stroke-dasharray="3 3" />
                            </svg>

                            <div>
                              <span className="font-Inter text-[1rem] not-italic font-bold text-[#101010] leading-normal">
                                {value.cc}
                              </span>
                              <span className=" p-1 font-Inter text-[1rem] not-italic font-medium text-[#101010] leading-normal">
                                {value.mentorname}
                              </span>
                            </div>
                            <div>

                              <span className="font-Inter text-[0.8rem] not-italic font-medium leading-normal text-[#101010]">
                                {value.email}
                              </span>
                            </div>
                          </div>


                        </div>
                        {/* msg */}
                        <div className="pl-4 ">
                          <div>
                            <button className={'' + value.styleborder}>All Done</button>
                          </div>
                          {/* <div className= {""+ value.styleborder }  >
                    
                    <ul className={"text-center max-w-md space-y-1  list-inside font-inter text-[0.9rem] font-semibold leading-normal tarking-[0.28px] "+ value.styletext}>
                      <li>
                        Mentoring Done
                      </li>

                    </ul>
                  </div> */}
                        </div>

                      </div>
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
        {/* =====================end ============================= */}
      </div>
      </div>
    </>
  );
};

export default SecondFeesTable;
