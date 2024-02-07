import React,{useState} from 'react'
import { FaSortDown } from "react-icons/fa";
const AttendancePrinciple = () => {
  const [selectedOption, setSelectedOption] = useState('');
 
  const [data,setData] = useState({});
  const options = [
    "2021","2022","2023","2024",
  ];
  const options2 = [
    "Semester 2","Semester 3","Semester 4",
  ];
  const options3 = [
    "MCA","BCA","MCA",
  ];
  const onOptionChangeHandler = (event) => {
    setData(event.target.value);
    console.log(
        "User Selected Value - ",
        event.target.value
    );
};
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  console.log(selectedOption)
  const data1 = [
    {
      image: `./img/Rectanglehod.png`,
      title: 'Computer Engineering',
      imagetitle: "CE",
      
      
      hod: "HOD : ",
      hodmail:"HOD Email:",
      email:"Sandeepmodha@ldrp.ac.in",
      mentorname: " Sandeep Modha",
      Classes:'Classes:',
      no:"5",
      path: "#",
      styleborder:`bg-[#FFC2C2] border px-6 text-center rounded-[10px] text-[#FF0000]`,
    },
    {
      image: `./img/Rectanglehod.png`,
      title: 'Civil Engineering',
      imagetitle: "Civil",
      
      
      hod: "HOD : ",
      hodmail:"HOD Email:",
      email:"Sandeepmodha@ldrp.ac.in",
      mentorname: " Sandeep Modha",
      Classes:'Classes:',
      no:"5",
      path: "#",
      styleborder:`bg-[#C2FFDE] border px-6 text-center rounded-[10px] text-[#00C313]`,
    },
    {
      image: `./img/Rectanglehod.png`,
      title: 'IT Engineering',
      imagetitle: "IT",
      
      
      hod: "HOD : ",
      hodmail:"HOD Email:",
      email:"Sandeepmodha@ldrp.ac.in",
      mentorname: " Sandeep Modha",
      Classes:'Classes:',
      no:"5",
      path: "#",
      styleborder:`bg-[#C2FFDE] border px-6 text-center rounded-[10px] text-[#00C313]`,
    },
    {
      image: `./img/Rectanglehod.png`,
      title: 'Mechanical Engineering',
      imagetitle: "ME",
      
      
      hod: "HOD : ",
      hodmail:"HOD Email:",
      email:"Sandeepmodha@ldrp.ac.in",
      mentorname: " Sandeep Modha",
      Classes:'Classes:',
      no:"5",
      path: "#",
      styleborder:`bg-[#C2FFDE] border px-6 text-center rounded-[10px] text-[#00C313]`,
    },
    {
      image: `./img/Rectanglehod.png`,
      title: 'Computer Engineering',
      imagetitle: "CE",
      
      
      hod: "HOD : ",
      hodmail:"HOD Email:",
      email:"Sandeepmodha@ldrp.ac.in",
      mentorname: " Sandeep Modha",
      Classes:'Classes:',
      no:"5",
      path: "#",
      styleborder:`bg-[#C2FFDE] border px-6 text-center rounded-[10px] text-[#00C313]`,
    },
    {
      image: `./img/Rectanglehod.png`,
      title: 'Electrical Engineering',
      imagetitle: "EE",
      
      
      hod: "HOD : ",
      hodmail:"HOD Email:",
      email:"Sandeepmodha@ldrp.ac.in",
      mentorname: " Sandeep Modha",
      Classes:'Classes:',
      no:"5",
      path: "#",
      styleborder:`bg-[#C2FFDE] border px-6 text-center rounded-[10px] text-[#00C313]`,
    },
    {
      image: `./img/Rectanglehod.png`,
      title: 'MCA',
      imagetitle: "MCA",
      
      
      hod: "HOD : ",
      hodmail:"HOD Email:",
      email:"Sandeepmodha@ldrp.ac.in",
      mentorname: " Sandeep Modha",
      Classes:'Classes:',
      no:"5",
      path: "#",
      styleborder:`bg-[#C2FFDE] border px-6 text-center rounded-[10px] text-[#00C313]`,
    },
  ]
  return (
    <>
     <div className='px-2 w-full'>
      <div className=" rounded-[6px]  py-5 overflow-y-auto  bg-[#FFF]  ">
        {/* section 1 */}
        <div className="flex justify-between  mx-auto px-4">
          {/* ==========year============= */}
          <div className="flex gap-2 ">

            <label className="py-2 font-Poppins text-[16px] not-italic font-semibold leading-normal text-[#101010]">
              Year
            </label>
            <div className="flex justify-center relative min-w-[120px] px-1 h-[40px]">
               <select  onChange={onOptionChangeHandler} className="focus:outline-none  pl-5 rounded-[5px] border-none appearance-none p-2 w-[100%]  text-white text-[18px]  font-inter not-italic font-medium leading-[normal] tracking-[0.36px] capitalize bg-[#47A5E4] "
              id="12th"
              name="selectoption"
              // value={selectoption}
              // onChange={handleInputChange}
              //onBlur={validateOne}
              tabIndex={1}
               
               >
               <option className="">2020</option>
               {options.map((option, index) => {
                return (
                    <option key={index}>
                        {option}
                    </option>
                );
               })}
               </select>
               <div  className="icon-container pointer-events-none w-[20px] h-[100%] absolute -top-1 right-4 flex items-center justify-center ">
                <span  className="text-[20px] text-white  "><FaSortDown /></span>
               </div>
               </div>
            {/* <select 
            id="selectOption"
            value={selectedOption}
            onChange={handleSelectChange}
            
            className="bg-[#47A5E4] w-[7.9rem] h-[40px] border rounded-[5px] border-[#47A5E4] text-[#FFF]
      text-center font-Inter text-[18px] not-italic font-medium leading-normal tracking-[ 0.36px] capitalize">
              <option>2020</option>
              <option>2021</option>
              <option>2022</option>
              <option>2023</option>
            </select> */}

          </div>

          {/* ===========year end =========== */}


          {/* ==========Semester============= */}
          <div className="flex gap-2 ">

            <label className="py-2 font-Poppins text-[16px] not-italic font-semibold leading-normal text-[#101010]">
              Semester
            </label>
            <div className="flex justify-center relative min-w-[170px] px-1 h-[40px]">
               <select  onChange={onOptionChangeHandler} className=" focus:outline-none pl-5 rounded-[5px] border-none appearance-none p-2 w-[100%]  text-white text-[18px]  font-inter not-italic font-medium leading-[normal] tracking-[0.36px] capitalize bg-[#47A5E4] "
              id="12th"
              name="selectoption"
              // value={selectoption}
              // onChange={handleInputChange}
              //onBlur={validateOne}
              tabIndex={1}
               
               >
               <option className="">Semester 1</option>
               {options2.map((option, index) => {
                return (
                    <option key={index}>
                        {option}
                    </option>
                );
               })}
               </select>
               <div  className="icon-container pointer-events-none w-[20px] h-[100%] absolute -top-1 right-4 flex items-center justify-center ">
                <span  className="text-[20px] text-white  "><FaSortDown /></span>
               </div>
               </div>
            {/* <select 
            id="selectSem"
            value={selectedOption}
            onChange={handleSelectChange}
            className="bg-[#47A5E4] w-[7.9rem] h-[40px] border rounded-[5px] border-[#47A5E4] text-[#FFF]
      text-center font-Inter text-[18px] not-italic font-medium leading-normal tracking-[ 0.36px] capitalize">
              <option>Semester1</option>
              <option>Semester2</option>
              <option>Semester3</option>
              <option>Semester4</option>
            </select> */}

          </div>

          {/* ===========Semester1 end =========== */}

          {/* ==========Department============= */}
          <div className="flex gap-2 ">

            <label className="py-2 font-Poppins text-[16px] not-italic font-semibold leading-normal text-[#101010]">
              Department
            </label>
            <div className="flex justify-center relative min-w-[120px] px-1 h-[40px]">
               <select  onChange={onOptionChangeHandler} className=" focus:outline-none  pl-5 rounded-[5px] border-none appearance-none p-2 w-[100%]  text-white text-[18px]  font-inter not-italic font-medium leading-[normal] tracking-[0.36px] capitalize bg-[#47A5E4] "
              id="12th"
              name="selectoption"
              // value={selectoption}
              // onChange={handleInputChange}
              //onBlur={validateOne}
              tabIndex={1}
               
               >
               <option className="">BCA</option>
               {options3.map((option, index) => {
                return (
                    <option key={index}>
                        {option}
                    </option>
                );
               })}
               </select>
               <div  className="icon-container pointer-events-none w-[20px] h-[100%] absolute -top-1 right-4 flex items-center justify-center ">
                <span  className="text-[20px] text-white  "><FaSortDown /></span>
               </div>
               </div>
            {/* <select 
            id="selectDepart"
            value={selectedOption}
            onChange={handleSelectChange}
            className="bg-[#47A5E4] w-[7.9rem] h-[40px] border rounded-[5px] border-[#47A5E4] text-[#FFF]
     text-center font-Inter text-[18px] not-italic font-medium leading-normal tracking-[ 0.36px] capitalize">
              <option>BCA</option>
              <option>MCA</option>

            </select> */}

          </div>



        </div>

        {/* section 2 */}
        <div className="relative px-2 py-10">
          <div className="grid grid-cols-3  gap-2 gap-y-20 items-center justify-center">
            {data1.map((value, index) => {
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
                        <span className="absolute top-[0.5rem] right-[2.5rem]  text-white text-[20px] font-bold leading-[84.72px] tracking-[2%] ">
                          {value.imagetitle}
                        </span>
                      </div>
                      <div className=" ">
                        <span className=" font-Inter text-[1rem] not-italic font-bold text-[#101010] leading-normal  ">
                          {value.title}
                        </span>
                        <div>
                          <span className="font-Inter text-[0.8rem] not-italic font-bold text-[#101010] leading-normal">
                            {value.hod}
                          </span>
                          <span className="p-1  font-Inter text-[0.7rem] not-italic font-medium text-[#101010] leading-normal">
                            {value.mentorname}
                          </span>
                        </div>
                        <div>
                          <span className="font-Inter text-[0.8rem] not-italic font-bold text-[#101010] leading-normal">
                            {value.hodmail}
                          </span>
                          <span className="p-1  font-Inter text-[0.7rem] not-italic font-medium text-[#101010] leading-normal">
                            {value. email}
                          </span>
                        </div>

                        <div>
                          <span className="font-Inter text-[0.8rem] not-italic font-bold text-[#101010] leading-normal">
                            {value.Classes}
                          </span>
                          <span className="p-1 font-Inter text-[0.7rem] not-italic font-medium text-[#101010] leading-normal">
                            {value.no}
                          </span>
                        </div>
                      </div>
                     
                    
                    </div>
                    {/* msg */}
       <div className="pl-4 my-1">
       <div>
                    <button className={''+ value.styleborder}>All Done</button>
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
       

      </div>
      </div>
    </>
  )
}

export default AttendancePrinciple