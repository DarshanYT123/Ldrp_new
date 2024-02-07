import React,{useState} from "react";
import { FaSortDown } from "react-icons/fa";
import { useStepContext } from '../Multistep/StepContext';

const MidSemester = ({handleNextStep,handlePrevStep}) => {
  const { stepNo, setStepNo } = useStepContext();
  const [data,setData] = useState({});
    const options = [
      "Semester 2","Semester 3","Semester 4","Semester 5","Semester 6","Semester 7","Semester 8"
    ];
    const onOptionChangeHandler = (event) => {
      setData(event.target.value);
      console.log(
          "User Selected Value - ",
          event.target.value
      );
  };
  const [values, setValues] = React.useState({
    sem1sub1:"",sem1marks1:"",  sem1sub2:"", sem1marks2:"", sem1sub3:"", sem1marks3:"",
    sem1sub4:"",sem1marks4:"", sem1sub5:"",sem1marks5:"", sem1sub6:"",sem1marks6:"",
    sem1sub7:"", sem1marks7:"",sem1reamark1:"",sem1rea1:"",
    sem2sub1:"",sem2marks1:"", sem2sub2:"", sem2marks2:"", sem2sub3:"",sem2marks3:"",
    sem2sub4:"",sem2marks4:"", sem2sub5:"",sem2marks5:"", sem2sub6:"", sem2marks6:"",
    sem2sub7:"", sem2marks7:"",sem2reamark2:"",sem2rea2:"",
    sem3sub1:"",sem3marks1:"",  sem3sub2:"", sem3marks2:"", sem3sub3:"",sem3marks3:"",
     sem3sub4:"",sem3marks4:"", sem3sub5:"",sem3marks5:"", sem3sub6:"",sem3marks6:"",
      sem3sub7:"",sem3marks7:"",sem3reamark3:"",sem3rea3:"",

    sem4sub1:"",sem4marks1:"", sem4sub2:"",sem4marks2:"", sem4sub3:"",sem4marks3:"", 
    sem4sub4:"",sem4marks4:"", sem4sub5:"",sem4marks5:"", sem4sub6:"",sem4marks6:"",
    sem4sub7:"", sem4marks7:"",sem4reamark4:"",sem4rea4:"",

    sem5sub1:"",sem5marks1:"",  sem5sub2:"",sem5marks2:"", sem5sub3:"", sem5marks3:"",
    sem5sub4:"",sem5marks4:"", sem5sub5:"",sem5marks5:"", sem5sub6:"",sem5marks6:"",
    sem5sub7:"",sem5marks7:"",sem5reamark5:"", sem5rea5:"",
    
    sem6sub1:"",sem6marks1:"", sem6sub2:"",sem6marks2:"", sem6sub3:"",sem6marks3:"",
    sem6sub4:"",sem6marks4:"",
     sem6sub5:"",sem6marks5:"",  sem6sub6:"", sem6marks6:"", sem6sub7:"", sem6marks7:"",
     sem6reamark6:"", sem6rea6:"",

    sem7sub1:"",sem7marks1:"", sem7sub2:"",sem7marks2:"", sem7sub3:"",sem7marks3:"",
    sem7sub4:"",sem7marks4:"", sem7sub5:"", sem7marks5:"",
     sem7sub6:"", sem7marks6:"",sem7sub7:"",sem7marks7:"",
   sem7reamark7:"",
        sem7rea7:"",

  })


  const {
    sem1sub1, sem1sub2, sem1sub3,sem1sub4, sem1sub5, sem1sub6,sem1sub7,
    sem2sub1, sem2sub2, sem2sub3,sem2sub4, sem2sub5, sem2sub6,sem2sub7,
    sem3sub1, sem3sub2, sem3sub3,sem3sub4, sem3sub5, sem3sub6,sem3sub7,
    sem4sub1, sem4sub2, sem4sub3,sem4sub4, sem4sub5, sem4sub6,sem4sub7,
    sem5sub1, sem5sub2, sem5sub3,sem5sub4, sem5sub5, sem5sub6,sem5sub7,
    sem6sub1, sem6sub2, sem6sub3,sem6sub4, sem6sub5, sem6sub6,sem6sub7,
    sem7sub1, sem7sub2, sem7sub3,sem7sub4, sem7sub5, sem7sub6,sem7sub7,
    sem1marks1,sem1marks2,sem1marks3,sem1marks4,sem1marks5,sem1marks6,sem1marks7,
    sem2marks1,sem2marks2,sem2marks3,sem2marks4,sem2marks5,sem2marks6,sem2marks7,
    sem3marks1,sem3marks2,sem3marks3,sem3marks4,sem3marks5,sem3marks6,sem3marks7,
    sem4marks1,sem4marks2,sem4marks3,sem4marks4,sem4marks5,sem4marks6,sem4marks7,
    sem5marks1,sem5marks2,sem5marks3,sem5marks4,sem5marks5,sem5marks6,sem5marks7,
    sem6marks1,sem6marks2,sem6marks3,sem6marks4,sem6marks5,sem6marks6,sem6marks7,
    sem7marks1,sem7marks2,sem7marks3,sem7marks4,sem7marks5,sem7marks6,sem7marks7,
    sem1reamark1,sem2reamark2,sem3reamark3,sem4reamark4,sem5reamark5,
    sem6reamark6,sem7reamark7,
    sem1rea1, sem2rea2, sem3rea3, sem4rea4, sem5rea5, sem6rea6, sem7rea7,



  } =values;


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    //setState({...state,[name]:value});
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values)
    setStepNo(stepNo + 1)
    // const isValid = validateAll();

    // if (!isValid) {
    //   return false;
    // }

    alert(JSON.stringify(values));
  };

  return (
    <>
<div className="">
  <form onSubmit={handleSubmit}>
  <div className="overflow-hidden   flex justify-center ">
  <div className="   pt-1 pb-14 relative w-screen px-10  max-h-[580px]    overflow-y-scroll ">
        <div className="flex justify-center  items-center">
          <h2 className="text-[color:var(--02,#47A5E4)] text-[20px] font-Raleway not-italic font-bold leading-[normal] tracking-[1.1px]">
            Mid Semester Details
          </h2>
        </div>
        <div className=" pt-7 flex flex-row  items-center">
          <div className="flex px-1">
            <h2
              className="    text-[color:var(--01,#159BD6)] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize
"
            >
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
        {/* MENTOR ADD */}
        <div className="flex flex-row items-cenetr justify-center  py-4  ">
          <div className="">
            <table className=" ">
              <tr className="text-center ">
                <th className="border-r-[1px]  w-20 bg-[#159BD6] rounded-[5px_0px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                  Semester
                </th>
                <th className="border-l-[1px] w-[23rem] bg-[#159BD6]  border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                  Subjects
                </th>
                <th className="border-l-[1px] w-24 bg-[#159BD6] rounded-[0px_4px_0px_0px] border-[#47A5E4]  py-2 text-white text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                  Remarks
                </th>
              </tr>
              <tr className="">
                <td className=" text-center border-[1px] w-[150px] h-[10px] border-[#47A5E4] text-[color:var(--black,#101010)] text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                  Sem - 1
                </td>
                <div className="flex flex-row">
                  <td className="flex flex-col">
                    <input
                      type="text"
                      name="sem1sub1"
                      value={sem1sub1}
                     onChange={handleInputChange}
                    //onBlur={validateOne}
                      placeholder="Computer"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={1}
                    />
                    <input
                      type="text"
                      name="sem1marks1"
                      value={sem1marks1}
                      onChange={handleInputChange}
                     //onBlur={validateOne}
                      placeholder="50"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={2}
                    />
                  </td>
                  <td className="flex flex-col">
                    <input
                      type="text"
                      name="sem1sub2"
                      value={sem1sub2}
                      onChange={handleInputChange}
                     //onBlur={validateOne}
                      placeholder="subject2"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={3}
                    />
                    <input
                      type="text"
                      name="sem1marks2"
                      value={sem1marks2}
                      onChange={handleInputChange}
                     //onBlur={validateOne}
                      placeholder="70"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={4}
                    />
                  </td>
                  <td className="flex flex-col">
                    <input
                      type="text"
                      name="sem1sub3"
                      value={sem1sub3}
                      onChange={handleInputChange}
                     //onBlur={validateOne}
                      placeholder="subject3"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={5}
                    />
                    <input
                      type="text"
                      name="sem1marks3"
                      value={sem1marks3}
                      onChange={handleInputChange}
                     //onBlur={validateOne}
                      placeholder="50"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={6}
                    />
                  </td>
                  <td className="flex flex-col">
                    <input
                      type="text"
                      name="sem1sub4"
                      value={sem1sub4}
                      onChange={handleInputChange}
                     //onBlur={validateOne}
                      placeholder="subject4"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={7}
                    />
                    <input
                      type="text"
                      name="sem1marks4" 
                      value={sem1marks4}
                      onChange={handleInputChange}
                     //onBlur={validateOne}
                      placeholder="60"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={8}
                    />
                  </td>
                  <td className="flex flex-col">
                    <input
                      type="text"
                      name="sem1sub5"
                      value={sem1sub5}
                      onChange={handleInputChange}
                     //onBlur={validateOne}
                      placeholder="subject5"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={9}
                    />
                    <input
                      type="text"
                      name="sem1marks5"
                      value={sem1marks5}
                      onChange={handleInputChange}
                     //onBlur={validateOne}
                      placeholder="65"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={10}
                    />
                  </td>
                  <td className="flex flex-col">
                    <input
                      type="text"
                      name="sem1sub6"
                      value={sem1sub6}
                      onChange={handleInputChange}
                     //onBlur={validateOne}
                      placeholder="subject6"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={11}
                    />
                    <input
                      type="text"
                      name="sem1marks6"
                      value={sem1marks6}
                      onChange={handleInputChange}
                     //onBlur={validateOne}
                      placeholder="45"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={12}
                    />
                  </td>
                  <td className="flex flex-col">
                    <input
                      type="text"
                      name="sem1sub7"
                      value={sem1sub7}
                      onChange={handleInputChange}
                     //onBlur={validateOne}
                      placeholder="subject7"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={13}
                    />
                    <input
                      type="text"
                      name="sem1marks7"
                      value={sem1marks7}
                      onChange={handleInputChange}
                     //onBlur={validateOne}
                      placeholder="45"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={14}
                    />
                  </td>
                </div>
                <th>
                  <input
                    type="text"
                    name="sem1reamark1"
                    value={sem1reamark1}
                    onChange={handleInputChange}
                   //onBlur={validateOne}
                    placeholder="Reamark"
                    className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                    tabIndex={15}
                  />
                  <input
                    type="text"
                    name="sem1rea1"
                    value={sem1rea1}
                    onChange={handleInputChange}
                   //onBlur={validateOne}
                    placeholder="80"
                    className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                    tabIndex={16}
                  />
                </th>
              </tr>
              <tr className="">
                <td className="text-center table-auto1 border-[1px] w-[150px] h-[10px] border-[#47A5E4] text-[color:var(--black,#101010)] text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                  Sem - 2
                </td>
                <div className="flex flex-row">
                  <td className="flex flex-col">
                    <input
                      type="text"
                      name="sem2sub1"
                      value={sem2sub1}
                      onChange={handleInputChange}
                     //onBlur={validateOne}
                      placeholder="subject1"
                      className="p-3 table-auto1 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={17}
                    />
                    <input
                      type="text"
                      name="sem2marks1"
                    
                      value={sem2marks1}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="70"
                      className="p-3 table-auto1 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#F5F5F5]   focus:outline-none"
                      required
                      tabIndex={18}
                    />
                  </td>
                  <td className="flex flex-col">
                    <input
                      type="text"
                      name="sem2sub2"
                      value={sem2sub2}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="subjet2"
                      className="p-3 table-auto1 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={19}
                    />
                    <input
                      type="text"
                      name="sem2marks2"
                      value={sem2marks2}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="40"
                      className="p-3 table-auto1 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#F5F5F5]    focus:outline-none"
                      required
                      tabIndex={20}
                    />
                  </td>
                  <td className="flex flex-col">
                    <input
                      type="text"
                      name="sem2sub3"
                      value={sem2sub3}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="subject3"
                      className="p-3 table-auto1 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={21}
                    />
                    <input
                      type="text"
                      name="sem2marks3"
                      value={sem2marks3}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="50"
                      className="p-3 table-auto1 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#F5F5F5]    focus:outline-none"
                      required
                      tabIndex={22}
                    />
                  </td>
                  <td className="flex flex-col">
                    <input
                      type="text"
                      name="sem2sub4"
                      value={sem2sub4}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="subject4"
                      className="p-3 table-auto1 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={23}
                    />
                    <input
                      type="text"
                      name="sem2marks4"
                      value={sem2marks4}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="60"
                      className="p-3 table-auto1 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#F5F5F5]    focus:outline-none"
                      required
                      tabIndex={24}
                    />
                  </td>
                  <td className="flex flex-col">
                    <input
                      type="text"
                      name="sem2sub5"
                      value={sem2sub5}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="subject5"
                      className="p-3 table-auto1 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={25}
                    />
                    <input
                      type="text"
                      name="sem2marks5"
                      value={sem2marks5}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="50"
                      className="p-3 table-auto1 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#F5F5F5]    focus:outline-none"
                      required
                      tabIndex={26}
                    />
                  </td>
                  <td className="flex flex-col">
                    <input
                      type="text"
                      name="sem2sub6"
                      value={sem2sub6}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="subject6"
                      className="p-3 table-auto1 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={27}
                    />
                    <input
                      type="text"
                      name="sem2marks6"
                      value={sem2marks6}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="70"
                      className="p-3 table-auto1 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#F5F5F5]    focus:outline-none"
                      required
                      tabIndex={28}
                    />
                  </td>
                  <td className="flex flex-col">
                    <input
                      type="text"
                      name="sem2sub7"
                      value={sem2sub7}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="subject7"
                      className="p-3 table-auto1 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={29}
                    />
                    <input
                      type="text"
                      name="sem2marks7"
                      value={sem2marks7}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="80"
                      className="p-3 table-auto1 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#F5F5F5]    focus:outline-none"
                      required
                      tabIndex={30}
                    />
                  </td>
                </div>
                <th className="">
                  <input
                    type="text"
                    name="sem2reamark2"
                    value={sem2reamark2}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                    placeholder="Reamark2"
                    className="p-3 table-auto1 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                    tabIndex={31}
                  />
                  <input
                    type="text"
                    name="sem2rea2"
                    value={sem2rea2}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                    placeholder="40"
                    className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#F5F5F5]    focus:outline-none"
                    required
                    tabIndex={32}
                  />
                </th>
              </tr>
              <tr className="">
                <td className="text-center border-[1px] w-[150px] h-[10px] border-[#47A5E4] text-[color:var(--black,#101010)] text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                  Sem - 3
                </td>
                <div className="flex flex-row">
                  <td className="flex flex-col">
                    <input
                      type="text"
                      name="sem3sub1"
                      value={sem3sub1}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="subject1"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={33}
                    />
                    <input
                      type="text"
                      name="sem3marks1"
                      value={sem3marks1}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="70"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={34}
                    />
                  </td>
                  <td className="flex flex-col">
                    <input
                      type="text"
                      name="sem3sub2"
                      value={sem3sub2}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="subject2"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={35}
                    />
                    <input
                      type="text"
                      name="sem3marks2"
                      value={sem3marks2}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="60"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={36}
                    />
                  </td>
                  <td className="flex flex-col">
                    <input
                      type="text"
                      name="sem3sub3"
                      value={sem3sub3}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="subject3"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={37}
                    />
                    <input
                      type="text"
                      name="sem3marks3"
                      value={sem3marks3}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="50"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={38}
                    />
                  </td>
                  <td className="flex flex-col">
                    <input
                      type="text"
                      name="sem3sub4"
                      value={sem3sub4}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="subject4"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={39}
                    />
                    <input
                      type="text"
                      name="sem3marks4"
                      value={sem3marks4}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="80"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={40}
                    />
                  </td>
                  <td className="flex flex-col">
                    <input
                      type="text"
                      name="sem3sub5"
                      value={sem3sub5}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="subject5"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={41}
                    />
                    <input
                      type="text"
                      name="sem3marks5"
                      value={sem3marks5}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="90"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={42}
                    />
                  </td>
                  <td className="flex flex-col">
                    <input
                      type="text"
                      name="sem3sub6"
                      value={sem3sub6}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="subject6"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={43}
                    />
                    <input
                      type="text"
                      name="sem3marks6"
                      value={sem3marks6}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="100"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={44}
                    />
                  </td>
                  <td className="flex flex-col">
                    <input
                      type="text"
                      name="sem3sub7"
                      value={sem3sub7}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="subject7"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={45}
                    />
                    <input
                      type="text"
                      name="sem3marks7"
                      value={sem3marks7}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="80"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={46}
                      
                    />
                  </td>
                </div>
                <th>
                  <input
                    type="text"
                    name="sem3reamark3"
                    value={sem3reamark3}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="Reamark3"
                    className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                    tabIndex={47}
                  />
                  <input
                    type="text"
                    name="sem3rea3"
                    value={sem3rea3}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                   
                    placeholder="150"
                    className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                    tabIndex={48}
                  />
                </th>
              </tr>
              <tr className="">
                <td className="text-center p-3 table-auto1 border-[1px] w-[150px] h-[10px] border-[#47A5E4] text-[color:var(--black,#101010)] text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                  Sem - 4
                </td>
                <div className="flex flex-row">
                  <td className="flex flex-col">
                    <input
                      type="text"
                      name="sem4sub1"
                      value={sem4sub1}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="subject1"
                      className="p-3 table-auto1 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={49}
                    />
                    <input
                      type="text"
                      name="sem4marks1"
                      value={sem4marks1}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="50"
                      className="p-3 table-auto1 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#F5F5F5]   focus:outline-none"
                      required
                      tabIndex={50}
                    />
                  </td>
                  <td className="flex flex-col">
                    <input
                      type="text"
                      name="sem4sub2"
                      value={sem4sub2}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="subject2"
                      className="p-3 table-auto1 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={51}
                    />
                    <input
                      type="text"
                      name="sem4marks2"
                      value={sem4marks2}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="80"
                      className="p-3 table-auto1 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#F5F5F5]    focus:outline-none"
                      required
                      tabIndex={52}
                    />
                  </td>
                  <td className="flex flex-col">
                    <input
                      type="text"
                      name="sem4sub3"
                      value={sem4sub3}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="subject3"
                      className="p-3 table-auto1 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={53}
                    />
                    <input
                      type="text"
                      name="sem4marks3"
                      value={sem4marks3}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="90"
                      className="p-3 table-auto1 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#F5F5F5]    focus:outline-none"
                      required
                      tabIndex={54}
                    />
                  </td>
                  <td className="flex flex-col">
                    <input
                      type="text"
                      name="sem4sub4"
                      value={sem4sub4}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="subject4"
                      className="p-3 table-auto1 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={55}
                    />
                    <input
                      type="text"
                      name="sem4marks4"
                      value={sem4marks4}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="50"
                      className=" p-3 table-auto1 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#F5F5F5]    focus:outline-none"
                      required
                      tabIndex={56}
                    />
                  </td>
                  <td className="flex flex-col">
                    <input
                      type="text"
                      name="sem4sub5"
                      value={sem4sub5}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="subject5"
                      className="p-3 table-auto1 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={57}
                    />
                    <input
                      type="text"
                      name="sem4marks5"
                      value={sem4marks5}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="70"
                      className="p-3 table-auto1 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#F5F5F5]    focus:outline-none"
                      required
                      tabIndex={58}
                    />
                  </td>
                  <td className="flex flex-col">
                    <input
                      type="text"
                      name="sem4sub6"
                      value={sem4sub6}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="subject6"
                      className="p-3 table-auto1 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={59}
                    />
                    <input
                      type="text"
                      name="sem4marks6"
                      value={sem4marks6}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="50"
                      className="p-3 table-auto1 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#F5F5F5]    focus:outline-none"
                      required
                      tabIndex={60}
                    />
                  </td>
                  <td className="flex flex-col">
                    <input
                      type="text"
                      name="sem4sub7"
                      value={sem4sub7}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="subject7"
                      className="p-3 table-auto1 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={61}
                    />
                    <input
                      type="text"
                      name="sem4marks7"
                      value={sem4marks7}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="80"
                      className="p-3 table-auto1 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#F5F5F5]    focus:outline-none"
                      required
                      tabIndex={62}
                    />
                  </td>
                </div>
                <th className="">
                  <input
                    type="text"
                    name="sem4reamark4"
                    value={sem4reamark4}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                    placeholder="Reamark4"
                    className="p-3 table-auto1 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                    tabIndex={63}
                  />
                  <input
                    type="text"
                    name="sem4rea4"
                    value={sem4rea4}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                    placeholder="150"
                    className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#F5F5F5]    focus:outline-none"
                    required
                    tabIndex={64}
                  />
                </th>
              </tr>
              <tr className="">
                <td className=" text-center border-[1px] w-[150px] h-[10px] border-[#47A5E4] text-[color:var(--black,#101010)] text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                  Sem - 5
                </td>
                <div className="flex flex-row">
                  <td className="flex flex-col">
                    <input
                      type="text"
                      name="sem5sub1"
                      value={sem5sub1}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="subject1"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={65}
                    />
                    <input
                      type="text"
                      name="sem5marks1"
                      value={sem5marks1}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="80"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={66}
                    />
                  </td>
                  <td className="flex flex-col">
                    <input
                      type="text"
                      name="sem5sub2"
                      value={sem5sub2}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="subject2"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={67}
                    />
                    <input
                      type="text"
                      name="sem5marks2"
                      value={sem5marks2}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="56"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={68}
                    />
                  </td>
                  <td className="flex flex-col">
                    <input
                      type="text"
                      name="sem5sub3"
                      value={sem5sub3}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="subject3"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={69}
                    />
                    <input
                      type="text"
                      name="sem5marks3"
                      value={sem5marks3}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="86"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={70}
                    />
                  </td>
                  <td className="flex flex-col">
                    <input
                      type="text"
                      name="sem5sub4"
                      value={sem5sub4}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="subject4"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={71}
                    />
                    <input
                      type="text"
                      name="sem5marks4"
                      value={sem5marks4}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="95"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={72}
                    />
                  </td>
                  <td className="flex flex-col">
                    <input
                      type="text"
                      name="sem5sub5"
                      value={sem5sub5}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="subject5"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={73}
                    />
                    <input
                      type="text"
                      name="sem5marks5"
                      value={sem5marks5}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="75"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={74}
                    />
                  </td>
                  <td className="flex flex-col">
                    <input
                      type="text"
                      name="sem5sub6"
                      value={sem5sub6}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="subject6"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={75}
                    />
                    <input
                      type="text"
                      name="sem5marks6"
                      value={sem5marks6}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="65"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={76}
                    />
                  </td>
                  <td className="flex flex-col">
                    <input
                      type="text"
                      name="sem5sub7"
                      value={sem5sub7}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="subject7"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={77}
                    />
                    <input
                      type="text"
                      name="sem5marks7"
                      value={sem5marks7}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="75"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={78}
                    />
                  </td>
                </div>
                <th>
                  <input
                    type="text"
                    name="sem5reamark5"
                    value={sem5reamark5}
                    onChange={handleInputChange}
                    //onBlur={validateOne}
                    placeholder="Reamark5"
                    className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                    tabIndex={79}
                  />
                  <input
                    type="text"
                    name="sem5rea5"
                    placeholder="150"
                    className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                    tabIndex={80}
                  />
                </th>
              </tr>
              <tr className="">
                <td className="text-center table-auto1 border-[1px] w-[150px] h-[10px] border-[#47A5E4] text-[color:var(--black,#101010)] text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                  Sem - 6
                </td>
                <div className="flex flex-row">
                  <td className="flex flex-col">
                    <input
                      type="text"
                      name="sem6sub1"
                      value={sem6sub1}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="subject1"
                      className="p-3 table-auto1 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={81}
                    />
                    <input
                      type="text"
                      name="sem6marks1"
                      value={sem6marks1}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="70"
                      className="p-3 table-auto1 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#F5F5F5]   focus:outline-none"
                      required
                      tabIndex={82}
                    />
                  </td>
                  <td className="flex flex-col">
                    <input
                      type="text"
                      name="sem6sub2"
                      value={sem6sub2}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="subject2"
                      className="p-3 table-auto1 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={83}
                    />
                    <input
                      type="text"
                      name="sem6marks2"
                      value={sem6marks2}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="62"
                      className="p-3 table-auto1 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#F5F5F5]    focus:outline-none"
                      required
                      tabIndex={84}
                    />
                  </td>
                  <td className="flex flex-col">
                    <input
                      type="text"
                      name="sem6sub3"
                      value={sem6sub3}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="subject3"
                      className="p-3 table-auto1 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={85}
                    />
                    <input
                      type="text"
                      name="sem6marks3"
                      value={sem6marks3}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="70"
                      className="p-3 table-auto1 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#F5F5F5]    focus:outline-none"
                      required
                      tabIndex={86}
                    />
                  </td>
                  <td className="flex flex-col">
                    <input
                      type="text"
                      name="sem6sub4"
                      value={sem6sub4}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="subject4"
                      className="p-3 table-auto1 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={87}
                    />
                    <input
                      type="text"
                      name="sem6marks4"
                      value={sem6marks4}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="35"
                      className="p-3 table-auto1 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#F5F5F5]    focus:outline-none"
                      required
                      tabIndex={88}
                    />
                  </td>
                  <td className="flex flex-col">
                    <input
                      type="text"
                      name="sem6sub5"
                      value={sem6sub5}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="subject5"
                      className="p-3 table-auto1 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={89}
                    />
                    <input
                      type="text"
                      name="sem6marks5"
                      value={sem6marks5}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="75"
                      className="p-3 table-auto1 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#F5F5F5]    focus:outline-none"
                      required
                      tabIndex={90}
                    />
                  </td>
                  <td className="flex flex-col">
                    <input
                      type="text"
                      name="sem6sub6"
                      value={sem6sub6}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="subject6"
                      className="p-3 table-auto1 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={91}
                    />
                    <input
                      type="text"
                      name="sem6marks6"
                      value={sem6marks6}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="85"
                      className="p-3 table-auto1 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#F5F5F5]    focus:outline-none"
                      required
                      tabIndex={92}
                    />
                  </td>
                  <td className="flex flex-col">
                    <input
                      type="text"
                      name="sem6sub7"
                      value={sem6sub7}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="subject7"
                      className="p-3 table-auto1 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={93}
                    />
                    <input
                      type="text"
                      name="sem6marks7"
                      value={sem6marks7}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="95"
                      className="p-3 table-auto1 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#F5F5F5]    focus:outline-none"
                      required
                      tabIndex={94}
                    />
                  </td>
                </div>
                <th className="">
                  <input
                    type="text"
                    name="sem6reamark6"
                    value={sem6reamark6}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                    placeholder="Reamark6"
                    className="p-3 table-auto1 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                    tabIndex={95}
                  />
                  <input
                    type="text"
                    name="sem6rea6"
                    value={sem6rea6}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                    placeholder="150"
                    className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#F5F5F5]    focus:outline-none"
                    required
                    tabIndex={96}
                  />
                </th>
              </tr>
              <tr className="">
                <td className="text-center border-[1px] w-[150px] h-[10px] border-[#47A5E4] text-[color:var(--black,#101010)] text-[16px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.32px] capitalize">
                  Sem - 7
                </td>
                <div className="flex flex-row">
                  <td className="flex flex-col">
                    <input
                      type="text"
                      name="sem7sub1"
                      value={sem7sub1}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="subject1"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={97}
                    />
                    <input
                      type="text"
                      name="sem7marks1"
                      value={sem7marks1}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="70"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={98}
                    />
                  </td>
                  <td className="flex flex-col">
                    <input
                      type="text"
                      name="sem7sub2"
                      value={sem7sub2}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="subject2"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={99}
                    />
                    <input
                      type="text"
                      name="sem7marks2"
                      value={sem7marks2}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="85"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={100}
                    />
                  </td>
                  <td className="flex flex-col">
                    <input
                      type="text"
                      name="sem7sub3"
                      value={sem7sub3}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="subject3"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={101}
                    />
                    <input
                      type="text"
                      name="sem7marks3"
                      value={sem7marks3}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="80"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={102}
                    />
                  </td>
                  <td className="flex flex-col">
                    <input
                      type="text"
                      name="sem7sub4"
                      value={sem7sub4}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="subject4"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={103}
                    />
                    <input
                      type="text"
                      name="sem7marks4"
                      value={sem7marks4}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="45"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={104}
                    />
                  </td>
                  <td className="flex flex-col">
                    <input
                      type="text"
                      name="sem7sub5"
                      value={sem7sub5}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="subject5"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={105}
                    />
                    <input
                      type="text"
                      name="sem7marks5"
                      value={sem7marks5}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="50"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={106}
                    />
                  </td>
                  <td className="flex flex-col">
                    <input
                      type="text"
                      name="sem7sub6"
                      value={sem7sub6}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="subject6"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={107}
                    />
                    <input
                      type="text"
                      name="sem7marks6"
                      value={sem7marks6}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="65"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={108}
                    />
                  </td>
                  <td className="flex flex-col">
                    <input
                      type="text"
                      name="sem7sub7"
                      value={sem7sub7}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="subject7"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={109}
                    />
                    <input
                      type="text"
                      name="sem7marks7"
                      value={sem7marks7}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                      placeholder="75"
                      className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                      required
                      tabIndex={110}
                    />
                  </td>
                </div>
                <th>
                  <input
                    type="text"
                    name="sem7reamark7"
                    value={sem7reamark7}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                    placeholder="Reamark7"
                    className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                    tabIndex={111}
                  />
                  <input
                    type="text"
                    name="sem7rea7"
                    value={sem7rea7}
                      onChange={handleInputChange}
                      //onBlur={validateOne}
                    placeholder="150"
                    className="p-3 w-[100px] h-[35px] border-[1px] border-[#47A5E4] bg-[#fff]    focus:outline-none"
                    required
                    tabIndex={112}
                  />
                </th>
              </tr>
            </table>
          </div>
        </div>
        {/* BUTTONS */}
        <div className="flex flex-row justify-center items-center gap-x-7">
        <button onClick={handlePrevStep} className="border-[#159BD6] px-10 py-2 border-[1px] rounded-[5px] text-[color:var(--01,#159BD6)] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize">
            Cancel
          </button>
            <button
            type="submit"
            // onClick={handleNextStep}
            className="px-10 py-2 shadow-[0px_4px_8px_0px_rgba(184,182,182,0.25)] rounded-[5px] bg-[#159BD6] text-[color:var(--03,#FFF)] text-[16px] font-inter not-italic font-bold leading-[normal] tracking-[0.32px] capitalize"
          >
            Save & Next
          </button>
        
        </div>{" "}
      </div>
      </div>
      </form >
      </div>
    </>
  );
};

export default MidSemester;
