import React, { useState } from "react";
import TabNavItem from "../TabNavItem/TabNavItem";
import TabContent from "../TabContent/TabContent";
import MentorCounsellerDetails from "./MentorCounsellerDetails";
import AttendanceSheet from "./AttendanceSheet";

const MentoringSession = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [curr, setCurr] = useState(0);
  const handleprev = (id) => {
    setCurr((curr) => (curr === 0 ? id.length - 1 : curr - 1));
  };
  const handlenext = (id) => {
    setCurr((curr) => (curr === id.length - 1 ? 0 : curr + 1));
  };

  return (
    <>
    <div className="px-2">
      <div className=" overflow-y-scroll  py-5 px-2 rounded-lg p-10 over  bg-white ">
      <div className="   ">
        {/* <div className="flex justify-center  items-center ">
          <h2 className="text-[color:var(--02,#47A5E4)] text-[20px] font-Raleway not-italic font-bold leading-[normal] tracking-[1.1px]">
          Results Details
          </h2>
        </div>     */}
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row gap-x-0.5  py-3 ">
            <ul className="flex flex-row items-center justify-between bg-[#F5F5F5] shadow-[0px_4px_12px_0px_rgba(157,157,157,0.18)_inset] rounded-[3px] overflow-hidden ">
              <TabNavItem
                title="Counseller Details"
                id="tab1"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              <TabNavItem
                title="Attendance Sheet"
                id="tab2"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </ul>
          </div>

          <div className="">
            <TabContent id="tab1" activeTab={activeTab}>
              <MentorCounsellerDetails />
            </TabContent>
            <TabContent id="tab2" activeTab={activeTab}>
              <AttendanceSheet />
            </TabContent>
          </div>
        </div>
      </div>
</div>
</div>
    </>
  );
};

export default MentoringSession;
