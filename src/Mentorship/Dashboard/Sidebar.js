import React, { useState } from "react";

import TabNavItem from "../TabNavItem/TabNavItem";
import TabContent from "../TabContent/TabContent";
import Basicinfo from "../../Components/Basicinfo/Basicinfo";
import BasicInfoDashboard from "../BasicInfoDashboard/BasicInfoDashboard";
import Results from "../Results/Results";
import Attendance from "../Attendance/Attendance";
import University from "../University/University";
import SecondResults from "../Results/SecondResults";
import Notification from "../Notification/Notification";
import FeesDetails from "../FeesDetails/FeesDetails"
import ResultSection from "../Results/ResultSection"
// import carditcard from "../../../Admin/images/craditcard.png";
// import carditcard2 from "../../../Admin/images/craditcard2.png";
// import bgimage from "../../../Admin/images/bgimage.png";
// import cards from "../../../Admin/images/cards.jpg";
// import visa from "../../../Admin/images/visa.png";
// import aexpress from "../../../Admin/images/aexpress.png";
// import PaytmLogo from "../../../Admin/images/Paytm-Logo.png";
// import paytmscanner from "../../../Admin/images/paytm-scanner.png";
// import googlelogo from "../../../Admin/images/google-logo.png";
// import googlescaaner from "../../../Admin/images/googlescaaner.png";
// import PhonePelogo from "../../../Admin/images/PhonePe-logo.png";
// import accepted from "../../../Admin/images/accepted.png";

const Sidebar = () => {

  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="">
     <div className="px-2">
     <div className=" rounded-lg  bg-white  w-[240px] h-[729px]  left-0   ">
     <div className="flex items-center justify-center   ">
       <a href="/dashboard">
         <div className="pt-12">
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
             <ul className=" flex flex-col justify-center items-center my-4 space-y-5">
                      <TabNavItem
          title="Mentoring Form"
          id="tab1"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Attendance"
          id="tab2"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Results"
          id="tab3"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Fees details"
          id="tab4"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="University"
          id="tab5"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Notification"
          id="tab6"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ul>
             <div>
            
      </div>
             </div>
             </div>

           
      <div className="px-10">
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
      </div>
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
