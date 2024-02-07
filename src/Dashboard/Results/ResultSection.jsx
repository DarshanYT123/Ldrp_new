import React, { useState } from "react";
import TabNavItem from "../TabNavItem/TabNavItem";
import TabContent from "../TabContent/TabContent";
import Results from "./Results";
import SecondResults from "./SecondResults";

const ResultSection = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    const [curr,setCurr] = useState(0)
    const handleprev = (id) =>{
        setCurr((curr) => (curr === 0 ? id.length - 1 : curr - 1) )
    }
    const handlenext = (id) =>{
      setCurr((curr) => (curr ===  id.length - 1 ? 0 : curr + 1) )
      
    }

  return (
    <>
    <div className="w-full  px-2 ">
      <div className="overflow-hidden rounded-lg  w-full  p-10  pt-5  bg-white  ">
       
      <div className="flex justify-center  items-center ">
          <h2 className="text-[color:var(--02,#47A5E4)] text-[20px] font-Raleway not-italic font-bold leading-[normal] tracking-[1.1px]">
          Results Details
          </h2>
        </div>  
              <div className="flex flex-col justify-center items-center ">
          <div className="flex flex-row gap-x-0.5  py-3 ">
        
        <ul className="flex flex-row items-start justify-between bg-[#F5F5F5] shadow-[0px_4px_12px_0px_rgba(157,157,157,0.18)_inset] rounded-[3px] overflow-hidden ">
        <TabNavItem
          title="Result"
          id="tab1"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Final Result"
          id="tab2"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ul>
     
</div>

      <div className="">
        <TabContent id="tab1" activeTab={activeTab}>
        <Results />
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <SecondResults/>
        </TabContent>
      </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default ResultSection;
