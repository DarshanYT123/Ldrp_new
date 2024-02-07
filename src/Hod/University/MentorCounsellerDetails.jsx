import React,{useState} from "react";
import StudentSignature from "./StudentSignature";
import CounsellorSignature from "./CounsellorSignature"

function MentorCounsellerDetails() {
 
  const [values,setValues]= React.useState({
    CounsellingDate:"",
    CounsellingDay:"",
    // selectCounselling:"",
    IdentifyReason:"",
    attendance:"",
    // selectObservations:"",
    Other:"",
    Attitude:"",
    studentname:"",
    date1:"",
    CounsellorName:"",
    date2:"",

  })
  const [selectCounselling, setSelectCounselling] = useState('Routine');
  const [selectObservations, setSelectObservations] = useState('Routine');


  const {CounsellingDate,CounsellingDay,IdentifyReason,attendance,
    Other,Attitude,studentname,date1,CounsellorName, date2 } = values


    const [validations, setValidations] = React.useState({
      studentname: "",
      CounsellorName: "",
    });

    const validateAll = () => {
      const validations = { studentname: "", CounsellorName: "" };
  
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

      if (!CounsellorName) {
        //validations.firstName = 'First Name is required'
        alert("Counsellor Name is required" + validations.CounsellorName);
        isValid = false;
      }
      if ((CounsellorName && CounsellorName.length < 3) || CounsellorName.length > 50) {
        //validations.firstName = 'First Name must contain between 3 and 50 characters'
        alert(
          "Counsellor Name must contain between 3 and 50 characters: " +
            validations.CounsellorName
        );
        isValid = false;
      }

    }

    
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
      name === "CounsellorName" &&
      (value.length < 3 || value.length > 50)
    ) {
      //message = 'Name must contain between 3 and 50 characters'
      alert(
        " Counsellor Name  must contain between 3 and 150 characters: " + message
      );
    }



    //

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

    
    setValidations({ ...validations, [name]: message });
  };


    const handleInputChange =(e)=>{

      const {name ,value} =e.target;

      setValues ({...values,[name]: value})

    };

    const handleselectCounsellingchange = (e) => {
      setSelectCounselling(e.target.value);
    };

    const handleObservationsChange = (e) => {
      setSelectObservations(e.target.value);
    };


    const handleSubmit = (e) =>{

      e.preventDefault();
      const isValid = validateAll();

      if (!isValid) {
        return false;
      }

      alert(JSON.stringify(values));
      alert(JSON.stringify(selectCounselling));
      alert(JSON.stringify(selectObservations));
      // console.log('Selected gender:', selectCounselling);
    }
    const textInput = React.useRef();


    

  return (
    <>
     <div className="relative overflow-y-auto h-[33rem] w-auto  left-[14px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
      {/* <div classname=" top-8 right-0  px-10  py-5 overflow-y-auto h-[5rem]  bg-white"> */}
      

        <form onSubmit={handleSubmit}>
        {/* <div className="sticky top-5 "> */}
          <div className="flex gap-[24rem] flex-row py-5 items-center justify-center">
            <div className="flex flex-row">
              <label
                for="Counselling Date :"
                className=" px-1 py-2 text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
              >
                Counselling Date:{" "}
              </label>

              <input
                  type="date"
                  placeholder=""
                  name="CounsellingDate"
                  value={CounsellingDate}
                  onChange={handleInputChange}
                  // onBlur={validateOne}
                  className="text-[color:var(--06,#CBCBCB)] hover:border-[2px] hover:placeholder-[#159BD6]  hover:border-[#159BD6] text-[16px] font-inter not-italic font-medium leading-[normal] tracking-[0.32px] capitalize  w-[200px] h-[40px] rounded-[5px] border border-[#D9D9D9] bg-[#fff]  p-3  focus:outline-none"
                  required
                  tabIndex="1"
                />
            </div>
            <div className="flex flex-row">
              <label
                for="CounsellingDay"
                className="px-1  py-2 text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
              >
                Counselling Day :{" "}
              </label>

              <input
                type="text"
                id="CounsellingDay"
                name="CounsellingDay"
                  value={CounsellingDay}
                  onChange={handleInputChange}
                //onBlur={validateOne}
                placeholder="Day"
                className="hover:border-[2px] hover:border-[#159BD6] hover:placeholder-[#159BD6] w-[170px] h-[40px] rounded-[5px] border  border-[#CBCBCB] bg-[#FFFFFF] font-inter  p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
                required
                tabindex="2"
              />
            </div>
            </div>
        
          {/* </div> */}
         
          <div className="flex gap-[9.5rem] flex-row py-5 items-center justify-center ">
            <div className="flex flex-row ">
              <h2 className="font-Poppins font-semibold text-[#000000] text-[16px] leading-[24px] ">
                1. Reason For Counselling :
              </h2>
            </div>

            <div class="flex items-center  gap-2 ">
              <input
               
                id="default-radio-1"
               
            

                type="radio"
                name="selectCounselling"
                value="Routine"
                checked={selectCounselling === 'Routine'}
                onChange={ handleselectCounsellingchange }
                className="w-4 h-4 border-[#AEAEB2] accent-[#1DC9A0] "
                tabIndex="3"
               
              />
              <label
                for="default-radio-2"
                className="font-Poppins font-medium text-[#2C2C2E] text-[14px] leading-[21px]"
              >
                Routine
              </label>
            </div>

            <div class="flex items-center gap-2">
              <input
                id="default-radio-2"
             

                type="radio"
                name="selectCounselling"
                value="Student Initiated"
                checked={selectCounselling === 'Student Initiated'}
                onChange={ handleselectCounsellingchange}
                className="w-4 h-4 border-[#AEAEB2] accent-[#1DC9A0]"
                tabIndex="4"
              />
              <label
                for="default-radio-2"
                className="font-Poppins font-medium text-[#2C2C2E] text-[14px] leading-[21px]"
              >
                Student Initiated
              </label>
            </div>
            <div class="flex items-center gap-2 ">
              <input
                id="default-radio-2"
                

                type="radio"
                name="selectCounselling"
                value="Institute Initiated"
                checked={selectCounselling === 'Institute Initiated'}
                onChange={ handleselectCounsellingchange }
                className="w-4 h-4 border-[#AEAEB2] accent-[#1DC9A0]"
                tabIndex="5"
              />
              <label
                for="default-radio-2"
                className="font-Poppins font-medium text-[#2C2C2E] text-[14px] leading-[21px]"
              >
                Institute Initiated
              </label>
            </div>
          </div>
          <div class="mb-6">
            <label
              for="IdentifyReason "
              className=" px-1 block py-2 text-left ml-3 text-[16px]  font-inter font-semibold text-[#1E1E1E] leading-[24px]"
            >
              2. Identify Reason :
            </label>

            <textarea
              type=" text"
              id=" IdentifyReason"
              name="IdentifyReason"
              value={IdentifyReason}
                onChange={handleInputChange}
              //onBlur={validateOne}
              className="hover:border-[2px] hover:border-[#159BD6] hover:placeholder-[#159BD6] resize-none ]  w-[1030px] h-[97px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF] font-inter p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
              placeholder=" Identify Reason....."
              required
              tabIndex="6"
            />
          </div>

          <div className="text-left ml-3">
            <h2 className="font-Poppins text-[16px] font-semibold leading-[24px]">
              {" "}
              3. General Observations :
            </h2>
          </div>

          <div className="flex gap-[12rem] flex-row py-5 items-center justify-center ">
            <div class="flex items-center  gap-2 ">
              <label
                for="Attendance"
                className="font-Poppins font-semibold text-[#101010] text-[16px] leading-[21px]"
              >
                A. Attendance :
              </label>
            
                <input
                  type="text"
                  id="Attendance"
                  name="attendance"
                  value={attendance}
                  onChange={handleInputChange}
                  // onBlur={validateOne}
                  placeholder="70 %"
                  className="hover:border-[2px] hover:border-[#159BD6] hover:placeholder-[#159BD6] ml-[5px] w-[170px] h-[40px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF] font-inter  p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
                  required
                  tabIndex="14"
                />
            </div>

            <div class="flex items-center gap-2 mr-16">
              <input
                id="default-radio-2"
                // type="radio"
                // value="selectObservations"
                // name="HabituallyLate"
                // onChange={handleInputChange}

                type="radio"
                name="selectObservations"
                value="Habitually Late"
                checked={selectObservations === 'Habitually Late'}
                onChange={ handleObservationsChange}
                className="w-4 h-4 border-[#AEAEB2] accent-[#1DC9A0]"
                tabIndex="8"
              />
              <label
                for="default-radio-2"
                className="font-Poppins font-medium text-[#2C2C2E] text-[14px] leading-[21px]"
              >
                Habitually Late
              </label>
            </div>
            <div class="flex items-center gap-2 mr-16">
              <input
                // id="default-radio-2"
                // type="radio"
                // value="selectObservations"
                // name="Punctual"
                // onChange={handleInputChange}
                type="radio"
                name="selectObservations"
                value="Punctual"
                checked={selectObservations === 'Punctual'}
                onChange={ handleObservationsChange }

                className="w-4 h-4 border-[#AEAEB2] accent-[#1DC9A0]"
                tabIndex="9"
              />
              <label
                for="default-radio-2"
                className="font-Poppins font-medium text-[#2C2C2E] text-[14px] leading-[21px]"
              >
                Punctual
              </label>
            </div>
          </div>
         
          <div class="mb-6">
            <label
              for="Other "
              className=" px-1 ml-3 block py-2 text-left  text-[14px]  font-inter font-medium text-[#1E1E1E] leading-[24px]"
            >
             Other:
            </label>

            <textarea
              type=" text"
              id=" Other"
              name="Other"
              value={Other}
                onChange={handleInputChange}
              //onBlur={validateOne}
              className="hover:border-[2px] hover:border-[#159BD6] hover:placeholder-[#159BD6] resize-none ]  w-[1030px] h-[97px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF] font-inter p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
              placeholder=" Explain ....."
              required
              tabIndex="10"
            />
          </div>

          <div className="text-left ml-3">
            <h2 className="font-Poppins  text-[16px] font-semibold leading-[24px]">
              {" "}
              B. Attitude :
            </h2>
          </div>
          <div class="mb-6 ">
            <label
              for="Willing "
              className=" px-1 ml-3 block py-2 text-left   text-[14px]  font-inter font-medium text-[#1E1E1E] leading-[24px]"
            >
            Willing , Eager, Pleasant or Other :
            </label>

            <textarea
              type=" text"
              id=" Attitude"
              name="Attitude"
              value={Attitude}
                onChange={handleInputChange}
              //onBlur={validateOne}
              className="hover:border-[2px] hover:border-[#159BD6] hover:placeholder-[#159BD6] resize-none ]  w-[1030px] h-[97px] rounded-[5px] border border-[#CBCBCB] bg-[#FFFFFF] font-inter p-3 font-medium text-[16px] leading-[19.36px] tracking-[2%] focus:outline-none"
              placeholder=" Explain ....."
              required
              tabIndex="11"
            />
          </div>
          <div className="text-left ml-3">
            <h2 className="font-Poppins text-[16px] font-semibold leading-[24px]">
              {" "}
              My Signature Acknowledges That I Have Read And Understood  The Above Information.
            </h2>
          </div>

          <div className="flex  gap-[20rem] flex-row py-5 ml-3">
            <div className="flex">
              <label
                for="studentname"
                className=" flex justify-start  py-2 text-[18px] not-italic font-inter font-semibold text-[#1E1E1E] leading-normal"
              >
                Student Name:{" "}
              </label>
              <div className="px-2  ">
                <input
                  type="text"
                  id="studentname"
                  name="studentname"
                  value={studentname}
                  onChange={handleInputChange}
                   onBlur={validateOne}
                  placeholder="Full Name Of Student"
                  className="text-[color:var(--06,#CBCBCB)]  hover:border-[2px] hover:placeholder-[#159BD6]  hover:border-[#159BD6]  text-[16px] font-inter not-italic font-medium leading-[normal] tracking-[0.32px] capitalize w-[330px] h-[40px] rounded-[5px] border-[1px] border-[#CBCBCB] bg-[#fff]  p-3  focus:outline-none"
                  required
                  tabIndex="12"
                />
              </div>
            </div>
            <div className="flex">
              <label
                for="date"
                className="  flex justify-start py-2 text-[18px] not-italic font-inter font-semibold text-[#1E1E1E] leading-normal"
              >
                Date{" "}
              </label>
              <div className=" px-2 ">
                <input
                  type="date"
                  placeholder=""
                  name="date1"
                  value={date1}
                  onChange={handleInputChange}
                  // onBlur={validateOne}
                  className="text-[color:var(--06,#CBCBCB)] hover:border-[2px] hover:placeholder-[#159BD6]  hover:border-[#159BD6] text-[16px] font-inter not-italic font-medium leading-[normal] tracking-[0.32px] capitalize  w-[200px] h-[40px] rounded-[5px] border border-[#D9D9D9] bg-[#fff]  p-3  focus:outline-none"
                  required
                  tabIndex="13"
                />
              </div>
            </div>
          </div>

          
          <div className="flex  gap-[18.5rem] flex-row py-5 ml-3">
            <div className="flex">
              <label
                for="CounsellorName"
                className=" flex justify-start  py-2 text-[18px] not-italic font-inter font-semibold text-[#1E1E1E] leading-normal"
              >
               Counsellor Name:{" "}
              </label>
              <div className="px-2  ">
                <input
                  type="text"
                  id="CounsellorName"
                  name="CounsellorName"
                  value={CounsellorName}
                  onChange={handleInputChange}
                   onBlur={validateOne}
                  placeholder="Counsellor Name"
                  className="text-[color:var(--06,#CBCBCB)]  hover:border-[2px] hover:placeholder-[#159BD6]  hover:border-[#159BD6]  text-[16px] font-inter not-italic font-medium leading-[normal] tracking-[0.32px] capitalize w-[330px] h-[40px] rounded-[5px] border-[1px] border-[#CBCBCB] bg-[#fff]  p-3  focus:outline-none"
                  required
                  tabIndex="14"
                />
              </div>
            </div>
            <div className="flex">
              <label
                for="date"
                className="  flex justify-start py-2 text-[18px] not-italic font-inter font-semibold text-[#1E1E1E] leading-normal"
              >
                Date{" "}
              </label>
              <div className=" px-2 ">
                <input
                  type="date"
                  placeholder=""
                  name="date2"
                  value={date2}
                  onChange={handleInputChange}
                  // onBlur={validateOne}
                  className="text-[color:var(--06,#CBCBCB)] hover:border-[2px] hover:placeholder-[#159BD6]  hover:border-[#159BD6] text-[16px] font-inter not-italic font-medium leading-[normal] tracking-[0.32px] capitalize  w-[200px] h-[40px] rounded-[5px] border border-[#D9D9D9] bg-[#fff]  p-3  focus:outline-none"
                  required
                  tabIndex="15"
                />
              </div>
            </div>
          </div>
        
        {/* signature photo */}

        <div className="flex  gap-[30rem] flex-row py-5 ml-3">
          <StudentSignature/>
          <CounsellorSignature/>
          </div>


          <div className="flex flex-row justify-center items-center gap-x-7 py-4">
            <button
              type="submit"
              // onClick={handleNextStep}
              className="px-10 py-2 shadow-[0px_4px_8px_0px_rgba(184,182,182,0.25)] rounded-[5px] bg-[#159BD6] text-[color:var(--03,#FFF)] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize"
            >
              Save & Next
            </button>
            </div>
        </form>

        
      </div>
      {/* </div> */}
    </>
  );
}

export default MentorCounsellerDetails;
