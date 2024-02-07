import React, { useEffect,useState } from 'react'
import {useLocation} from "react-router-dom"
import fireDb from "../../firebase"
import { toast } from 'react-toastify';
import { BiRightArrowAlt } from 'react-icons/bi'
import { Link } from "react-router-dom"

const SecondFeesTableHod = ({handleNextStep}) => {


    const [activeTab, setActiveTab] = useState("tab1");

    const [data,setData] = useState({});
  
    const onDelete = (id1) => {
      if(
        window.confirm("Are you sure that you wanted to delete that contact ?")
        ){
        fireDb.child(`ldrp/${id1}`).remove((err)=> {
          if(err){
          toast.error(err);
        }
        else{
          toast.success("Contact Deleted Successfully");
        }
      })
      }
    }
    const useQuery =() => {
      return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();
    let search = query.get("fullname");
    console.log("search",search);

    useEffect(() => {
      searchData();
    },[search])

    const searchData = () =>{
      fireDb.child("ldrp").orderByChild("fullname").equalTo(search).on("value",(snapshot) => {
        if(snapshot.val()) {
          const data = snapshot.val();
          searchData(data);
        }
      })
    }
    useEffect(() => {
      fireDb.child("ldrp").on("value",(snapshot)=>{
        if(snapshot.val() !== null){
          setData({...snapshot.val()});
        }
        else{
          setData({});
        }
      })
      return () => {
        setData({});
      }
    },[]);

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

  
  const Data = [
    {
        Eno:"21BECE30000",
        Fname:"Raj Mehta",
        status:"Paid",
        Method:"Cash",
    },
    {
        Eno:"21BECE30000",
        Fname:"Raj Mehta",
        status:"Paid",
        Method:"UPI",
    },
    {
        Eno:"21BECE30000",
        Fname:"Raj Mehta",
        status:"Remaining",
        Method:"RPGG",
       
    },
    {
        Eno:"21BECE30000",
        Fname:"Raj Mehta",
        status:"Remaining",
        Method:"Cash",
        
    },
    {
        Eno:"21BECE30000",
        Fname:"Raj Mehta",
        status:"Paid",
        Method:"-",
    },
]

  return (
    <>
    <div className="absolute top-[80px] right-0    ">
      <div className="flex flex-row justify-between ">
      <div className="flex flex-row py-3 gap-x-1 justify-start items-center">
        <h2 className="text-[color:var(--black,#101010)] text-[12px] font-inter not-italic font-bold leading-[normal] tracking-[0.66px]">Mentoring Form </h2>
        <span><BiRightArrowAlt/></span>
        <h2  className="text-[color:var(--black,#101010)] text-[12px] font-inter not-italic font-bold leading-[normal] tracking-[0.66px]">21BECE30000 </h2>
      </div>
     {/* <div className="py-2 flex justify-end ">
      <h2 className="text-[color:var(--black,#101010)] text-[14px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.28px] capitalize">Last Login</h2>
      <h2 className="text-[color:var(--black,#101010)] text-[14px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.28px] capitalize px-3">2 :00 pM , Sunday 15 Oct 2023</h2>
    </div> */}
    </div>
      <div className=" max-h-[700px] pt-1 px-2 overflow-y-auto bg-white  ">
        <div className="flex flex-row gap-x-[10rem] items-center">
        <div className="flex">
            <label
                  for="Semester"
                  className="ml-[20px] px-1  py-2 text-[16px]  font-Poppins font-semibold text-[#1E1E1E] leading-[24px]"
                >
                  Semester :{" "}
                </label>
            <select
              id="12th"
              name="selectoption"
              // value={selectoption}
              // onChange={handleInputChange}
              //onBlur={validateOne}
              tabIndex={1}
              className="flex flex-row w-[128px] h-[40px]  bg-[#E6E6E6] hover:text-[#47A5E4]  text-center  rounded-[5px] focus:outline-none text-[color:var(--02,#363636)] text-[18px] font-inter not-italic font-medium leading-[normal] tracking-[0.36px] capitalize"
            >
              <option selected>Semester 1</option>
              <option value="Semester 1">Semester 1</option>
              <option value="Semester 2">Semester 2</option>
              <option value="Semester 3">Semester 3</option>
              <option value="Semester 4">Semester 4</option>
              <option value="Semester 5">Semester 5</option>
              <option value="Semester 6">Semester 6</option>
              <option value="Semester 7">Semester 7</option>
            </select>
            </div>  
      <div className="flex justify-center  items-center">
          <h2 className="text-[color:var(--02,#47A5E4)] text-[20px] font-Raleway not-italic font-bold leading-[normal] tracking-[1.1px]">
            All Students Of Class
          </h2>
        </div>
        <div className="flex justify-end py-3 ">
            <div className="flex flex-row justify-center items-center">
<input type="text" placeholder="Search" className=" bg-[#F3F3F3] px-7 py-2 focus:outline-none " />
<div className="relative right-10 "><svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.1615 0C12.4257 0 15.8826 3.42502 15.8826 7.65C15.8826 9.45606 15.2509 11.1159 14.1945 12.4246L17.3471 15.549C17.6821 15.8809 17.6821 16.4191 17.3471 16.751C17.0378 17.0575 16.5512 17.081 16.2147 16.8218L16.1338 16.751L12.9805 13.6275C11.6596 14.6741 9.98434 15.3 8.1615 15.3C3.89727 15.3 0.44043 11.875 0.44043 7.65C0.44043 3.42502 3.89727 0 8.1615 0ZM8.16151 1.70007C4.84489 1.70007 2.15623 4.36398 2.15623 7.65007C2.15623 10.9362 4.84489 13.6001 8.16151 13.6001C11.4781 13.6001 14.1668 10.9362 14.1668 7.65007C14.1668 4.36398 11.4781 1.70007 8.16151 1.70007Z" fill="#211F3B"/>
</svg></div>
</div>
<div className="px-2 py-2 bg-[#F3F3F3]">
<svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24" fill="none">
  <path d="M4.83984 7C4.83984 6.44772 5.29172 6 5.84913 6H19.9792C20.5366 6 20.9885 6.44772 20.9885 7C20.9885 7.55228 20.5366 8 19.9792 8H5.84913C5.29172 8 4.83984 7.55228 4.83984 7ZM6.85842 12C6.85842 11.4477 7.3103 11 7.86772 11H17.9606C18.518 11 18.9699 11.4477 18.9699 12C18.9699 12.5523 18.518 13 17.9606 13H7.86772C7.3103 13 6.85842 12.5523 6.85842 12ZM8.87701 17C8.87701 16.4477 9.32888 16 9.8863 16H15.942C16.4995 16 16.9513 16.4477 16.9513 17C16.9513 17.5523 16.4995 18 15.942 18H9.8863C9.32888 18 8.87701 17.5523 8.87701 17Z" fill="#211F3B"/>
</svg>
</div>
        </div>
        </div>
       
       {/* TABLE */}
       <div className='px-12 py-5'>
       <div className=' flex justify-center items-center border border-[color:var(--01,#16376E)] rounded-[2px_2px_0px_0px] border-solid bg-[#16376E] py-2.5 '><h2 className='text-white text-[18px] font-inter not-italic font-bold leading-[normal] tracking-[0.36px] uppercase'>attendance 5th-ce-d Semester -1 </h2></div>
       <table className="table-auto1 text-[0.9em]  m-auto border-collapse font-Montserrat ">
          <thead id="table_fixed">
                <tr className="text-[18px] font-bold font-Montserrat  text-white bg-[#47A5E4] px-3 sticky top-0 z-20 max-h-[70px]  h-[10px]">
                  {" "}
                  <th className="px-[2.5rem] py-4 border-[2px] border-[#47A5E4] whitespace-nowrap">
                    <p className=" text-white text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize ">Enrollment No</p>
                  </th>
                  <th className="px-[15.5rem] py-4 border-[2px] border-[#47A5E4] whitespace-nowrap">
                    <p className="text-white text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">Full Name</p>
                  </th>
                  <th className="px-[1.5rem] py-4 border-[2px] border-[#47A5E4] whitespace-nowrap">
                    <p className="text-white text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">Method</p>
                  </th>
                  <th className="px-[1.5rem] py-4 border-[2px] border-[#47A5E4] whitespace-nowrap">
                    <p className="text-white text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">Status</p>
                  </th>
                </tr>
              </thead>
            <tbody className=''>
              {Data.map((id,index) =>{
                return(
                  <tr
                  key={index}
className="table-auto text-sm  h-[72px] rounded-lg py-3 px-3 transition-all duration-300  "
                  // key={index}
                >
                      <td className="border-[2px] border-[#47A5E4] px-[1rem] whitespace-nowrap">
                    <div className="">
                      <th className="  text-black text-[16px]  font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">
                      {/* {localStorage.getItem('Enrollment No')
                        ? localStorage.getItem('Enrollment No')
                        : "21BECE30000"
                        } */}
                      {id.Eno}
                      </th>
                    </div>
                  </td>
                  <td className="px-[1rem] whitespace-nowrap border-[2px] border-[#47A5E4]">
                    <div className="">
                      <div className="  text-black text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">    
                      {/* {localStorage.getItem('Full Name')
                        ? localStorage.getItem('Full Name')
                        : "Raj Maheta"
                        } */}
                      {id.Fname}
                      {/* {data[id1].fullname} */}
                      </div>
                    </div>
                  </td>
                  <td className="px-[1rem] whitespace-nowrap border-[2px] border-[#47A5E4]">
                    <div className="">
                      <div className=" text-[#00BE35] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">
                      {/* {localStorage.getItem('Mentoring Form')
                        ? localStorage.getItem('Mentoring Form')
                        : "Done"
                        } */}
                      {id.status}
                      {/* {data[id1].mobileno} */}
                      </div>
                    </div>
                  </td>
                  <td className="px-[1.2rem] whitespace-nowrap border-[2px] border-[#47A5E4]">
                    <div className=""  >
                      <div className=" text-black text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize"  >
                      {/* {localStorage.getItem('Fees')
                        ? localStorage.getItem('Fees')
                        : "Paid"
                        } */}
                      {id.Method} 
                      {/* {data[id1].emailid} */}
                      </div>
                    </div>
                  </td>
                </tr>
                )
              })}
            </tbody>
          </table>
      </div>
      </div>
      </div>
    </>
  );
};

export default SecondFeesTableHod;
