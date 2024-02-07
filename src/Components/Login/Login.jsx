import React, { useState, useEffect } from "react";
import { FaSortDown } from "react-icons/fa";
//import { useHistory } from 'react-router-dom';
import { redirect, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Login = () => {
  //const history = useHistory();
  const navigate = useNavigate();
  const [data, setData] = useState(undefined);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userName = localStorage.getItem("email")
    ? localStorage.getItem("email")
    : "admin@admin.com";
  {
    console.log(userName);
  }
  const userPassword = localStorage.getItem("password")
    ? localStorage.getItem("password")
    : "admin";
  {
    console.log(userPassword);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, data);
    const formdata = new FormData();
    formdata.append("email", email);
    formdata.append("password", password);
    formdata.append("role", data);

    axios({
      url: process.env.REACT_APP_SERVER + "/api/loginUser/",
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formdata,
    })
      .then((res) => {
        //setLoading("hidden");
        console.log("data added successfully");
        alert(res["data"]["msg"]);
        if (res["data"]["msg"] === "Login successfully.") {
          //console.log("Login Success for user")
          toast.success("Login Success for user");
          localStorage.setItem("email", email);
          localStorage.setItem("password", password);
          localStorage.setItem("role", data);
          navigate("employee/dashboard");
        }
        window.location.reload("/employee/dashboard");
      })
      .catch((err) => {
        //   setLoading("hidden");
         alert(err);
         //toast.error(err);
      });
  };
  const options = ["Principle", "Hod","Mentorship","Chairmain","Student"];
  const options2 = ["Colleges", "Colleges"];
  const onOptionChangeHandler = (event) => {
    setData(event.target.value);
    console.log("User Selected Value - ", event.target.value);
  };

  return (
    <div className="bg-[#F6F3F3] flex items-center justify-center flex-col h-screen">
      <div className=" w-[820px] h-[527px] relative -top-10 bg-white shadow-[0px_9px_30px_0px_rgba(0,0,0,0.14)] rounded-[14px]  overflow-hidden   ">
        <div className="flex flex-row">
          <div className="px-5 pl-9 flex items-center">
            <img
              src="/img/Rectangle 4.svg"
              alt="logo"
              className="w-80   object-cover "
            />
          </div>
          <div className="px-5 pt-20">
            <div className="w-[2px]  h-[22rem] bg-[#D9D9D9]"></div>
          </div>
          <div className="flex flex-col px-5">
            <div className="px-32 py-10">
              <h2 className="text-[color:var(--02,#47A5E4)] text-[30px] font-Montserrat not-italic font-bold leading-[normal]">
                Log in
              </h2>
            </div>
            <form action="">
              <div className="flex flex-col space-y-2 py-2">
                <label
                  htmlFor="exampleInputEmail1"
                  className="text-[#1E1E1E] text-[18px] font-inter not-italic font-semibold leading-[normal]"
                >
                  Email id
                </label>
                <input
                  id="exampleInputEmail1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-describedby="emailHelp"
                  className=" p-2 border-[1px] border-[#D9D9D9]  w-[343px] h-[45px]"
                  type="text"
                  autoComplete="off"
                  name="email"
                />
              </div>
              <div className="flex flex-col space-y-2 py-2">
                <label
                  htmlFor="exampleInputPassword1"
                  className="text-[#1E1E1E] text-[18px] font-inter not-italic font-semibold leading-[normal]"
                >
                  Password
                </label>
                <input
                  id="exampleInputPassword1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className=" p-2 border-[1px] border-[#D9D9D9]  w-[343px] h-[45px]"
                  type="password"
                  autoComplete="off"
                  name="password"
                />
              </div>
              <div className="flex  items-center py-1.5 ">
                <div className="flex justify-center relative min-w-[343px] h-[40px]">
                  <select
                    onChange={onOptionChangeHandler}
                    value={data}
                    name="role"
                    className="  rounded-[15px] text-center border-none appearance-none p-2 w-[100%] bg-[#F9F7F7] text-[18px] font-inter text-[#0D0D0D]  not-italic font-medium leading-[normal] "
                  >
                    {options.map((option, index) => {
                      return (
                        <option key={index}>
                          <h2 className="text-[#0D0D0D] text-lg not-italic font-medium leading-[normal]">
                            {option}
                          </h2>
                        </option>
                      );
                    })}
                  </select>
                  <div className="icon-container pointer-events-none w-[50px] h-[100%] absolute -top-1.5 right-0 flex items-center justify-center ">
                    <span className="text-[30px] text-black  ">
                      <FaSortDown />
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex  items-center py-1.5 ">
                <div className="flex justify-center relative min-w-[343px] h-[40px]">
                  <select
                    onChange={onOptionChangeHandler}
                    value={data}
                    name="role"
                    className="  rounded-[15px] text-center border-none appearance-none p-2 w-[100%] bg-[#F9F7F7] text-[18px] font-inter text-[#0D0D0D]  not-italic font-medium leading-[normal] "
                  >
                    {options2.map((option, index) => {
                      return (
                        <option key={index}>
                          <h2 className="text-[#0D0D0D] text-lg not-italic font-medium leading-[normal]">
                            {option}
                          </h2>
                        </option>
                      );
                    })}
                  </select>
                  <div className="icon-container pointer-events-none w-[50px] h-[100%] absolute -top-1.5 right-0 flex items-center justify-center ">
                    <span className="text-[30px] text-black  ">
                      <FaSortDown />
                    </span>
                  </div>
                </div>
              </div>
              <div className="py-3">
                <button
                  onClick={handleSubmit}
                  className="text-white text-[19px] font-Montserrat bg-[#211F3B] px-36 py-2.5 not-italic font-bold leading-[normal]"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
