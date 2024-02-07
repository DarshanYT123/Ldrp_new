import React, { useState } from "react";
import MentorDragDropImage from "./MentorDragDropImage";
import MentorFatherDragDrop from "./MentorFatherDragDrop";
import MentorMotherDragDrop from "./MentorMotherDragDrop";
import { BiRightArrowAlt } from 'react-icons/bi'
import { FaArrowRight } from "react-icons/fa6";

const MentoringDashboard = ({handleNextStep}) => {
  const [values, setValues] = React.useState({
    studentname: "",
    enrollmentno: "",
    sem1_mentorname:"",
    sem2_mentorname:"",
    sem3_mentorname:"",
    sem4_mentorname:"",
    sem5_mentorname:"",
    sem6_mentorname:"",
    sem7_mentorname:"",
    startyear:"",
    department:"",
    batchdiv:""

  });

  
  const [validations, setValidations] = React.useState({
    studentname: "",
    enrollmentno: "",
  });

  const { studentname, enrollmentno,sem1_mentorname,sem2_mentorname,sem3_mentorname,
    sem4_mentorname,sem5_mentorname,sem6_mentorname,sem7_mentorname,startyear,department,batchdiv } = values;

  const validateAll = () => {
    const validations = { studentname: "", enrollmentno: "" };

    let isValid = true;
    if (!studentname) {
      //validations.firstName = 'First Name is required'
      alert("student Name is required" + validations.studentname);
      isValid = false;
    }
    if ((studentname && studentname.length < 3) || studentname.length > 50) {
      //validations.firstName = 'First Name must contain between 3 and 50 characters'
      alert(
        "Student  Name must contain between 3 and 50 characters: " +
          validations.studentname
      );
      isValid = false;
    }

    //Enrollment number validation
    if (!enrollmentno) {
      //validations.firstName = 'First Name is required'
      alert("student Name is required" + validations.enrollmentno);
      isValid = false;
    }
    if (
      (enrollmentno && enrollmentno.length < 10) ||
      enrollmentno.length > 15
    ) {
      alert("Please enter a Enrollment Number " + validations.enrollmentno);
      isValid = false;
    }

    if (!isValid) {
      setValidations(validations);
    }

    return isValid;
  };

  const validateOne = (e) => {
    const { name } = e.target;
    const value = values[name];
    let message = "";
    if (!value) {
      // message = `${name} is required`
      alert(`${name}  is required` + message);
    }

    if (
      value &&
      name === "studentname" &&
      (value.length < 3 || value.length > 50)
    ) {
      //message = 'Name must contain between 3 and 50 characters'
      alert(
        " Student Name must contain between 3 and 150 characters: " + message
      );
    }

    //
    if (
      value &&
      name === "enrollmentno" &&
      (value.length < 10 || value.length > 15)
    ) {
      //message = 'Name must contain between 3 and 50 characters'
      alert(" Please enter a valid Enrollment number: " + message);
    }

    // const  enrollmentnoRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+$/;
    // if (value && name === 'enrollmentno' && !enrollmentnoRegex.test(value)){

    //   alert('Please enter a valid Enrollment number' + message);
    // }

    setValidations({ ...validations, [name]: message });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    //setState({...state,[name]:value});
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateAll();

    if (!isValid) {
      return false;
    }

    alert(JSON.stringify(values));
  };

  const textInput = React.useRef();

  return (
    <>
    <div className="w-full px-2">
   <div className='flex flex-row items-center gap-x-1 py-1 absolute top-20'>
<h1 className='text-[color:var(--black,#101010)] text-[14px] font-inter not-italic font-semibold leading-[normal] tracking-[0.28px] capitalize'>Mentoring Form</h1>
<FaArrowRight />
<h1 className='text-[color:var(--black,#101010)] text-[14px] font-inter not-italic font-semibold leading-[normal] tracking-[0.28px] capitalize'>21BECE30000</h1>

</div>
      <div className=" ">
        <div className=" absolute top-3 flex flex-row items-center gap-x-2 py-1">
          <h1 className=" text-[color:var(--black,#101010)] text-[12px] font-inter not-italic font-bold leading-[normal] tracking-[0.66px] ">Mentoring Form </h1>
        <span><FaArrowRight /></span>
        <h1 className="text-[color:var(--black,#101010)] text-[12px] font-inter not-italic font-bold leading-[normal] tracking-[0.66px]">21BECE3000</h1>
        </div>
      <div className="overflow-hidden rounded-lg   w-full  p-10  pt-5   bg-white ">
      <div className="flex flex-row  justify-between items-center">
        <h2 className="text-[color:var(--01,#16376E)] text-[20px] font-Poppins not-italic font-bold leading-[normal] tracking-[1.1px]">21BECE30000</h2>
        <h2 className="text-[color:var(--01,#16376E)] text-[18px] font-Poppins not-italic font-bold leading-[normal] tracking-[0.99px]">Raj Mehta</h2>
      </div>

        <div className="flex justify-center  items-center">
          <h2 className="text-[color:var(--02,#47A5E4)] text-[20px] font-Raleway not-italic font-bold leading-[normal] tracking-[1.1px]">
            Basic Information
          </h2>
        </div>
        <div className=" pt-7 flex flex-row  items-center">
          <div className="flex px-1">
            <h2 className="text-[color:var(--01,#159BD6)] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">
              {" "}
              Note:
            </h2>
          </div>
          <div className="flex ">
            <h2 className="text-[color:var(--01,#159BD6)] text-[14px] font-inter not-italic font-normal leading-[normal] tracking-[0.28px] capitalize">
              Please Fill all the details in{" "}
              <span className="text-[color:var(--01,#159BD6)] text-[14px] font-inter not-italic font-semibold leading-[normal] tracking-[0.28px] capitalize">
                CAPITAL
              </span>{" "}
              Letters only
            </h2>
          </div>
        </div>

        {/* FORM START */}
        <form onSubmit={handleSubmit}>
          <div className="flex  flex-row justify-between items-center py-5">
            <div className="">
              <label
                for="fullname"
                className=" flex justify-start  py-2 text-[18px] not-italic font-inter font-semibold text-[#1E1E1E] leading-normal"
              >
                Student Name{" "}
              </label>
              <div className=" p-0.5 w-[203px] h-[48px] ">
                <input
                  type="text"
                  id="studentname"
                  name="studentname"
                  value={studentname}
                  onChange={handleInputChange}
                  onBlur={validateOne}
                  placeholder="Full Name Of Student"
                  className="text-[color:var(--06,#CBCBCB)] hover:border-[2px] hover:border-[#159BD6]  text-[16px] font-inter not-italic font-medium leading-[normal] tracking-[0.32px] capitalize w-[380px] h-[40px] rounded-[5px] border-[1px] border-[#CBCBCB] bg-[#fff]  p-3  focus:outline-none"
                  required
                  tabIndex={1}
                />
              </div>
            </div>
            <div className="">
              <label
                for="enrollmentno"
                className="  flex justify-start py-2 text-[18px] not-italic font-inter font-semibold text-[#1E1E1E] leading-normal"
              >
                Enrollment No{" "}
              </label>
              <div className=" p-0.5 w-[303px] h-[48px] ">
                <input
                  type="text"
                  placeholder="Enrollment No"
                  name="enrollmentno"
                  value={enrollmentno}
                  onChange={handleInputChange}
                  onBlur={validateOne}
                  className="text-[color:var(--06,#CBCBCB)] hover:border-[2px] hover:border-[#159BD6] text-[16px] font-inter not-italic font-medium leading-[normal] tracking-[0.32px] capitalize  w-[313px] h-[40px] rounded-[5px] border border-[#D9D9D9] bg-[#fff]  p-3  focus:outline-none"
                  required
                  tabIndex={2}
                />
              </div>
            </div>
          </div>
          {/* PHOTOS ADD */}
          <div className="flex justify-between px-10 flex-row  items-center py-4">
            <MentorDragDropImage />
            <MentorFatherDragDrop />
            <MentorMotherDragDrop />
           
          </div>
          {/* MENTOR ADD */}
          <div className=" flex flex-row justify-between items-center py-4 ">
            <div>
            <div className=" relative  w-[100%]">
              <table className=" min-w-[100%] max-h-[250px] overflow-y-scroll overflow-hidden border-collapse ">
                <thread>
                <tr className="    px-3 sticky top-0 z-20 max-h-[70px]  h-[10px] ">
                  <th className="px-[4.1rem]  whitespace-nowrap border-r-[1px]  bg-[#159BD6] rounded-[5px_0px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                    Sem
                  </th>
                  <th className="px-[7.1rem]  whitespace-nowrap border-l-[1px]  bg-[#159BD6] rounded-[0px_4px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                    Mentor Name
                  </th>
                </tr>
                </thread>
                <tbody>
                <tr className="text-sm  h-[45px] rounded-lg  px-3 transition-all duration-300">
                  <td className="flex flex-row ">
                  <div className="px-[4.6rem] py-2 whitespace-nowrap border-[1px]   border-[#47A5E4] text-[color:var(--black,#101010)] text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                    1st
                  </div>
                  <input
                    type="text"
                    name="sem1_mentorname"
                    value={sem1_mentorname}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder=""
                    className="p-3 w-[338px] h-[45px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                    tabIndex={3}
                  />
                  </td>
                  <td className="flex flex-row ">
                   <div className="px-[4.29rem] py-2 whitespace-nowrap table-auto1 border-[1px] border-[#47A5E4]  text-[color:var(--black,#101010)] text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                    2nd
                  </div>
                  <input
                    type="text"
                    name="sem2_mentorname"
                   
                    value={sem2_mentorname}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder=""
                    className="p-3 table-auto1 w-[337px] h-[45px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                    tabIndex={4}
                  />
                  </td>
                  <td className="flex flex-row ">
                  <div className="px-[4.39rem] py-2 whitespace-nowrap border-[1px] border-[#47A5E4]  text-[color:var(--black,#101010)] text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                    3rd
                  </div>
                  <input
                    type="text"
                    name="sem3_mentorname"
                    value={sem3_mentorname}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder=""
                    className=" p-3 w-[338px] h-[45px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                    tabIndex={5}
                  />
                  </td>
                  <td className="flex flex-row  ">
                  <div className="px-[4.39rem] py-2   whitespace-nowrap  table-auto1 border-[1px] border-[#47A5E4]  text-[color:var(--black,#101010)] text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                    4th
                  </div>
                  <input
                    type="text"
                    name="sem4_mentorname"
                    value={sem4_mentorname}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder=""
                    className="p-3 table-auto1 w-[338px] h-[45px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                    tabIndex={6}
                  />
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            </div>
            <div>
            <div className="-top-5 relative  w-[100%]">
              <table className=" min-w-[100%] max-h-[250px] overflow-y-scroll overflow-hidden border-collapse ">
                <thread>
                <tr className="    px-3 sticky top-0 z-20 max-h-[70px]  h-[10px] ">
                  <th className="px-[3.1rem]  whitespace-nowrap border-r-[1px]  bg-[#159BD6] rounded-[5px_0px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                    Sem
                  </th>
                  <th className="px-[6.1rem]  whitespace-nowrap border-l-[1px]  bg-[#159BD6] rounded-[0px_4px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                    Mentor Name
                  </th>
                </tr>
                </thread>
                <tbody>
                <tr className="text-sm  h-[45px] rounded-lg  px-3 transition-all duration-300">
                  <td className="flex flex-row ">
                  <div className="px-[3.35rem] py-2 whitespace-nowrap border-[1px]   border-[#47A5E4] text-[color:var(--black,#101010)] text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                    5th
                  </div>
                  <input
                    type="text"
                    name="sem5_mentorname"
                    value={sem5_mentorname}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    //onBlur={validateOne}
                    placeholder=""
                    className="p-3 w-[307px] h-[45px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                    tabIndex={5}
                  />
                  </td>
                  <td className="flex flex-row ">
                   <div className="px-[3.35rem] py-2 whitespace-nowrap table-auto1 border-[1px] border-[#47A5E4]  text-[color:var(--black,#101010)] text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                    6th
                  </div>
                  <input
                    type="text"
                    name="sem6_mentorname"
                    value={sem6_mentorname}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder=""
                    className="p-3 table-auto1 w-[307px] h-[45px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                    tabIndex={6}
                  />
                  </td>
                  <td className="flex flex-row ">
                  <div className="px-[3.39rem] py-2 whitespace-nowrap border-[1px] border-[#47A5E4]  text-[color:var(--black,#101010)] text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                    7th
                  </div>
                  <input
                    type="text"
                    name="sem7_mentorname"
                    value={sem7_mentorname}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder=""
                    className=" p-3 w-[307px] h-[45px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                    tabIndex={7}
                  />
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            </div>


          </div>
          {/* INPUTS */}
          <div className="flex justify-between items-center flex-row py-5">
            <div className="flex flex-col">
              <label
                for="caste"
                className="px-1  py-2 flex justify-start text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
              >
                Mentoring Started Year:{" "}
              </label>

              <input
                type="date"
                name="startyear"
                placeholder="(MM/YYYY)"
                value={startyear}
                onChange={handleInputChange}
                //onBlur={validateOne}
                className="hover:border-[2px] hover:border-[#159BD6] w-[273px] h-[40px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF]  p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
                required
                tabindex={10}
              />
            </div>
            <div className="flex flex-col">
              <label
                for="department"
                className="px-1 flex justify-start  py-2 text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
              >
                Department:{" "}
              </label>

              <input
                type="text"
                name="department"
                value={department}
                onChange={handleInputChange}
                //onBlur={validateOne}
                placeholder="Department"
                className="hover:border-[2px] hover:border-[#159BD6] w-[273px] h-[40px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF]  p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
                required
                tabindex={11}
              />
            </div>
            <div className="flex flex-col">
              <label
                for="batchdiv"
                className="flex justify-start px-1 py-2 text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
              >
                Batch/Div:{" "}
              </label>

              <input
                type="text"
                name="batchdiv"
                value={batchdiv}
                onChange={handleInputChange}
                //onBlur={validateOne}
                placeholder="Batch/Div"
                className="hover:border-[2px] hover:border-[#159BD6] w-[273px] h-[40px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF]  p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
                required
                tabindex={12}
              />
            </div>
          </div>
          {/* <UseContextProvider>{displayStep(currentStep)}</UseContextProvider> */}
          {/* BUTTONS */}
          <div className="flex flex-row justify-center items-center gap-x-7 py-4">
            <button
              type="submit"
              // onClick={handleNextStep}
              className="px-10 py-2 shadow-[0px_4px_8px_0px_rgba(184,182,182,0.25)] rounded-[5px] bg-[#159BD6] text-[color:var(--03,#FFF)] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize"
            >
              Save & Next
            </button>
          </div>{" "}
        </form>
      </div>
      </div>
      </div>
    </>
  );
};

export default MentoringDashboard;
