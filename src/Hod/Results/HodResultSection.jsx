import React, { useState } from "react";
import TabNavItem from "../TabNavItem/TabNavItem";
import TabContent from "../TabContent/TabContent";
import HodResultsnew from "./HodResultsnew";
import MentorSecondResults from "./MentorSecondResults";
import { BiRightArrowAlt } from 'react-icons/bi'

const HodResultSection = () => {
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
      <div className="px-2 w-full  ">
      <div className="flex flex-row justify-between ">
      <div className="flex flex-row py-1 gap-x-1 absolute top-20 justify-start items-center">
        <h2 className="text-[color:var(--black,#101010)] text-[12px] font-inter not-italic font-bold leading-[normal] tracking-[0.66px]">Results</h2>
        <span><BiRightArrowAlt/></span>
        <h2  className="text-[color:var(--black,#101010)] text-[12px] font-inter not-italic font-bold leading-[normal] tracking-[0.66px]">21BECE30000 </h2>
      </div>
     {/* <div className="py-2 flex justify-end ">
      <h2 className="text-[color:var(--black,#101010)] text-[14px] font-Poppins not-italic font-semibold leading-[normal] tracking-[0.28px] capitalize">Last Login</h2>
      <h2 className="text-[color:var(--black,#101010)] text-[14px] font-Poppins not-italic font-normal leading-[normal] tracking-[0.28px] capitalize px-3">2 :00 pM , Sunday 15 Oct 2023</h2>
    </div> */}
    </div>
      <div className=" px-[1.2rem]  py-2  bg-white rounded-lg ">
      <div className="flex flex-row justify-between">
        <h2 className="text-[color:var(--01,#16376E)] text-[20px] font-Poppins not-italic font-bold leading-[normal] tracking-[1.1px]">21BECE30000</h2>
        <h2 className="text-[color:var(--01,#16376E)] text-[18px] font-Poppins not-italic font-bold leading-[normal] tracking-[0.99px]">Raj Mehta</h2>
      </div>
 
      <div className="w-full  px-2 ">
      <div className="overflow-hidden rounded-lg  w-full  p-10  pt-5  bg-white ">
       
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
        <HodResultsnew />
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <MentorSecondResults/>
        </TabContent>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default HodResultSection;
