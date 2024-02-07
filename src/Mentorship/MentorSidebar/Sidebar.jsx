import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Sidebar = () => {

  const [activeTab, setActiveTab] = useState("Home");
  const handleClick = () => {
    setActiveTab("");
};
const menuItems = [
  {
    name: "Mentoring Form",
    exact: true,
    to: "/mentorship",
  },
    {
    name: "Attendance",
    exact: true,
    to: "/attendancementorship",
  },
  {
    name: "Results",
    exact: true,
    to: "/resultsmentorship",
  },
  {
    name: "Fees Details",
    exact: true,
    to: "/feesmentorship",
  },
  {
    name: "Mentoring Session",
    exact: true,
    to: "/sessionmentorship",
  },
];

  
  return (
    <div className="   relative  -top-0.5 p-2 ">
    <div className=" side-menu h-screen rounded-lg    ">
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
       <h2 className="text-[color:var(--01,#16376E)] text-[18px] not-italic font-Poppins font-semibold leading-[normal] tracking-[0.32px] capitalize">Ashish Ram</h2>
       <h2 className="text-[color:var(--01,#16376E)] text-[12px] not-italic font-Poppins font-normal leading-[normal] tracking-[0.2px] capitalize text-center "><span className="text-[color:var(--01,#16376E)] text-[12px] not-italic font-Poppins font-semibold leading-[normal] tracking-[0.2px] capitalize">Mentor</span> 5th CE - D Devision</h2>
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
{/* <Link to="/dashboard">
               <p className={`${activeTab === "Mentoring Form" ? " bg-[#47A5E4] text-white border-transparent cursor-pointer rounded-[6px] text-[16px] font-Poppins  px-12 py-2 not-italic font-bold leading-[normal] tracking-[0.32px] capitalize " : "border-transparent  text-black text-[16px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.32px] capitalize"}`} onClick={() => setActiveTab("Mentoring Form")} >Mentoring Form</p>
               </Link>
               <Link to="/attendance">
               <p className={`${activeTab === "Attendance" ? " bg-[#47A5E4] text-white border-transparent cursor-pointer rounded-[6px] text-[16px] font-Poppins  px-14 py-2 not-italic font-bold leading-[normal] tracking-[0.32px] capitalize " : "border-transparent  text-black text-[16px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.32px] capitalize"}`} onClick={() => setActiveTab("Attendance")} >Attendance</p>
               </Link>
               <Link to="/results">
               <p className={`${activeTab === "Results" ? " bg-[#47A5E4] text-white border-transparent cursor-pointer rounded-[6px] text-[16px] font-Poppins  px-20 py-2 not-italic font-bold leading-[normal] tracking-[0.32px] capitalize " : "border-transparent  text-black text-[16px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.32px] capitalize"}`} onClick={() => setActiveTab("Results")} >Results</p>
               </Link>
               <Link to="/fees">
               <p className={`${activeTab === "Fees Details" ? " bg-[#47A5E4] text-white border-transparent cursor-pointer rounded-[6px] text-[16px] font-Poppins  px-14 py-2 not-italic font-bold leading-[normal] tracking-[0.32px] capitalize " : "border-transparent  text-black text-[16px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.32px] capitalize"}`} onClick={() => setActiveTab("Fees Details")} >Fees Details</p>
               </Link>
               <Link to="/university">
               <p className={`${activeTab === "University" ? " bg-[#47A5E4] text-white border-transparent cursor-pointer rounded-[6px] text-[16px] font-Poppins  px-14 py-2 not-italic font-bold leading-[normal] tracking-[0.32px] capitalize " : "border-transparent  text-black text-[16px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.32px] capitalize"}`} onClick={() => setActiveTab("University")} >University</p>
               </Link>
               <Link to="/notification">
               <p className={`${activeTab === "Notification" ? " bg-[#47A5E4] text-white border-transparent cursor-pointer rounded-[6px] text-[16px] font-Poppins  px-12 py-2 not-italic font-bold leading-[normal] tracking-[0.32px] capitalize " : "border-transparent  text-black text-[16px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.32px] capitalize"}`} onClick={() => setActiveTab("Notification")} >Notification</p>
               </Link> */}
     </div>
            <div>
           
     </div>
            </div>
            </div>

          
     {/* <div className="px-10">
       <TabContent id="tab1" activeTab={activeTab}>
         <BasicInfoDashboard/>
       </TabContent>
       <TabContent id="tab2" activeTab={activeTab}>
        <Attendance/>
       </TabContent>
       <TabContent id="tab3" activeTab={activeTab}>
             <ResultSection />
       </TabContent>
       <TabContent id="tab4" activeTab={activeTab}>
       <FeesDetails/>
       </TabContent>
       <TabContent id="tab5" activeTab={activeTab}>
       <University />
       </TabContent>
       <TabContent id="tab6" activeTab={activeTab}>
         <Notification />
       </TabContent>
     </div> */}
   </div>

  );
};

export default Sidebar;
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
