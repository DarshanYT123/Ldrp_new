import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";


const PrincipleSidebar = () => {

  const [activeTab, setActiveTab] = useState("tab1");
   const menuItems = [
    {
      name: "Home",
      exact: true,
      to: "/principle",
    },
      {
      name: "Attendance",
      exact: true,
      to: "/attendanceprinciple",
    },
    {
      name: "Results",
      exact: true,
      to: "/resultspriciple",
    },
    {
      name: "Fees Details",
      exact: true,
      to: "/feesprinciple",
    },
    {
      name: "University",
      exact: true,
      to: "/universityprinciple",
    },
    {
      name: "Notification",
      exact: true,
      to: "/dashprinciple",
    },
  ];
  
  return (
    <div className="   relative  -top-0.5 p-2 ">
    <div className=" side-menu h-screen rounded-lg    ">
    <div className="py-7  ">
    <div className="flex items-center justify-center   ">
      <a href="">
        <div className="pt-4 flex flex-col justify-center items-center ">
      <img
src="/img/User.png"
        alt="logo"
        className=" w-24  object-cover "
      />
      <div className="flex flex-col justify-center items-center">
       <h2 className="text-[color:var(--01,#16376E)] text-[18px] not-italic font-Poppins font-bold leading-[normal] tracking-[0.32px] capitalize">Sandip Modha</h2>
       <h2 className="text-[color:var(--01,#16376E)] text-[12px] not-italic font-Poppins font-normal leading-[normal] tracking-[0.2px] capitalize text-center ">HOD of Computer Engineering 
Department</h2>
      </div>
      </div>
      </a>
            </div>
            <div className="main-menu  pt-5 flex flex-col justify-center items-center   ">
            <ul className="space-y-2 ">
            {menuItems.map((menuItem,index) => (
             <NavLink
             key={index}
             exact
             to={menuItem.to}
             // onClick={() => {
             //   setExpand((e) => !e);
             // }}
             className={`menu-item `}
           >
             <span className="pl-3">{menuItem.name}</span>
                    {/* <h2 className="absolute left-full rounded-md px-2 py-1 ml-6 bg-red text-black text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 ">{menuItem.name}</h2> */}
           </NavLink>
)
) }
</ul>

     </div>
            <div>
           
     </div>
            </div>
            </div>

 
   </div>
  );
};

export default PrincipleSidebar;

