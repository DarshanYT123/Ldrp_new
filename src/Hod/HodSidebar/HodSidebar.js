import React, { useState } from "react";

import TabNavItem from "../TabNavItem/TabNavItem";
import TabContent from "../TabContent/TabContent";
import HodUniversity from "../University/HodUniversity";
import Notification from "../Notification/Notificationhod";
import MentorFeesDetails from "../FeesDetails/HodFeesDetails"
import MentorResultSection from "../Results/HodResultSection"
import ResultTable from "../Results/ResultTable";
import FeesTable from "../FeesDetails/FeesTableHodDetails";
import SecondFeesTable from "../FeesDetails/SecondFeesTable";
import AttendanceHod from "../../Hod/Attendance/AttendanceHod";
import Home from "../../Hod/HomeSidebar/Home";
import HodTable from "../HodForm/HodTable";
import HodDashboard from "../HodForm/HodDashboard";
// import HodResultTable from "../Results/HodResultTable";
import { NavLink, Link } from "react-router-dom";

const HodSidebar = () => {

  const [activeTab, setActiveTab] = useState("tab1");
  const menuItems = [
    {
      name: "Home",
      exact: true,
      to: "/hod",
    },
      {
      name: "Attendance",
      exact: true,
      to: "/attendancehod",
    },
    {
      name: "Results",
      exact: true,
      to: "/resultshod",
    },
    {
      name: "Fees Details",
      exact: true,
      to: "/feeshod",
    },
    {
      name: "Notification",
      exact: true,
      to: "/dashod",
    },

  ];

  return (
    <>
    <div className="   relative  -top-0.5 p-2 ">
    <div className=" side-menu  rounded-lg  h-screen ">
    <div className="py-12  ">
    <div className="flex items-center justify-center   ">
      <a href="">
        <div className="pt-4 flex flex-col justify-center items-center ">
      <img
src="/img/User.png"
        alt="logo"
        className=" w-24  object-cover "
      />
      <div className="flex flex-col justify-center items-center">
       <h2 className="text-[color:var(--01,#16376E)] text-[18px] not-italic font-Poppins font-semibold leading-[normal] tracking-[0.32px] capitalize">Sandip Modha</h2>
       <h2 className="text-[color:var(--01,#16376E)] text-[12px] not-italic font-Poppins font-normal leading-[normal] tracking-[0.2px] capitalize text-center "><span className="text-[color:var(--01,#16376E)] text-[12px] not-italic font-Poppins font-semibold leading-[normal] tracking-[0.2px] capitalize"> HOD </span>of Computer Engineering 
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

  
    </>
  );
};

export default HodSidebar;













// import React from "react";
// import { NavLink } from 'react-router-dom'

// const Sidebar = () => {
//   return (
//     <div className="px-2 ">
//     <div className=" rounded-lg  bg-white  w-[240px] h-[729px]  left-0 z-10  ">
//     <div className="flex items-center justify-center   ">
//       <a href="/dashboard">
//         <div className="pt-10">
//       <img
// src="/img/User.png"
//         alt="logo"
//         className=" w-32  object-cover "
//       />
//       </div>
//       </a>
      
//       </div>
//       <ul className="py-5 flex flex-col justify-center items-center my-4 space-y-5">
//       <NavLink  to="/form" className={({ isActive }) =>
//                     isActive ?  'text-[#12B28C] text-[24px] font-inter not-italic font-bold leading-[normal] tracking-[0.48px] ' :'text-[color:var(--01,#211F3B)] text-[22px] not-italic font-medium leading-[normal] font-inter    '}>Mentoring Form</NavLink>
//     <NavLink  to="/users" className={({ isActive }) =>
//                     isActive ? 'text-[#12B28C] text-[24px] font-inter not-italic font-bold leading-[normal] tracking-[0.48px] ' :'text-[color:var(--01,#211F3B)] text-[22px] not-italic font-medium leading-[normal] font-inter   '}>Users</NavLink>
//     <NavLink  to="/for" className={({ isActive }) =>
//     isActive ? 'text-[#12B28C] text-[24px] font-inter not-italic font-bold leading-[normal] tracking-[0.48px]' :'text-[color:var(--01,#211F3B)] text-[22px] not-italic font-medium leading-[normal] font-inter   '}>Edit Form</NavLink>
//     <NavLink  to="/for" className={({ isActive }) =>
//     isActive ? 'text-[#12B28C] text-[24px] font-inter not-italic font-bold leading-[normal] tracking-[0.48px]' :'text-[color:var(--01,#211F3B)] text-[22px] not-italic font-medium leading-[normal] font-inter   '}>Edit Form</NavLink>
//     <NavLink  to="/for" className={({ isActive }) =>
//     isActive ? 'text-[#12B28C] text-[24px] font-inter not-italic font-bold leading-[normal] tracking-[0.48px]' :'text-[color:var(--01,#211F3B)] text-[22px] not-italic font-medium leading-[normal] font-inter   '}>Edit Form</NavLink>
//     <NavLink  to="/for" className={({ isActive }) =>
//     isActive ? 'text-[#12B28C] text-[24px] font-inter not-italic font-bold leading-[normal] tracking-[0.48px]' :'text-[color:var(--01,#211F3B)] text-[22px] not-italic font-medium leading-[normal] font-inter   '}>Edit Form</NavLink>
//       </ul>
//     </div>
   
//     </div>
//   );
// };

// export default Sidebar;
