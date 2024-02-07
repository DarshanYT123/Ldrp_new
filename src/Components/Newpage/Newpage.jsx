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
    to: "/attendancementor",
  },
  {
    name: "Results",
    exact: true,
    to: "/resultsmentor",
  },
  {
    name: "Fees Details",
    exact: true,
    to: "/feesmentor",
  },
  {
    name: "Mentoring Session",
    exact: true,
    to: "/sessionmentor",
  },
];

  
  return (
    <div className="   relative  top-2 p-2 ">
    <div className=" side-menu  rounded-lg h-screen ">
    <div className="         pt-3  ">
    <div className="flex items-center justify-center   ">
      <a href="">
        <div className="pt-12 flex flex-col justify-center items-center">
      <img
      src="/img/User.png"
        alt="logo"
        className=" w-36  object-cover "
      />
      <div>
       <h2 className="text-[color:var(--01,#16376E)] text-[18px] not-italic font-Poppins font-semibold leading-[normal] tracking-[0.32px] capitalize">Raj Mehta</h2>
       <h2 className="text-[color:var(--01,#16376E)] text-[12px] not-italic font-Poppins font-normal leading-[normal] tracking-[0.2px] capitalize">21BECE30000</h2>
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